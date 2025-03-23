import { useFormData } from "@/util/ContectApi";
import { yesNo } from "@/util/Data";
import { CustomInput, useKeyboardNavigation } from "@/util/utils";
import React from "react";
import Select from "react-dropdown-select";
import { useWizard } from "react-use-wizard";

function Employee_Alteration_two() {
  const { nextStep, previousStep, activeStep } = useWizard();

  useKeyboardNavigation(nextStep, previousStep);

  const { formData, updateFormData, updateSelect } = useFormData();

  const handleChange_pf = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "pf", selectedValue);
  };
  const handleChange_vpf = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "VPF", selectedValue);
  };
  const handleChange_eps = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "EPS", selectedValue);
  };
  const handleChange_slab = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "pf_calc_slab", selectedValue);
  };
  const handleChange_calc = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "pf_calc_basic", selectedValue);
  };

  const handleChange_trust = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "pf_trust", selectedValue);
  };
  const handleChange_other = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "pf_deposited", selectedValue);
  };
  const handleChange_branch = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "posted_other", selectedValue);
  };
  const handleChange_eps_calc = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "eps_calc", selectedValue);
  };
  const handleChange_esi = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "esi_no_yes", selectedValue);
  };
  const handleChange_remarks = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration_two", "other_remarks", selectedValue);
  };

  // console.log("eps_pro_rate", formData.employeeAlteration_two?.eps_pro_rate);
  // console.log(".epf_pro_rate", formData.employeeAlteration_two?.epf_pro_rate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("employeeAlteration_two", name, value); // 'employeeAlteration_two' section
  };

  function showData() {
    console.log("cration", formData.employeeAlteration_two);
  }

  function pfInputFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                PF (Yes/No){" "}
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.pf
                    ? [
                        {
                          value: formData.employeeAlteration_two.pf,
                          label: formData.employeeAlteration_two.pf,
                        },
                      ]
                    : []
                }
                onChange={handleChange_pf}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                EPS (Yes/No){" "}
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.EPS
                    ? [
                        {
                          value: formData.employeeAlteration_two.EPS,
                          label: formData.employeeAlteration_two.EPS,
                        },
                      ]
                    : []
                }
                onChange={handleChange_eps}
                placeholder="Select EPF Pro Rate"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">

          <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                VPF (Yes/No){" "}
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.VPF
                    ? [
                        {
                          value: formData.employeeAlteration_two.VPF,
                          label: formData.employeeAlteration_two.VPF,
                        },
                      ]
                    : []
                }
                onChange={handleChange_vpf}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
           Rate 
              </p>
              <CustomInput
                name="rate"
                type="number"
                value={formData.employeeAlteration_two.rate}
                onChange={handleChange}
                placeholder="Enter Rate"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               VPF Amount
              </p>
              <CustomInput
                name="vpfAmount"
                type="number"
                value={formData.employeeAlteration_two.vpfAmount}
                onChange={handleChange}
                placeholder="Enter VPF Amount"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                 PF No
              </p>
              <CustomInput
                name="pfNo"
                type="text"
                value={formData.employeeAlteration_two.pfNo}
                onChange={handleChange}
                placeholder="Enter PF No "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
              PF Date 
              </p>
              <CustomInput
                name="pfDate"
                type="date"
                value={formData.employeeAlteration_two.pfDate}
                onChange={handleChange}
                placeholder="Enter PF Date"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Prev. PF No.
              </p>
              <CustomInput
                name="prev_pf"
                type="text"
                value={formData.employeeAlteration_two.prev_pf}
                onChange={handleChange}
                placeholder="Enter Prev PF No."
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Prev. PF Date
              </p>
              <CustomInput
                name="prev_pf_date"
                type="date"
                value={formData.employeeAlteration_two.prev_pf_date}
                onChange={handleChange}
                placeholder="Enter Prev PF Date"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  function pfSelectionFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                PF Calculation on Slab (Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.pf_calc_slab
                    ? [
                        {
                          value: formData.employeeAlteration_two.pf_calc_slab,
                          label: formData.employeeAlteration_two.pf_calc_slab,
                        },
                      ]
                    : []
                }
                onChange={handleChange_slab}
                placeholder="Select EPF Pro Rate"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
               PF Calculation only on Basic (Yes/No) {" "}
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.pf_calc_basic
                    ? [
                        {
                          value: formData.employeeAlteration_two.pf_calc_basic,
                          label: formData.employeeAlteration_two.pf_calc_basic,
                        },
                      ]
                    : []
                }
                onChange={handleChange_calc}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>
          </div>
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                PF Trust Member (Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.pf_trust
                    ? [
                        {
                          value: formData.employeeAlteration_two.pf_trust,
                          label: formData.employeeAlteration_two.pf_trust,
                        },
                      ]
                    : []
                }
                onChange={handleChange_trust}
                placeholder="Select EPF Pro Rate"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                PF Deposited in Other PF(Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.pf_deposited
                    ? [
                        {
                          value: formData.employeeAlteration_two.pf_deposited,
                          label: formData.employeeAlteration_two.pf_deposited,
                        },
                      ]
                    : []
                }
                onChange={handleChange_other}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>
          </div>
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
Posted in Other Branch (Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.posted_other
                    ? [
                        {
                          value: formData.employeeAlteration_two.posted_other,
                          label: formData.employeeAlteration_two.posted_other,
                        },
                      ]
                    : []
                }
                onChange={handleChange_branch}
                placeholder="Select EPF Pro Rate"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                EPS Calculation on Slab (Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.eps_calc
                    ? [
                        {
                          value: formData.employeeAlteration_two.eps_calc,
                          label: formData.employeeAlteration_two.eps_calc,
                        },
                      ]
                    : []
                }
                onChange={handleChange_eps_calc}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
                 
              />
            </div>

            
          </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               UAN No.
              </p>
              <CustomInput
                name="uanNo"
                type="number"
                value={formData.employeeAlteration_two.uanNo}
                onChange={handleChange}
                placeholder="1234567890"
                className="w-[50%] "
              />
            </div>



          
        </div>
      </>
    );
  }

  function pfFinalSection() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex  flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                ESI (Yes/No)
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.esi_no_yes
                    ? [
                        {
                          value: formData.employeeAlteration_two.esi_no_yes,
                          label: formData.employeeAlteration_two.esi_no_yes,
                        },
                      ]
                    : []
                }
                onChange={handleChange_esi}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
                 
              />
             
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                ESI No.
              </p>
              <CustomInput
                name="esi_no"
                type="number"
                value={formData.employeeAlteration_two.esi_no}
                onChange={handleChange}
                placeholder="Enter ESI No"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
              ESI Dispensary 
              </p>
              <CustomInput
                name="esi_dispensary"
                type="text"
                value={formData.employeeAlteration_two.esi_dispensary}
                onChange={handleChange}
                placeholder="Enter ESI Dispensary" 
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
           Other Remarks For ESI Soft Copy **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeAlteration_two?.other_remarks
                    ? [
                        {
                          value: formData.employeeAlteration_two.other_remarks,
                          label: formData.employeeAlteration_two.other_remarks,
                        },
                      ]
                    : []
                }
                onChange={handleChange_remarks}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
                 
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
        <h2 className="text-2xl text-black font-bold ">Employee PF/ESI </h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 7{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}
      {pfInputFeilds()}
      {pfSelectionFeilds()}
      {pfFinalSection()}
      {/*  ------ input Feilds ------  */}

      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 cursor-pointer text-white py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          // onClick={showData}
          className="bg-blue-500 cursor-pointer text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Employee_Alteration_two;
