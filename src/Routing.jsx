import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Landing/Home";

const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<Home/>}/>
            </Routes>
    </>
  );
};

export default Routing;
