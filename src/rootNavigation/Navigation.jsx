import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgetPassword from "../screens/auth/ForgetPassword";
import AdminHome from "../screens/home/AdminHome";
import CompanyFormDetails from "../screens/companyDetail/CompanyFormDetail";

function Navigation() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          <Route path="/dashboard" element = {<AdminHome/>} />
          <Route path="/add-company" element = {<CompanyFormDetails/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default Navigation;
