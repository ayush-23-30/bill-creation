import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgetPassword from "../screens/auth/ForgetPassword";

function Navigation() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default Navigation;
