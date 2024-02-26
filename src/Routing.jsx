import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Landing/Home";
import Signup from "./Landing/Signup";
import LogIn from "./Landing/LogIn";
import AboutUs from "./Landing/AboutUs";
import ContactUs from "./Landing/ContactUs";
import AllLecturer from "./Landing/All-Lecturer";
import Profile from "./Landing/Lecturer-Profile";
import Dashboard from "./Teacher/Dashboard";
import Document from "./Teacher/Document";


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
        <Route path="/tutors" element={<AllLecturer />} />
        <Route path="/lecturer-details" element={<Profile />} />

        {/* Tutor */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/document" element={<Document />} />


      </Routes>
    </>
  );
};

export default Routing;
