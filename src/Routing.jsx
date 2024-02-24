import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Landing/Home";
import Signup from "./Landing/Signup";
import LogIn from "./Landing/LogIn";
import UIUX from "./Landing/UI-UX";
import AboutUs from "./Landing/AboutUs";
import ContactUs from "./Landing/ContactUs";


const Routing = () => {
  return (
    <>
      <Routes>

        {/* landing pages */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
    </>
  );
};

export default Routing;
