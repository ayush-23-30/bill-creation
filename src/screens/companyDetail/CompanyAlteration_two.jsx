import React from "react";
import { useWizard } from "react-use-wizard";
import { CustomInput } from "../../util/utils";
import { useFormData } from "@/util/ContectApi";
import Select from "react-dropdown-select";
import { yesNo } from "@/util/Data";

export default function CompanyAlteration_two() {
  const { nextStep, previousStep, activeStep } = useWizard();

  const { formData, updateFormData, updateSelect } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("companyAlteration_two", name, value);
  };

  const handleChange_challan = (selected) => {
    const selectedValue = selected[0]?.value;  // Extract value (not label)
    updateSelect('companyAlteration_two', 'round_esi_challan', selectedValue); 
  };

 const showData = ()=> {
  console.log("Company two", formData.companyAlteration_two)
 }
  // console.log("challan", formData.companyAlteration_two.round_esi_challan);
  


  function pfInputFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex  leading-4 font-semibold justify-end text-center w-1/3">
                ESI Slab (Employees)
              </p>
              <CustomInput
                name="esi_slab_employees"
                type="number"
                value={formData.companyAlteration_two.esi_slab_employees}
                onChange={handleChange}
                placeholder="Enter Esi slab "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                ESI Slab (Employer){" "}
              </p>
              <CustomInput
                name="esi_slab_employer"
                type="number"
                value={formData.companyAlteration_two.esi_slab_employer}
                onChange={handleChange}
                placeholder="Enter Epi Slab"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                ESI Rate (Employees){" "}
              </p>
              <CustomInput
                name="esi_rate_employees"
                type="text"
                value={formData.companyAlteration_two.esi_rate_employees}
                onChange={handleChange}
                placeholder="Enter Esi rate"
                className="w-full"
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                ESI Rate (employer){" "}
              </p>
              <CustomInput
                name="esi_rate_employer"
                type="text"
                value={formData.companyAlteration_two.esi_rate_employer}
                onChange={handleChange}
                placeholder="Enter ESI RATE "
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Maximum ESI Amount Employees
              </p>
              <CustomInput
                name="max_esi_amount_employees"
                type="text"
                value={formData.companyAlteration_two.max_esi_amount_employees}
                onChange={handleChange}
                placeholder="Enter Maximum ESI Amount Employees"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                Maximum ESI Amount Employer
              </p>
              <CustomInput
                name="max_epi_amount_employer"
                type="number"
                value={formData.companyAlteration_two.max_epi_amount_employer}
                onChange={handleChange}
                placeholder="Enter Maximum ESI Amount Employer"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  function centerFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex  leading-4 font-semibold justify-end text-center w-1/3">
                ESI No.
              </p>
              <CustomInput
                name="esi_no"
                type="number"
                value={formData.companyAlteration_two.esi_no}
                onChange={handleChange}
                placeholder="Enter Esi No "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
               Employee ESI Rounded *
              </p>
              <CustomInput
                name="employee_esi_round"
                type="number"
                value={formData.companyAlteration_two.employee_esi_round}
                onChange={handleChange}
                placeholder="Enter Employee esi rounded"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
              Employer Esi round to 
              </p>
              <CustomInput
                name="employer_esi_round"
                type="text"
                value={formData.companyAlteration_two.employer_esi_round}
                onChange={handleChange}
                placeholder="Enter Employer ESI round"
                className="w-full"
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                Round ESI Challan Location Wise
              </p>
              <Select
  options={yesNo}
  value={
    formData.companyAlteration_two?.round_esi_challan
      ? [
          {
            value: formData.companyAlteration_two.round_esi_challan,
            label: formData.companyAlteration_two.round_esi_challan,
          },
        ]
      : []
  }
  onChange={handleChange_challan}
  placeholder="Select EPF Pro Rate"
  labelField="label"
  valueField="value"
  searchable
  clearable
/>
              {/* <CustomInput
                name="round_esi_challan"
                type="text"
                value={formData.companyAlteration_two.round_esi_challan}
                onChange={handleChange}
                placeholder="Enter Challan Location "
                className="w-full"
              /> */}
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                ESI Portal User Name
              </p>
              <CustomInput
                name="esi_portal_user_name"
                type="text"
                value={formData.companyAlteration_two.esi_portal_user_name}
                onChange={handleChange}
                placeholder="Enter ESI Portal User Name"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
               ESI Portal Password
              </p>
              <CustomInput
                name="esi_portal_password"
                type="number"
                value={formData.companyAlteration_two.esi_portal_password}
                onChange={handleChange}
                placeholder="Enter ESI Portal Password "
                className="w-full"
              />
            </div>
          </div>
            <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
              <div className="flex items-center flex-row gap-4 w-full">
                <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                  Calculate ESI On Total (For earning more than Limit)
                </p>
                <CustomInput
                  name="calculate_esi"
                  type="text"
                  value={formData.companyAlteration_two.calculate_esi}
                  onChange={handleChange}
                  placeholder="Calculate ESI On Total"
                  className="w-full"
                />
              </div>
            </div>
        </div>
      </>
    );
  }

  function bottomSection() {
    return (
      <>
        <div className="flex  border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex justify-center items-center flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Bonus Slab
              </p>
              <CustomInput
                name="bonus_slab"
                type="text"
                value={formData.companyAlteration_two.bonus_slab}
                onChange={handleChange}
                placeholder="Enter Bonus "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Bonus Application Max Limit
              </p>
              <CustomInput
                name="bonus_app_max"
                type="number"
                value={formData.companyAlteration_two.bonus_app_max}
                onChange={handleChange}
                placeholder="Enter Bonus Application Limit"
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
          Company Alteration Page - 2
        </h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 6{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}
      {pfInputFeilds()}
      {centerFeilds()}
      {bottomSection()}

      {/*  ------ input Feilds ------  */}

      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 text-white cursor-pointer py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
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
