import React from "react";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const companies = [
  { id: "1sjkb2", name: "Tech Innovators" },
  { id: "axz23", name: "Eco Solutions" },
  { id: "2ewsa", name: "Finance First" },
];

function AllCompanies() {
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
          {companies.map((company, index) => (
            <div
              key={company.id}
              onClick={() => goToCompany(company.id, company.name)}
              className={`flex justify-between items-center text-black w-full cursor-pointer py-2 ${
                index !== companies.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="text-left font-poppins   font-medium">
                {company.name}
              </span>
              <span className="text-right font-open-sans ">#{company.id}</span>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#5e77e9] to-[#0070FA] h-[100vh]">
      {pagetitle()}
      {companyTable()}
    </div>
  );
}

export default AllCompanies;
