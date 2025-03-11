import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import HeroSection from "./HeroSection";



export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="">
      {/* <Header/> */}
     
     <HeroSection/>
      </div>
  );
}
