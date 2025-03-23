import { useFormData } from '@/util/ContectApi';
import { yesNo } from '@/util/Data';
import { CustomInput, useKeyboardNavigation } from '@/util/utils';
import React from 'react'
import Select from 'react-dropdown-select';
import { useWizard } from 'react-use-wizard';

function Employee_tax() {
  const { nextStep, previousStep, activeStep } = useWizard();

  const { formData, updateFormData, updateSelect } = useFormData();

  const employeeTax = formData.employeeTax || {};
  // console.log(employeeTax);

  

   useKeyboardNavigation(nextStep, previousStep);


  const handleChange_gross = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeTax", "earned_leave_calc_gross", selectedValue);
  };
  const handleChange_earned = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeTax", "earned_leave_method", selectedValue);
  };


  const handleChange_formula = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeTax", "earned_leave_calc_formula", selectedValue);
  };
  const handleChange_carry = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeTax", "medical_leave_carry", selectedValue);
  };
  const handleChange_leave_round = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeTax", "leave_rounded_to", selectedValue);
  };
  const handleChange_leave_period = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect(
      "employeeTax",
      "monitor_leave_period",
      selectedValue
    );
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("employeeTax", name, value); // 'companyAlteration' section
  };

  const showData = ()=> {
    console.log("Data ", formData.employeeTax);
  }

  //  earning_rounded_user_defined  earning_rounded

  function pfStartingSection() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
               Leave Register Start Month 
              </p>
              <CustomInput
                name="leave_register"
                type="text"
                value={formData?.employeeTax.leave_register}
                onChange={handleChange}
                placeholder="Leave Register"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Leave Rounded To **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.leave_rounded_to
                    ? [
                        {
                          value:
                            formData.employeeTax.leave_rounded_to,
                          label:
                            formData.employeeTax.leave_rounded_to,
                        },
                      ]
                    : []
                }
                onChange={handleChange_leave_round}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

          <div className="flex  flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Menitor Leave Period**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.monitor_leave_period
                    ? [
                        {
                          value: formData.employeeTax.monitor_leave_period,
                          label: formData.employeeTax.monitor_leave_period,
                        },
                      ]
                    : []
                }
                onChange={handleChange_leave_period}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

        </div>
      </>
    );
  }

  function pfSecMiddleSection() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
         
          <div className="flex items-center flex-row gap-4 mb-4 w-full">
          <div className="flex items-center flex-row gap-4  w-full">

              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Earned leave Calculation (Gross/Basic)**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.earned_leave_calc_gross
                    ? [
                        {
                          value:
                            formData.employeeTax.earned_leave_calc_gross,
                          label:
                            formData.employeeTax.earned_leave_calc_gross,
                        },
                      ]
                    : []
                }
                onChange={handleChange_gross}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
              
            </div>
          <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Earned leave Calculation (Formula/Days)**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.earned_leave_calc_formula
                    ? [
                        {
                          value:
                            formData.employeeTax.earned_leave_calc_formula,
                          label:
                            formData.employeeTax.earned_leave_calc_formula,
                        },
                      ]
                    : []
                }
                onChange={handleChange_formula}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />

            </div>
            </div>

            <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
              Enter formula 365/Days
              </p>
              <CustomInput
                name="enter_formula"
                type="text"
                value={formData.employeeTax.enter_formula}
                onChange={handleChange}
                placeholder="Enter Formula"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Accrual Period 
              </p>
              <CustomInput
                name="accrual_period"
                type="text"
                value={formData.employeeTax.accrual_period}
                onChange={handleChange}
                placeholder="Accrual Period"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">

          <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Earned leave Calculation Method **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.earned_leave_method
                    ? [
                        {
                          value:
                            formData.employeeTax.earned_leave_method,
                          label:
                            formData.employeeTax.earned_leave_method,
                        },
                      ]
                    : []
                }
                onChange={handleChange_earned}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />

            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
            Maximum Earned Leave
              </p>
              <CustomInput
                name="maximum_earned_leave"
                type="text"
                value={formData.employeeTax.maximum_earned_leave}
                onChange={handleChange}
                placeholder= " Maximum Earned leaves"
                className="w-full"
              />
            </div>

          </div>
        </div>
      </>
    );
  }

  function pf_third_Section() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Medical leave to be Carry forward 
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.medical_leave_carry
                    ? [
                        {
                          value: formData.employeeTax.medical_leave_carry,
                          label: formData.employeeTax.medical_leave_carry,
                        },
                      ]
                    : []
                }
                onChange={handleChange_carry}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
               Medical Leave Calculations
              </p>
              <CustomInput
                name="medical_leave_calc"
                type="text"
                value={formData.employeeTax.medical_leave_calc}
                onChange={handleChange}
                placeholder=" Medical Leave Calculations "
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
             Maximum Medical Leave
              </p>
              <CustomInput
                name="maximum_medical_leave"
                type="text"
                value={formData.employeeTax.maximum_medical_leave}
                onChange={handleChange}
                placeholder=" Medical Leave"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                Causal Calculations
              </p>
              <CustomInput
                name="casual_calc"
                type="text"
                value={formData.employeeTax.casual_calc}
                onChange={handleChange}
                placeholder="Causal Calculations"
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
          Company Leave Management
        </h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 6{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}
      {pfStartingSection()}
      {pfSecMiddleSection()}
      {pf_third_Section()}
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
          className="bg-blue-500 cursor-pointer
           text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Employee_tax
