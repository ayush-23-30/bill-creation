import { useWizard } from "react-use-wizard";
import { CustomInput, useKeyboardNavigation } from "../../util/utils";
import { toast } from "react-toastify";
import { useState } from "react";
import { useFormData } from "@/util/ContectApi";
import Select from "react-dropdown-select";
import { yesNo } from "@/util/Data";

export default function CompanyCalculation() {
  const { nextStep, previousStep, activeStep } = useWizard();

  const { formData, updateFormData, updateSelect } = useFormData();

   useKeyboardNavigation(nextStep, previousStep);

  const handleChange_overtime = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("company_other_calclations", "overtime", selectedValue);
  };
  const handleChange_pf_ot = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("company_other_calclations", "pf_app_ot", selectedValue);
  };
  const handleChange_esi = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("company_other_calclations", "esi_app_ot", selectedValue);
  };
  const handleChange_salary = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect(
      "company_other_calclations",
      "overtime_salary_rate",
      selectedValue
    );
  };

  const handleChange_shift = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("company_other_calclations", "shift_wise", selectedValue);
  };

  const handleChange_curr = (selected) => {
    const selectedValue = selected[0]?.value; // Extract value (not label)
    updateSelect("company_other_calclations", "earn_curr_month", selectedValue);
  };
  const handleChange_defined = (selected) => {
    const selectedValue = selected[0]?.value; 
    // Extract value (not label)
    updateSelect("company_other_calclations", "earning_rounded_user_defined", selectedValue);
  };
  const handleChange_earning = (selected) => {
    const selectedValue = selected[0]?.value; 
    // Extract value (not label)
    updateSelect("company_other_calclations", "earning_rounded", selectedValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("company_other_calclations", name, value); // 'companyAlteration' section
  };

  const showData = ()=> {
    console.log("Data ", formData.company_other_calclations);
  }

  //  earning_rounded_user_defined   earning_rounded

  function pfStartingSection() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Rounded To Nearest Paise *
              </p>
              <CustomInput
                name="round_nearest_price"
                type="text"
                value={formData.company_other_calclations.round_nearest_price}
                onChange={handleChange}
                placeholder="Year Applicable"
                className="w-full"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Arrear Calculation of Formula Based Earning on Current Month
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_other_calclations?.earn_curr_month
                    ? [
                        {
                          value:
                            formData.company_other_calclations.earn_curr_month,
                          label:
                            formData.company_other_calclations.earn_curr_month,
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
          </div>

          <div className="flex mt-8 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Earning Rounded to Nearest Paise**
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_other_calclations?.earning_rounded
                    ? [
                        {
                          value: formData.company_other_calclations.earning_rounded,
                          label: formData.company_other_calclations.earning_rounded,
                        },
                      ]
                    : []
                }
                onChange={handleChange_earning}
                placeholder="Select"
                labelField="label"
                valueField="value"
              />
            </div>
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Earning to be Rounded as % user defined based Earnings **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_other_calclations?.earning_rounded_user_defined
                    ? [
                        {
                          value: formData.company_other_calclations.earning_rounded_user_defined,
                          label: formData.company_other_calclations.earning_rounded_user_defined,
                        },
                      ]
                    : []
                }
                onChange={handleChange_defined}
                placeholder="Select"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>

          <div className="flex  flex-row gap-4 mb-4 w-full">
            
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
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold leading-4 justify-end text-center w-1/3">
                No. of Days in a Month for Salary Calculation
              </p>
              <CustomInput
                name="no_of_salaryDay"
                type="text"
                value={formData.company_other_calclations.no_of_salaryDay}
                onChange={handleChange}
                placeholder="No of Days "
                className="w-full"
              />
            </div>


          <div className="flex gap-4 items-center w-full">
            <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
              Gratutiy Year Applicable in
            </p>
            <CustomInput
              name="gratutiy_year"
              type="text"
              value={formData.company_other_calclations.gratutiy_year}
              onChange={handleChange}
              placeholder="Year Applicable "
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
                {" "}
                Shift Wise (Yes/No){" "}
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_other_calclations?.shift_wise
                    ? [
                        {
                          value: formData.company_other_calclations.shift_wise,
                          label: formData.company_other_calclations.shift_wise,
                        },
                      ]
                    : []
                }
                onChange={handleChange_shift}
                placeholder="Select"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Shift Working Hour
              </p>
              <CustomInput
                name="shift_working_wise"
                type="text"
                value={formData.company_other_calclations.shift_working_wise}
                onChange={handleChange}
                placeholder="Year Applicable "
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                OT Maximum Till
              </p>
              <CustomInput
                name="ot_max_till"
                type="text"
                value={formData.company_other_calclations.ot_max_till}
                onChange={handleChange}
                placeholder="OT Maximum Till"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                NPS Employer %
              </p>
              <CustomInput
                name="nps_employer"
                type="text"
                value={formData.company_other_calclations.nps_employer}
                onChange={handleChange}
                placeholder="Enter NPS Employer  "
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold leading-4 justify-end text-center w-1/3">
                NPS Employee %
              </p>
              <CustomInput
                name="nps_employee"
                type="text"
                value={formData.company_other_calclations.nps_employee}
                onChange={handleChange}
                placeholder="Enter NPS Employee "
                className="w-full"
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                LWF Employer Amt
              </p>
              <CustomInput
                name="lwf_employee_amt"
                type="text"
                value={formData.company_other_calclations.lwf_employee_amt}
                onChange={handleChange}
                placeholder="Enter LWF Amount"
                className="w-full"
              />
            </div>
            <div className="flex gap-4 items-center w-full">
              <p className="flex font-semibold  justify-end text-center leading-4 w-1/3">
                {" "}
                LWF Employee Amt
              </p>
              <CustomInput
                name="lwf_employer_amt"
                type="text"
                value={formData.company_other_calclations.lwf_employer_amt}
                onChange={handleChange}
                placeholder="Enter LWF Employee Amt"
                className="w-full"
              />
            </div>
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
                Overtime (Yes/No){" "}
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_other_calclations?.overtime
                    ? [
                        {
                          value: formData.company_other_calclations.overtime,
                          label: formData.company_other_calclations.overtime,
                        },
                      ]
                    : []
                }
                onChange={handleChange_overtime}
                placeholder="Select"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                ESI Applicable on OT
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_other_calclations?.esi_app_ot
                    ? [
                        {
                          value: formData.company_other_calclations.esi_app_ot,
                          label: formData.company_other_calclations.esi_app_ot,
                        },
                      ]
                    : []
                }
                onChange={handleChange_esi}
                placeholder="Select"
                labelField="label"
                valueField="value"
              />
            </div>
          </div>
          <div className="flex  flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                Overtime (Salary/Rate) **
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_other_calclations?.overtime_salary_rate
                    ? [
                        {
                          value:
                            formData.company_other_calclations
                              .overtime_salary_rate,
                          label:
                            formData.company_other_calclations
                              .overtime_salary_rate,
                        },
                      ]
                    : []
                }
                onChange={handleChange_salary}
                placeholder="Select"
                labelField="label"
                valueField="value"
              />
            </div>

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                PF Applicable on OT
              </p>
              <Select
                options={yesNo}
                value={
                  formData.company_other_calclations?.pf_app_ot
                    ? [
                        {
                          value: formData.company_other_calclations.pf_app_ot,
                          label: formData.company_other_calclations.pf_app_ot,
                        },
                      ]
                    : []
                }
                onChange={handleChange_pf_ot}
                placeholder="Select"
                labelField="label"
                valueField="value"
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
          Company Other Calculations
        </h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 6{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}
      {pfStartingSection()}
      {pfSecMiddleSection()}
      {pf_third_Section()}
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
          // onClick={() => toast.success("Till Now this is the last page")}
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
