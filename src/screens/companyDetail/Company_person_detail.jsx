import React from 'react'

import { useWizard } from "react-use-wizard";
import { CustomButton, CustomInput } from "../../util/utils";
import { useState } from "react";
import { useFormData } from "@/util/ContectApi";
import Select from "react-dropdown-select";
import { yesNo } from "@/util/Data";
import { toast } from 'react-toastify';

function CompanyPersonDetail() {
  const { nextStep, previousStep, activeStep } = useWizard();

  const [loading, setLoading] = useState(false)

  const { formData, updateFormData, updateSelect } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData('company_person_responsible', name, value);  // 'company_person_responsible' section
  };

  const handleChange_cti = (selected) => {
    const selectedValue = selected[0]?.value;  // Extract value (not label)
    updateSelect('company_person_responsible', 'cit_details', selectedValue); 
  };
  const handleChange_tds = (selected) => {
    const selectedValue = selected[0]?.value;  // Extract value (not label)
    updateSelect('company_person_responsible', 'tds_round', selectedValue); 
  };
  const handleChange_type = (selected) => {
    const selectedValue = selected[0]?.value;  // Extract value (not label)
    updateSelect('company_person_responsible', 'deductor_type', selectedValue); 
  };
  const handleChange_create = (selected) => {
    const selectedValue = selected[0]?.value;  // Extract value (not label)
    updateSelect('company_person_responsible', 'non_tax_employee', selectedValue); 
  };
  const handleChange_return = (selected) => {
    const selectedValue = selected[0]?.value;  // Extract value (not label)
    updateSelect('company_person_responsible', 'address_change', selectedValue); 
  };

  const showData = ()=>{
    console.log("data", formData);
  }


  function pfInputFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold  justify-end text-center w-1/3"> Name</p>
              <CustomInput
                name="person_name"
                type="text"
                value={formData.company_person_responsible.person_name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Designation</p>
              <CustomInput
                name="designation"
                type="text"
                value={formData.company_person_responsible.designation}
                onChange={handleChange}
                placeholder="Enter your Designation"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">Flat/Door/block</p>
              <CustomInput
                name="flat"
                type="text"
                value={formData.company_person_responsible.flat}
                onChange={handleChange}
                placeholder="Enter your Flat No"
                className="w-full"
              />
            </div>

          </div>

      


          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">Premises/Building</p>
              <CustomInput
                name="premises"
                type="text"
                value={formData.company_person_responsible.premises}
                onChange={handleChange}
                placeholder="Enter your premises"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">Road/street/lane </p>
              <CustomInput
                name="road_street"
                type="text"
                value={formData.company_person_responsible.road_street}
                onChange={handleChange}
                placeholder="Enter Your Street name"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">Area/Locality</p>
              <CustomInput
                name="area"
                type="text"
                value={formData.company_person_responsible.area}
                onChange={handleChange}
                placeholder="Enter your Area "
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">
                Town/City 
              </p>
              <CustomInput
                name="town"
                type="text"
                value={formData.company_person_responsible.town}
                onChange={handleChange}
                placeholder="Enter District Or City"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">Pin No.</p>
              <CustomInput
                name="pin"
                type="text"
                value={formData.company_person_responsible.pin}
                onChange={handleChange}
                placeholder="Enter your Pin No."
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Phone </p>
              <CustomInput
                name="phone"
                type="text"
                value={formData.company_person_responsible.phone}
                onChange={handleChange}
                placeholder="Enter your No."
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
           
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">Email </p>
              <CustomInput
                name="email"
                type="email"
                value={formData.company_person_responsible.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3"> Alt. Email </p>
              <CustomInput
                name="alt_email"
                type="email"
                value={formData.company_person_responsible.alt_email}
                onChange={handleChange}
                placeholder="Enter your Alt Email"
                className="w-full"
              />
            </div>
          </div>


          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">

          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Fax No.</p>
              <CustomInput
                name="fax"
                type="number"
                value={formData.company_person_responsible.fax}
                onChange={handleChange}
                placeholder="Enter your FAX No."
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">Alt Phone no.</p>
              <CustomInput
                name="alt_phone"
                type="number"
                value={formData.company_person_responsible.alt_phone}
                onChange={handleChange}
                placeholder="Enter your Alt No."
                className="w-full"
              />
            </div>
            
          </div>

            

          {/* ------ Address Change Web ----- */}
          
        </div>
      </>
    );
  }

  function pfStartingSection() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex flex-row gap-4 mb-4 w-full">

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Address change since Last return 
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_person_responsible?.address_change
                    ? [
                        {
                          value:
                            formData.company_person_responsible.address_change,
                          label:
                            formData.company_person_responsible.address_change,
                        },
                      ]
                    : []
                }
                onChange={handleChange_return}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Non Taxable Employee Also in Challan create
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_person_responsible?.non_tax_employee
                    ? [
                        {
                          value:
                            formData.company_person_responsible.non_tax_employee,
                          label:
                            formData.company_person_responsible.non_tax_employee,
                        },
                      ]
                    : []
                }
                onChange={handleChange_create}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>


          <div className="flex  flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Deductor Type **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_person_responsible?.deductor_type
                    ? [
                        {
                          value: formData.company_person_responsible.deductor_type,
                          label: formData.company_person_responsible.deductor_type,
                        },
                      ]
                    : []
                }
                onChange={handleChange_type}
                placeholder="YES/No"
                labelField="label"
                valueField="value"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                TDS Component Round (yes/no)
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_person_responsible?.tds_round
                    ? [
                        {
                          value: formData.company_person_responsible.tds_round,
                          label: formData.company_person_responsible.tds_round,
                        },
                      ]
                    : []
                }
                onChange={handleChange_tds}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>
            <div className="flex items-center flex-row gap-4 mb-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                CIT (TDS) Details? 
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_person_responsible?.cit_details
                    ? [
                        {
                          value: formData.company_person_responsible.cit_details,
                          label: formData.company_person_responsible.cit_details,
                        },
                      ]
                    : []
                }
                onChange={handleChange_cti}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

          <div className="flex flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
               Traces User Name 
               </p>
              <CustomInput
                name="traces_user_name"
                type="text"
                value={formData.company_person_responsible.traces_user_name}
                onChange={handleChange}
                placeholder="Enter Traces name"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end text-center leading-4 w-1/3">Traces Password</p>
              <CustomInput
                name="traces_password"
                type="text"
                value={formData.company_person_responsible.traces_password}
                onChange={handleChange}
                placeholder="Enter Traces Password"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </>
    );
  }
  

  return (
    <div className="w-[90vw]  bg-white mx-auto p-8  rounded-lg shadow-2xl text-center">
      <div className="flex justify-between mb-5 ">
        <h2 className="text-2xl text-black font-bold ">
          Details of Persons Responsible
        </h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 6{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}
      {pfInputFeilds()}
      {pfStartingSection()}
      {/*  ------ input Feilds ------  */}

      <div className="flex  justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 cursor-pointer text-white py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <div className="">
         <CustomButton
                    // onClick={()=> toast.info("clicked")}
                    onClick={showData}
                    loading={loading}
                    disabled={false}
                  >
                    Sumbit 
                  </CustomButton>

        </div>
        {/* <button
          // onClick={nextStep}
          // onClick={() => toast.success("Till Now this is the last page")}
          // onClick={showData}
          className="bg-blue-500 cursor-pointer
           text-white py-2 px-6 rounded-md hover:bg-blue-600"
        > */}
          {/* Next */}
        {/* </button> */}
      </div>
    </div>
  );
}

export default CompanyPersonDetail
