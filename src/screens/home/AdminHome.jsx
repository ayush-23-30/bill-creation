import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import { toast } from "react-toastify";
import authenticatedApiCall from "@/sdk/authApiCall";
import apiCall from "@/sdk/apiCall";




export default function AdminHome() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch organizations when the component mounts
  const fetchOrganizations = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
  
      if (!token) {
        throw new Error("No authentication token found. Please log in.");
      }

      console.log("Token from localStorage:", token); // Debugging line
  
      // Define the API endpoint
      const url = "/api/organizations/get-all";
  
      console.log("Making API call to:", url); // Debugging line
  
      // Make the API call using the apiCall utility
      const result = await apiCall({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
  
      console.log("API response:", result); // Debugging line
  
      // Handle the response
      if (result.error) {
        toast.info("Error in API response:", result.error); // Debugging line
        throw new Error(result.error);
      }
  
      // If successful, handle the data here
      console.log("Organizations data:", result.data); // Debugging line
    } catch (error) {
      setError(error.message || "Failed to fetch organizations");
      toast.error(error.message); // Show error toast
  
      // Redirect to login if unauthorized
      if (error.message.includes("Unauthorized")) {
        navigate("/");
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  
  
  // useEffect(() => {
  //   fetchOrganizations();
  // }, [navigate]);


  return (
    <>     
     <HeroSection/>
      </>
  );
}
