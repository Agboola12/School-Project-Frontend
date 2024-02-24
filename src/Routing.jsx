import React from "react";
import { Route, Routes } from "react-router";

const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<Landing/>}/>
            </Routes>
    </>
  );
};

export default Routing;
