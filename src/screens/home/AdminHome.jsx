import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import { toast } from "react-toastify";
import axiosInstance from "@/sdk/axois";
import PageLoader from "../common/PageLoader";


export default function AdminHome() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const fetchDataPublic = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/api/public/health');
      console.log(response.data);
      toast.success('Rest Api Called !');
    } catch (error) {
      console.error('Error fetching public data:', error);
      toast.error(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataPublic();
  }, []);  

  return (
    <>
       {
        loading ? <PageLoader/> : <HeroSection />
      } 
    </>
  );
}
