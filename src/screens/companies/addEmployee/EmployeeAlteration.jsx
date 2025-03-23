import { useFormData } from "@/util/ContectApi";
import { yesNo } from "@/util/Data";
import { CustomInput, useKeyboardNavigation } from "@/util/utils";
import React from "react";
import Select from "react-dropdown-select";
import { useWizard } from "react-use-wizard";

function EmployeeAlteration() {
  const { nextStep, previousStep, activeStep } = useWizard();

  useKeyboardNavigation(nextStep, previousStep);

  const { formData, updateFormData, updateSelect } = useFormData();

  const handleChange_lwf = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "LWF", selectedValue);
  };
  const handleChange_dem4 = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "dimensional4", selectedValue);
  };
  const handleChange_dim3 = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "dimensional3", selectedValue);
  };
  const handleChange_dem5 = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "dimensional5", selectedValue);
  };
  const handleChange_dim2 = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "dimensional2", selectedValue);
  };
  const handleChange_dim1 = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "dimensional", selectedValue);
  };
  const handleChange_nps = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "NPS", selectedValue);
  };
  const handleChange_cat = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "category", selectedValue);
  };
  const handleChange_min = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "min_wages_category", selectedValue);
  };
  const handleChange_status = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "joining_status", selectedValue);
  };
  const handleChange_curr = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "current_status", selectedValue);
  };
  const handleChange_exp = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeAlteration", "salary_export", selectedValue);
  };

  // console.log("s", formData.employeeAlteration);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("employeeAlteration", name, value); // 'employeeAlteration' section
  };

  function showData() {
    console.log("cration", formData?.employeeAlteration);
  }

  function pfInputFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Retirement Date
              </p>
              <CustomInput
                name="retirement_date"
                type="date"
                value={formData.employeeAlteration.retirement_date}
                onChange={handleChange}
                placeholder="Enter Retirement Date"
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold justify-end text-center leading-4 w-1/3">
                Salutation
              </p>
              <CustomInput
                name="salutation"
                type="text"
                value={formData.employeeAlteration.salutation}
                onChange={handleChange}
                placeholder="Enter your Salutation "
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Category**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.category
                    ? [
                        {
                          value: formData.employeeTax.category,
                          label: formData.employeeTax.category,
                        },
                      ]
                    : []
                }
                onChange={handleChange_cat}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Min Wages Category**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.min_wages_category
                    ? [
                        {
                          value: formData.employeeTax.min_wages_category,
                          label: formData.employeeTax.min_wages_category,
                        },
                      ]
                    : []
                }
                onChange={handleChange_min}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Dimensional 1**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.dimensional
                    ? [
                        {
                          value: formData.employeeTax.dimensional,
                          label: formData.employeeTax.dimensional,
                        },
                      ]
                    : []
                }
                onChange={handleChange_dim1}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Dimension 2**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.dimensional2
                    ? [
                        {
                          value: formData.employeeTax.dimensional2,
                          label: formData.employeeTax.dimensional2,
                        },
                      ]
                    : []
                }
                onChange={handleChange_dim2}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Dimension 3 **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.dimensional3
                    ? [
                        {
                          value: formData.employeeTax.dimensional3,
                          label: formData.employeeTax.dimensional3,
                        },
                      ]
                    : []
                }
                onChange={handleChange_dim3}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Dimension 4 **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.dimensional4
                    ? [
                        {
                          value: formData.employeeTax.dimensional4,
                          label: formData.employeeTax.dimensional4,
                        },
                      ]
                    : []
                }
                onChange={handleChange_dem4}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Dimension 5**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.dimensional5
                    ? [
                        {
                          value: formData.employeeTax.dimensional5,
                          label: formData.employeeTax.dimensional5,
                        },
                      ]
                    : []
                }
                onChange={handleChange_dem5}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                NPS (YES/NO)
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.NPS
                    ? [
                        {
                          value: formData.employeeTax.NPS,
                          label: formData.employeeTax.NPS,
                        },
                      ]
                    : []
                }
                onChange={handleChange_nps}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                LWF(YES/NO)
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.LWF
                    ? [
                        {
                          value: formData.employeeTax.LWF,
                          label: formData.employeeTax.LWF,
                        },
                      ]
                    : []
                }
                onChange={handleChange_lwf}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Joining Status **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.joining_status
                    ? [
                        {
                          value: formData.employeeTax.joining_status,
                          label: formData.employeeTax.joining_status,
                        },
                      ]
                    : []
                }
                onChange={handleChange_status}
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

  function pfMiddleSection() {
    return (
      <>
        <div className="flex border-2 p-4 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Current Status **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.current_status
                    ? [
                        {
                          value: formData.employeeTax.current_status,
                          label: formData.employeeTax.current_status,
                        },
                      ]
                    : []
                }
                onChange={handleChange_curr}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Salary Export as Payble (Yes/No)
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.salary_export
                    ? [
                        {
                          value: formData.employeeTax.salary_export,
                          label: formData.employeeTax.salary_export,
                        },
                      ]
                    : []
                }
                onChange={handleChange_exp}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Current Location Date
              </p>
              <CustomInput
                name="curr_location"
                type="date"
                value={formData.employeeAlteration.curr_location}
                onChange={handleChange}
                placeholder="Enter Current Location"
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Date of last Increment
              </p>
              <CustomInput
                name="doLI"
                type="date"
                value={formData.employeeAlteration.doLI}
                onChange={handleChange}
                placeholder="Enter last date Increment"
                className="w-full"
              />
            </div>
          

          </div>
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Date of last Promotion
              </p>
              <CustomInput
                name="doLP"
                type="date"
                value={formData.employeeAlteration.doLP}
                onChange={handleChange}
                placeholder="Enter promotion last date"
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold justify-end text-center leading-4 w-1/3">
                Date of Next Increment
              </p>
              <CustomInput
                name="doNI"
                type="date"
                value={formData.employeeAlteration.doNI}
                onChange={handleChange}
                placeholder="Enter Increment date  "
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                 Date of Absorption
              </p>
              <CustomInput
                name="doA"
                type="date"
                value={formData.employeeAlteration.doA}
                onChange={handleChange}
                placeholder="Enter Absorption Date"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold justify-end text-center leading-4 w-1/3">
                PRAN No
              </p>
              <CustomInput
                name="pranNo"
                type="text"
                value={formData.employeeAlteration.pranNo}
                onChange={handleChange}
                placeholder="Enter Pran No. "
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold justify-end text-center leading-4 w-1/3">
                Allowed Salary(%)
              </p>
              <CustomInput
                name="allowed_salary"
                type="number"
                value={formData.employeeAlteration.allowed_salary}
                onChange={handleChange}
                placeholder="Enter Allowed Salary "
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
        <h2 className="text-2xl text-black font-bold ">Employee Alteration</h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 7{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}

      {pfInputFeilds()}
      {pfMiddleSection()}

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

export default EmployeeAlteration;
