import React, { useState } from "react";
import { useWizard } from "react-use-wizard";
import { CustomInput, useKeyboardNavigation } from "../../util/utils";
import { useFormData } from "@/util/ContectApi";
import { LOCATIONS } from "@/util/Data";
import Select from "react-dropdown-select";



// export default function StepOne({ formData, setFormData }) {

export default function CompanyCreation() {
  const { nextStep, activeStep } = useWizard();
  const { formData, updateFormData , updateSelect } = useFormData();

   useKeyboardNavigation(nextStep,'');

  // const [selectedLocation, setSelectedLocation] = useState(null);


const handleChangeselect = (selected) => {
 
  const selectedState = selected[0]?.label;  // Extract label of the selected state
  updateSelect('companyCreation', 'state', selectedState);  // Update state field in companyCreation
};

// console.log("state ---", formData.companyCreation.state);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData('companyCreation', name, value);  // 'companyCreation' section
  };
  
function showData (){
  console.log("cration", formData?.companyCreation);
}

// console.log("locations", LOCATIONS);

  function pfInputFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
          <div className="flex flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">Company Name</p>
              <CustomInput
                name="companyName"
                type="text"
                value={formData.companyCreation.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end text-center leading-4 w-1/3">Formal Name</p>
              <CustomInput
                name="formalName"
                type="text"
                value={formData.companyCreation.formalName}
                onChange={handleChange}
                placeholder="Enter your formal name"
                className="w-full"
              />
            </div>
          </div>

      

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">State</p>

               <Select
  options={LOCATIONS}  // Assuming LOCATIONS is an array of options like [{ value: 'NY', label: 'New York' }, ...]
  value={formData.companyCreation.state ? [{ value: formData.companyCreation.state, label: formData.companyCreation.state }] : []}  // Set the value based on the formData
  onChange={handleChangeselect}  // Call the handler when the selection changes
  placeholder="Select a state"
  labelField="label"
  valueField="value"
  searchable
  clearable
/>


            </div>
            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Email</p>
              <CustomInput
                name="email"
                type="email"
                value={formData.companyCreation.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Phone</p>
              <CustomInput
                name="phone"
                type="number"
                value={formData.companyCreation.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Alt. Email</p>
              <CustomInput
                name="alt_email"
                type="email"
                value={formData.companyCreation.alt_email}
                onChange={handleChange}
                placeholder="Enter your alternate email"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Alt. Phone</p>
              <CustomInput
                name="alt_phone"
                type="number"
                value={formData.companyCreation.alt_phone}
                onChange={handleChange}
                placeholder="Enter your alternate phone"
                className="w-full"
              />
            </div>

            <div className="flex items-center leading-4 flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end text-center w-1/3">
                Salary Start Date
              </p>
              <CustomInput
                name="salary_start_date"
                type="text"
                value={formData.companyCreation.salary_start_date}
                onChange={handleChange}
                placeholder="Enter your salary start date"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          <div className="flex leading-4 items-center flex-row gap-4 w-full">
               <p className="flex font-semibold justify-end leading-4 text-center w-1/3">Pan No.</p>
              <CustomInput
                name="pan_gir_no"
                type="text"
                value={formData.companyCreation.pan_gir_no}
                onChange={handleChange}
                placeholder="Enter your Pan No."
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Tan No.</p>
              <CustomInput
                name="tan_no"
                type="text"
                value={formData.companyCreation.tan_no}
                onChange={handleChange}
                placeholder="Enter your Tan No."
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">GST No.</p>
              <CustomInput
                name="gst"
                type="number"
                value={formData.companyCreation.gst}
                onChange={handleChange}
                placeholder="Enter your GST No."
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center w-1/3">Company Code</p>
              <CustomInput
                name="company_Code_payman_web"
                type="number"
                value={formData.companyCreation.company_Code_payman_web}
                onChange={handleChange}
                placeholder="Enter your company code"
                className="w-full"
              />
            </div>
          </div>

              {/* ------ Address Fields ----- */}
              <div className="flex flex-row my-4 gap-4 w-full">
              <div className="flex items-center flex-row gap-4 w-full">
               <p className="flex leading-4 font-semibold justify-end text-center ">Address</p>
              <textarea
                name="address"
                value={formData.companyCreation.address}
                onChange={handleChange}
                placeholder="Enter your Address"
                className="w-[94%] border focus:ring-blue-500 border-gray-300 bg-[#efefef] rounded-md p-2"
              />
            </div>
          </div>

          {/* ------ Address Change Web ----- */}
          <div className="flex items-center flex-row gap-4 w-full">
             <p className="flex font-semibold  justify-end leading-4 text-center ">Address Change Web</p>
            <CustomInput
              name="address_change_web"
              type="text"
              value={formData.companyCreation.address_change_web}
              onChange={handleChange}
              placeholder="Enter address change web"
              className="w-full placeholder:text-black"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-[90vw]  bg-white mx-auto p-8  rounded-lg shadow-2xl text-center">
      <div className="flex justify-between mb-5 ">
        <h2 className="text-2xl text-black font-bold ">Company Creation</h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 6{" "}
        </h2>
      </div>


      {/*  ------ input Feilds ------  */}
      {pfInputFeilds()}
      {/*  ------ input Feilds ------  */}

      <div className="flex justify-end">
        <button
          onClick={nextStep}
          // onClick={showData}
          className="bg-blue-500 text-white cursor-pointer py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
