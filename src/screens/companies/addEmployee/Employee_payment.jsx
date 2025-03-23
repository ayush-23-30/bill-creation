import { useFormData } from "@/util/ContectApi";
import { paymentMode, yesNo } from "@/util/Data";
import { CustomInput, useKeyboardNavigation } from "@/util/utils";
import React from "react";
import Select from "react-dropdown-select";
import { useWizard } from "react-use-wizard";

function Employee_payment() {
  const { nextStep, previousStep, activeStep } = useWizard();

  useKeyboardNavigation(nextStep, previousStep);

  const { formData, updateFormData, updateSelect } = useFormData();

  const handleChange_mode = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeePayment", "paymentMode", selectedValue);
  };
  const handleChange_paid = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeePayment", "march_paid", selectedValue);
  };

  const handleChange_bank = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeePayment", "allowance_bank", selectedValue);
  };
  const handleChange_ot = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeePayment", "ot", selectedValue);
  };
  const handleChange_bonus = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeePayment", "bonus", selectedValue);
  };
  const handleChange_ex = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeePayment", "exgratia", selectedValue);
  };
  const handleChange_wage = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeePayment", "d_wages", selectedValue);
  };
  const handleChange_wise = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("employeePayment", "shift_wise", selectedValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("employeePayment", name, value); // ' employeePayment' section
  };

  function showData() {
    console.log("cration", formData.employeePayment);
  }

  function pfInputFeilds(){
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex items-center flex-row gap-4 w-full">
            <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
              Payment Mode
            </p>
            <Select
              options={paymentMode}
              value={
                formData.employeePayment?.paymentMode
                  ? [
                      {
                        value: formData.employeePayment.paymentMode,
                        label: formData.employeePayment.paymentMode,
                      },
                    ]
                  : []
              }
              onChange={handleChange_mode}
              placeholder="Payment Mode"
              labelField="label"
              valueField="value"
              searchable
            />
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Salary Bank Name
              </p>
              <CustomInput
                name="SalaryBankName"
                type="text"
                value={formData.employeePayment.SalaryBankName}
                onChange={handleChange}
                placeholder="Bank Name"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Salary Bank Account No
              </p>
              <CustomInput
                name="SalaryAccNo"
                type="Text"
                value={formData.employeePayment.SalaryAccNo}
                onChange={handleChange}
                placeholder="Account No"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                IFSC Code
              </p>
              <CustomInput
                name="Ifsccode"
                type="text"
                value={formData.employeePayment.Ifsccode}
                onChange={handleChange}
                placeholder="IFSC Code"
              />
            </div>
          </div>


          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">

            <div className="flex items-center flex-row gap-4 w-full">

              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Allowance Bank **
              </p>
              <Select
              options={paymentMode}
              value={
                formData.employeePayment?.allowance_bank
                  ? [
                      {
                        value: formData.employeePayment.allowance_bank,
                        label: formData.employeePayment.allowance_bank,
                      },
                    ]
                  : []
              }
              onChange={handleChange_bank}
              placeholder="Bank Allowances "
              labelField="label"
              valueField="value"
              searchable
            />

            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Allowance Bank Account No
              </p>
              <CustomInput
                name="allowBank_no"
                type="Text"
                value={formData.employeePayment.allowBank_no}
                onChange={handleChange}
                placeholder="Account No"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                IFSC Code
              </p>
              <CustomInput
                name="all_ifsc_code"
                type="text"
                value={formData.employeePayment.all_ifsc_code}
                onChange={handleChange}
                placeholder="IFSC Code"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">

            <div className="flex items-center flex-row gap-4 w-full">

              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               March Paid in April (Yes/No)
              </p>

              <Select
              options={yesNo}
              value={
                formData.employeePayment?.march_paid
                  ? [
                      {
                        value: formData.employeePayment.march_paid,
                        label: formData.employeePayment.march_paid,
                      },
                    ]
                  : []
              }
              onChange={handleChange_paid}
              placeholder="Bank"
              labelField="label"
              valueField="value"
              searchable
            />

            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Drafts / Telex Forward Address 
              </p>
              <CustomInput
                name="draft_telex"
                type="Text"
                value={formData.employeePayment.draft_telex}
                onChange={handleChange}
                placeholder=" Drafts / Telex Forward"
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
                Shift Wise (Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeePayment?.shift_wise
                    ? [
                        {
                          value: formData.employeePayment.shift_wise,
                          label: formData.employeePayment.shift_wise,
                        },
                      ]
                    : []
                }
                onChange={handleChange_wise}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                D-wages (Yes/No){" "}
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeePayment?.d_wages
                    ? [
                        {
                          value: formData.employeePayment.d_wages,
                          label: formData.employeePayment.d_wages,
                        },
                      ]
                    : []
                }
                onChange={handleChange_wage}
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
                Ex-Gratia (Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeePayment?.exgratia
                    ? [
                        {
                          value: formData.employeePayment.exgratia,
                          label: formData.employeePayment.exgratia,
                        },
                      ]
                    : []
                }
                onChange={handleChange_ex}
                placeholder="Select EPF Pro Rate"
                labelField="label"
                valueField="value"
                searchable
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                OT (Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeePayment?.ot
                    ? [
                        {
                          value: formData.employeePayment.ot,
                          label: formData.employeePayment.ot,
                        },
                      ]
                    : []
                }
                onChange={handleChange_ot}
                placeholder="Yes/No"
                labelField="label"
                valueField="value"
                searchable
              />
            </div>
          </div>

          <div className="flex mt-4 items-start flex-row gap-4 mb-4 w-full">
         
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">


            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                OT Rate
              </p>
              <CustomInput
                name="OtRate"
                type="number"
                value={formData.employeePayment.OtRate}
                onChange={handleChange}
                placeholder="Rate"
                className="w-[50%]"
              />
            </div>
       
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Shift Working Hours
              </p>
              <CustomInput
                name="shift_Working"
                type="number"
                value={formData.employeePayment.shift_Working}
                onChange={handleChange}
                placeholder="Enter shift working hours"
                className="w-[50%] "
              />
            </div>
          </div>
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">


          <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Bonus (Yes/No)
              </p>

              <Select
                options={yesNo}
                value={
                  formData.employeePayment?.bonus
                    ? [
                        {
                          value: formData.employeePayment.bonus,
                          label: formData.employeePayment.bonus,
                        },
                      ]
                    : []
                }
                onChange={handleChange_bonus}
                placeholder="Select EPF Pro Rate"
                labelField="label"
                valueField="value"
                searchable
              />
            </div>
       
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
               Holiday Paid Rate
              </p>
              <CustomInput
                name="HolidayPaid"
                type="number"
                value={formData.employeePayment.HolidayPaid}
                onChange={handleChange}
                placeholder="Enter Holiday Paid Rate"
                className="w-[50%] "
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
          Employee Payment Mode{" "}
        </h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 7{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}
      {pfInputFeilds()}
      {pfSelectionFeilds()}
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

export default Employee_payment;
