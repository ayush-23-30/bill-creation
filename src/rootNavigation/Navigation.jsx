import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgetPassword from "../screens/auth/ForgetPassword";
import AdminHome from "../screens/home/AdminHome";
import CompanyFormDetails from "../screens/companyDetail/CompanyFormDetail";
import Feature from "@/screens/home/Feature";
import Pricing from "@/screens/home/Pricing";
import Policies from "@/screens/home/Policies";
import AllCompanies from "@/screens/companies/AllCompanies";
import CompanyDetail from "@/screens/companies/CompanyDetail";
import GetHelp from "@/screens/home/GetHelp";
import AddEmployee from "@/screens/companies/addEmployee/AddEmployee";
import NotFound from "@/screens/common/NotFound";

// Private Route component to handle token validation
function PrivateRoute({ element }) {
  const token = localStorage.getItem('authToken');
  
  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/" />;
  }

  return element;
}

function Navigation() {
  const token = localStorage.getItem('authToken');

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        
        {/* Protected Routes (Admin Dashboard) */}
        <Route path="/dashboard" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/feature" element={<PrivateRoute element={<Feature />} />} />
        <Route path="/pricing" element={<PrivateRoute element={<Pricing />} />} />
        <Route path="/policy" element={<PrivateRoute element={<Policies />} />} />
        <Route path="/help" element={<PrivateRoute element={<GetHelp />} />} />

        {/* Company Sections */}
        <Route path="/add-company" element={<PrivateRoute element={<CompanyFormDetails />} />} />
        <Route path="/all-company" element={<PrivateRoute element={<AllCompanies />} />} />
        <Route path="/company-detail/:id" element={<PrivateRoute element={<CompanyDetail />} />} />
        <Route path="/add-employee" element={<PrivateRoute element={<AddEmployee />} />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
