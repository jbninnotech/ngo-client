import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const AnimatedCounter = ({
  end,
  suffix = "+",
  duration = 2000,
}) => {
  const counterRef = useRef(null);
  const animationStarted = useRef(false);
  const [count, setCount] = useState(0);

  const isVisible = useInView(counterRef, {
    once: true,
    amount: 0.6,
  });

  useEffect(() => {
    if (!isVisible || animationStarted.current) return;

    animationStarted.current = true;

    let animationFrame;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const smoothProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(smoothProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;