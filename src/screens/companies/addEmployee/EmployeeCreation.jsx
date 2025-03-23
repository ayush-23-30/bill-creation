import React, { useState } from "react";
import { useWizard } from "react-use-wizard";

import { F_H, gender, LOCATIONS, paymentMode, yesNo } from "@/util/Data";
import Select from "react-dropdown-select";
import { useFormData } from "@/util/ContectApi";
import { CustomInput, useKeyboardNavigation } from "@/util/utils";

export default function EmployeeCreation() {
  const { nextStep, activeStep } = useWizard();
  const { formData, updateFormData, updateSelect } = useFormData();

  useKeyboardNavigation(nextStep, '');

  const handleChangestate = (selected) => {
    const selectedState = selected[0]?.label; // Extract label of the selected state
    updateSelect("employeeCreation", "perm_state", selectedState); // Update state field in employeeCreation
  };
  const handleChangestate2 = (selected) => {
    const selectedState = selected[0]?.label; // Extract label of the selected state
    updateSelect("employeeCreation", "pre_state", selectedState); // Update state field in employeeCreation
  };

  const handleChange_gender = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeCreation", "gender", selectedValue);
  };
  const handleChange_calc = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeCreation", "salary_calc", selectedValue);
  };
  const handleChange_tax = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeCreation", "state_tx", selectedValue);
  };
  const handleChange_fath = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeCreation", "father_husband", selectedValue);
  };
  const handleChange_grade = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeCreation", "grade", selectedValue);
  };
  const handleChange_location = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeCreation", "location", selectedValue);
  };
  const handleChange_depart = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeeCreation", "department", selectedValue);
  };

  // console.log("s", formData.employeeCreation);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("employeeCreation", name, value); // 'employeeCreation' section
  };

  function showData() {
    console.log("cration", formData?.employeeCreation);
  }

  function pfInputFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Employee Name
              </p>
              <CustomInput
                name="employeeName"
                type="text"
                value={formData.employeeCreation.employeeName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold justify-end text-center leading-4 w-1/3">
                Formal Name
              </p>
              <CustomInput
                name="formalName"
                type="text"
                value={formData.employeeCreation.formalName}
                onChange={handleChange}
                placeholder="Enter your formal name"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
          
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Code
              </p>
              <CustomInput
                name="code"
                type="text"
                value={formData.employeeCreation.code}
                onChange={handleChange}
                placeholder="Enter your code"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Sex
              </p>
              <Select
                options={gender}
                value={
                  formData.employeeTax?.gender
                    ? [
                        {
                          value: formData.employeeTax.gender,
                          label: formData.employeeTax.gender,
                        },
                      ]
                    : []
                }
                onChange={handleChange_gender}
                placeholder="Select Gender"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                Father's/Husband's Name{" "}
              </p>
              <CustomInput
                name="father_husband_name"
                type="text"
                value={formData.employeeCreation.father_husband_name}
                onChange={handleChange}
                placeholder="Enter your Father / Husband Name"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                Father/Husband{" "}
              </p>
              
              <Select
                options={F_H}
                value={
                  formData.employeeTax?.father_husband
                    ? [
                        {
                          value: formData.employeeTax.father_husband,
                          label: formData.employeeTax.father_husband,
                        },
                      ]
                    : []
                }
                onChange={handleChange_fath}
                placeholder="Select Father/Husband"
                labelField="label"
                valueField="value"
              />
           
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                Date of Birth{" "}
              </p>
              <CustomInput
                name="Dob"
                type="date"
                value={formData.employeeCreation.Dob}
                onChange={handleChange}
                placeholder="Enter your DOB"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                Date of Joining{" "}
              </p>
              <CustomInput
                name="Doj"
                type="date"
                value={formData.employeeCreation.Doj}
                onChange={handleChange}
                placeholder="Enter your Joining Date"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                Date of Confirmation{" "}
              </p>
              <CustomInput
                name="Doc"
                type="date"
                value={formData.employeeCreation.Doc}
                onChange={handleChange}
                placeholder="Enter your confirmation Date"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                Date of Increment{" "}
              </p>
              <CustomInput
                name="Doi"
                type="date"
                value={formData.employeeCreation.Doi}
                onChange={handleChange}
                placeholder="Enter Date of Increment"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                Probation Days{" "}
              </p>
              <CustomInput
                name="pd"
                type="text"
                value={formData.employeeCreation.pd}
                onChange={handleChange}
                placeholder="Enter your Probation Days"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Salary Calculate
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.salary_calc
                    ? [
                        {
                          value: formData.employeeTax.salary_calc,
                          label: formData.employeeTax.salary_calc,
                        },
                      ]
                    : []
                }
                onChange={handleChange_calc}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Grade**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.grade
                    ? [
                        {
                          value: formData.employeeTax.grade,
                          label: formData.employeeTax.grade,
                        },
                      ]
                    : []
                }
                onChange={handleChange_grade}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Location**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.location
                    ? [
                        {
                          value: formData.employeeTax.location,
                          label: formData.employeeTax.location,
                        },
                      ]
                    : []
                }
                onChange={handleChange_location}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Designation
              </p>
              <CustomInput
                name="designation"
                type="text"
                value={formData.employeeCreation.designation}
                onChange={handleChange}
                placeholder="Enter your Designation"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Department**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.department
                    ? [
                        {
                          value: formData.employeeTax.department,
                          label: formData.employeeTax.department,
                        },
                      ]
                    : []
                }
                onChange={handleChange_depart}
                placeholder="YES/NO"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

          {/* ------ Address Fields ----- */}
         

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Phone
              </p>
              <CustomInput
                name="phone"
                type="number"
                value={formData.employeeCreation.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                Alt. Phone{" "}
              </p>
              <CustomInput
                name="alt_phone"
                type="number"
                value={formData.employeeCreation.alt_phone}
                onChange={handleChange}
                placeholder="Enter your alternate phone"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Email
              </p>
              <CustomInput
                name="email"
                type="email"
                value={formData.employeeCreation.email}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>
           <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                State for Professional Tax** 
              </p>
              <Select
                options={yesNo}
                value={
                  formData.employeeTax?.state_tx
                    ? [
                        {
                          value: formData.employeeTax.state_tx,
                          label: formData.employeeTax.state_tx,
                        },
                      ]
                    : []
                }
                onChange={handleChange_tax}
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
      <div className="flex border-2 p-4 rounded-2xl flex-wrap mb-6 text-black">
        <h2 className="mx-auto text-xl font-bold">Permantent Address</h2>

        <div className="flex flex-row my-4 gap-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
            <p className="flex leading-4 font-semibold justify-end text-center">
              Address
            </p>
            <textarea
              name="perm_address"
              value={formData.employeeCreation.perm_address}
              onChange={handleChange}
              placeholder="Enter your Address"
              className="w-[94%] border focus:ring-blue-500 border-gray-300 bg-[#efefef] rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex mt-4 flex-row mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
            <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
              State
            </p>

            <Select
              options={LOCATIONS}
              value={
                formData.employeeCreation.perm_state
                  ? [
                      {
                        value: formData.employeeCreation.perm_state,
                        label: formData.employeeCreation.perm_state,
                      },
                    ]
                  : []
              } // Set the value based on the formData
              onChange={handleChangestate} // Call the handler when the selection changes
              placeholder="Select a state"
              labelField="label"
              valueField="value"
              searchable
              clearable
            />
          </div>

          <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                City
              </p>
              <CustomInput
                name="perm_city"
                type="text"
                value={formData.employeeCreation.perm_city}
                onChange={handleChange}
                placeholder="Enter your City"
                className="w-full"
              />
            </div>
          <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Pin
              </p>
              <CustomInput
                name="perm_pin"
                type="text"
                value={formData.employeeCreation.perm_pin}
                onChange={handleChange}
                placeholder="Enter your Pin"
                className="w-full"
              />
            </div>

        </div>
      </div>
    );
  }

  function pfMiddleSection2() {
    return (
      <div className="flex border-2 p-4 rounded-2xl flex-wrap mb-6 text-black">
        <h2 className="mx-auto text-xl font-bold">Present Address</h2>

        <div className="flex flex-row my-4 gap-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
            <p className="flex leading-4 font-semibold justify-end text-center ">
              Address
            </p>
            <textarea
              name="pre_address"
              value={formData.employeeCreation.pre_address}
              onChange={handleChange}
              placeholder="Enter your Address"
              className="w-[94%] border focus:ring-blue-500 border-gray-300 bg-[#efefef] rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex mt-4 flex-row mb-4 w-full">
          <div className="flex items-center flex-row gap-4 w-full">
            <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
              State
            </p>

            <Select
              options={LOCATIONS}
              value={
                formData.employeeCreation.pre_state
                  ? [
                      {
                        value: formData.employeeCreation.pre_state,
                        label: formData.employeeCreation.pre_state,
                      },
                    ]
                  : []
              } // Set the value based on the formData
              onChange={handleChangestate2} // Call the handler when the selection changes
              placeholder="Select a state"
              labelField="label"
              valueField="value"
              searchable
              clearable
            />
          </div>

          <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                City
              </p>
              <CustomInput
                name="pre_city"
                type="text"
                value={formData.employeeCreation.pre_city}
                onChange={handleChange}
                placeholder="Enter your City"
                className="w-full"
              />
            </div>
          <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Pin
              </p>
              <CustomInput
                name="pre_pin"
                type="text"
                value={formData.employeeCreation.pre_pin}
                onChange={handleChange}
                placeholder="Enter your City"
                className="w-full"
              />
            </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-[90vw]  bg-white mx-auto p-8  rounded-lg shadow-2xl text-center">
      <div className="flex justify-between mb-5 ">
        <h2 className="text-2xl text-black font-bold "> Employee Creation </h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 7{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}
      {pfInputFeilds()}
      {pfMiddleSection()}
      {pfMiddleSection2()}
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
