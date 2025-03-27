import React, { useState } from "react";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "@/sdk/axois";
import { useEffect } from "react";
import PageLoader from "../common/PageLoader";

const companies = [
  { id: "1sjkb2", name: "Tech Innovators" },
  { id: "axz23", name: "Eco Solutions" },
  { id: "2ewsa", name: "Finance First" },
];

function AllCompanies() {
  const [loading, setLoading] = useState(false);
  const [CompanyData, setCompanyData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/organizations/get-all");
      setCompanyData(response.data);
      console.log(CompanyData);
      toast.success("Data fetched successfully!");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
      setError(error.message); // Set error state for further handling if needed
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function pagetitle() {
    return (
      <>
        <Header />

        <div className="px-4 mt-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                {" "}
                All Listed Companies
              </span>
            </h1>
          </div>
        </div>
      </>
    );
  }

  const navigate = useNavigate();

  const goToCompany = (id, name) => {
    navigate(`/company-detail/${id}`, { state: { name } });
  };

  function companyTable() {
    return (
      <>
        <div className="w-[75%] px-5 rounded-lg mt-10 bg-white mx-auto"> 
        
          {/* Title Section */}
          <div className="flex justify-between font-raleway text-black font-semibold text-lg pt-4">
            <span className="text-left">Company Name</span>
            <span className="text-right">ID</span>
          </div>

          {/* Company List */}
          {CompanyData.map(([id, name], index) => (
  <div
    key={id}
    onClick={() => goToCompany(id,name)} 
    // Use `id` and `name` here
    className={`flex justify-between items-center text-black w-full cursor-pointer py-2 ${
      index !== CompanyData.length - 1 ? "border-b" : ""
    }`}
  >
    <span className="text-left font-poppins font-medium">
      {name || "N/A"}
    </span>

    <span className="text-right font-open-sans">
      #{id || "N/A"}
    </span>
  </div>
))}


        </div>
      </>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#5e77e9] to-[#0070FA] h-[100vh]">
     
      {loading ? <PageLoader/> : 
      <div>
        {pagetitle()}
        {companyTable()}
      </div>
      } 

    </div>
  );
}

export default AllCompanies;
