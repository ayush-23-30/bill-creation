import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgetPassword from "../screens/auth/ForgetPassword";
import AdminHome from "../screens/home/AdminHome";
import CompanyFormDetails from "../screens/companyDetail/CompanyFormDetail";
import Feature from "@/screens/home/Feature";
import Pricing from "@/screens/home/Pricing";
import Policies from "@/screens/home/Policies";

function Navigation() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {/* ------- Auth ------- */}
          <Route path="/" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
{/* ---- Dashboard Admin ------ */}
          <Route path="/dashboard" element = {<AdminHome/>} />
          <Route path="/feature" element = {<Feature/>} />
          <Route path="/pricing" element = {<Pricing/>} />
          <Route path="/policy" element = {<Policies/>} />

          {/* ------- Company Sections ------ */}
          <Route path="/add-company" element = {<CompanyFormDetails/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default Navigation;
