import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";



export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="">
      <Header/>
      <div className="flex flex-col gap-4 p-4">
      <button
        onClick={() => navigate("/add-company")}
        className="w-full bg-blue-500 text-white py-3 rounded-md text-lg hover:bg-blue-600"
      >
        Open Wizard
      </button>
      <button
        className="w-full bg-green-500 text-white py-3 rounded-md text-lg hover:bg-green-600"
      >
        Green Button
      </button>
      </div>



    </div>
  );
}
