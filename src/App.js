import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Call from "./components/Call/Call";
import Campus from "./components/Campus/Campus";
import Course from "./components/Course/Course";
import Facilities from "./components/Facilities/Facilities";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Course />
                <Campus />
                <Facilities />
                <Testimonial />
                <Call />
              </>
            }
          />
          <Route path="/course" element={<Course />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Call />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
