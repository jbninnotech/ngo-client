import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Campaigns from "./Pages/Campaigns";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Volunteer from "./Pages/Volunteer";
import Contact from "./Pages/Contact";
// import Login from "./Pages/Login";
import Donate from "./Pages/Donate";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/programs"
          element={<Programs />}
        />

        <Route
          path="/campaigns"
          element={<Campaigns />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/volunteer"
          element={<Volunteer />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* <Route
          path="/login"
          element={<Login />}
        /> */}

        <Route
          path="/donate"
          element={<Donate />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;