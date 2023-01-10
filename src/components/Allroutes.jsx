import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../view/Home";
import Dashboard from "../view/Dashboard";
import Login from "../view/Login";
import { Box } from "@chakra-ui/react";
import RequiredAuth from "../hoc/RequiredAuth";

const Allroutes = () => {
  return (
    <Box marginTop="60px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            <RequiredAuth>
              {" "}
              <Dashboard />
            </RequiredAuth>
          }
        />
      </Routes>
    </Box>
  );
};

export default Allroutes;
