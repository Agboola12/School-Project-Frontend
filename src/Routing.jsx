import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from "./Landing/Home";
import Signup from "./Landing/Signup";
import LogIn from "./Landing/LogIn";
import AboutUs from "./Landing/AboutUs";
import ContactUs from "./Landing/ContactUs";
import AllLecturer from "./Landing/All-Lecturer";
import Profile from "./Landing/Lecturer-Profile";
import Dashboard from "./Teacher/Dashboard";
import Document from "./Teacher/Document";
import AdminGuard from "./Guard/adminGuard";
import axios from "axios";
import EditProfile from "./Teacher/Edit-Profile";

axios.interceptors.request.use((value) =>{
  value.headers = {
    "Authorization" : localStorage.token
  };
  return value;
})

const Routing = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* landing pages */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/tutors" element={<AllLecturer />} />
        <Route path="/tutordetails" element={<Profile />} />

        {/* Tutor */}
        <Route path="/" element={<AdminGuard />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/document" element={<Document />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
    </>
  );
};

export default Routing;
