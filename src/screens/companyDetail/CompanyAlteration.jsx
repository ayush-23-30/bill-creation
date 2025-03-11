import React from "react";
import { useWizard } from "react-use-wizard";
import { CustomInput } from "../../util/utils";
import { useFormData } from "@/util/ContectApi";

export default function CompanyAlteration() {
  const { nextStep, previousStep, activeStep } = useWizard();

  const { formData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("companyAlteration", name, value); // 'companyAlteration' section
  };

  function showData() {
    console.log("cration", formData.companyAlteration);
  }

  function pfInputFeilds() {
    return (
      <>
        <div className="flex border-2 p-4 mt-6 rounded-2xl flex-wrap mb-6 text-black">
          {/* ------ Set of two input Fields ----- */}
          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold font-semiboldfont-semibold justify-end text-center w-1/3">
                PF Slab
              </p>
              <CustomInput
                name="pf_slab"
                type="text"
                value={formData.companyAlteration.pf_slab}
                onChange={handleChange}
                placeholder="Enter PF Slab"
                className="w-full"
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Eps Slab{" "}
              </p>
              <CustomInput
                name="eps_slab"
                type="text"
                value={formData.companyAlteration.eps_slab}
                onChange={handleChange}
                placeholder="Enter Eps Slab"
                className="w-full"
              />
            </div>
            <div className="flex gap-4 items-center w-full">
              <p className="flex font-semibold  justify-end text-center leading-4 w-1/3">
                {" "}
                EDLI Slab{" "}
              </p>
              <CustomInput
                name="edli_slab"
                type="text"
                value={formData.companyAlteration.edli_slab}
                onChange={handleChange}
                placeholder="Enter EDLI Slab"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                PF Rate (Employees){" "}
              </p>
              <CustomInput
                name="pf_rate_employees"
                type="text"
                value={formData.companyAlteration.pf_rate_employees}
                onChange={handleChange}
                placeholder="Enter PF Employees Rate "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                PF rate (Employer){" "}
              </p>
              <CustomInput
                name="pf_rate_employer"
                type="text"
                value={formData.companyAlteration.pf_rate_employer}
                onChange={handleChange}
                placeholder="Enter PF employer rate "
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex  leading-4 font-semibold justify-end text-center w-1/3">
                {" "}
                EPS Rate (Employees){" "}
              </p>
              <CustomInput
                name="eps_rate_employees"
                type="number"
                value={formData.companyAlteration.eps_rate_employees}
                onChange={handleChange}
                placeholder="Enter Eps Employees rate "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                EPS Rate (Employer){" "}
              </p>
              <CustomInput
                name="eps_rate_employer"
                type="text"
                value={formData.companyAlteration.eps_rate_employer}
                onChange={handleChange}
                placeholder="Enter Eps employer Rate"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                EPF Pro Rate *{" "}
              </p>
              <CustomInput
                name="epf_pro_rate"
                type="text"
                value={formData.companyAlteration.epf_pro_rate}
                onChange={handleChange}
                placeholder="Enter EPF PRO RATE"
                className="w-full"
              />
            </div>

            <div className="flex gap-4 items-center w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                EPS Pro Rate *{" "}
              </p>
              <CustomInput
                name="eps_pro_rate"
                type="text"
                value={formData.companyAlteration.eps_pro_rate}
                onChange={handleChange}
                placeholder="Enter EPS PRO RATE "
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                PF Rounded{" "}
              </p>
              <CustomInput
                name="pf_rounded_"
                type="text"
                value={formData.companyAlteration.pf_rounded_}
                onChange={handleChange}
                placeholder="Enter PF rounded "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                EPS Rounded{" "}
              </p>
              <CustomInput
                name="eps_rounded_"
                type="number"
                value={formData.companyAlteration.eps_rounded_}
                onChange={handleChange}
                placeholder="Enter EPS Rounded"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                Max PF Amount Employees
              </p>
              <CustomInput
                name="max_pf_amount_employees"
                type="text"
                value={formData.companyAlteration.max_pf_amount_employees}
                onChange={handleChange}
                placeholder="Enter Max PF Amount Employees "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                Max PF Amount Employer{" "}
              </p>
              <CustomInput
                name="max_pf_amount_employer"
                type="number"
                value={formData.companyAlteration.max_pf_amount_employer}
                onChange={handleChange}
                placeholder="Enter Max PF Amount Employer"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Max EPS Amount Employees{" "}
              </p>
              <CustomInput
                name="max_eps_amount_employees"
                type="text"
                value={formData.companyAlteration.max_eps_amount_employees}
                onChange={handleChange}
                placeholder="Enter Max Eps amount Employees"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                {" "}
                Max EPS amount Employer{" "}
              </p>
              <CustomInput
                name="max_eps_amount_employer"
                type="number"
                value={formData.companyAlteration.max_eps_amount_employer}
                onChange={handleChange}
                placeholder="Enter Max EPS Amount Employer"
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
          {/* ------ Set of two input Fields ----- */}

          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold leading-4 justify-end text-center w-1/3">
                PF21 Rate
              </p>
              <CustomInput
                name="pf21_rate"
                type="text"
                value={formData.companyAlteration.pf21_rate}
                onChange={handleChange}
                placeholder="Enter PF Slab"
                className="w-full"
              />
            </div>

            {/* ------ Selection -------- */}

            <div className="flex flex-row items-center gap-4 w-full">
              <p className="flex font-semibold font-semiboldfont-semibold leading-4 text-center justify-end  w-1/3">
                Rounded to{" "}
              </p>
              <CustomInput
                name="pf21_roundedTo"
                type="number"
                value={formData.companyAlteration.pf21_roundedTo}
                onChange={handleChange}
                placeholder="0.500"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold   justify-end text-center w-1/3">
                Amount Max{" "}
              </p>
              <CustomInput
                name="pf21_max_amount"
                type="text"
                value={formData.companyAlteration.pf21_max_amount}
                onChange={handleChange}
                placeholder="Enter Eps Slab"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Amount Min
              </p>
              <CustomInput
                name="pf21_min_amount"
                type="text"
                value={formData.companyAlteration.pf21_min_amount}
                onChange={handleChange}
                placeholder="Enter EDLI Slab"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex font-semibold leading-4 justify-end text-center w-1/3">
                PF AC22 Rate{" "}
              </p>
              <CustomInput
                name="pfAC22_rate"
                type="text"
                value={formData.companyAlteration.pfAC22_rate}
                onChange={handleChange}
                placeholder="Enter PF Slab"
                className="w-full"
              />
            </div>

            {/* ------ Selection -------- */}

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold font-semiboldfont-semibold justify-end text-center w-1/3">
                Rounded to{" "}
              </p>
              <CustomInput
                name="pfAC22_roundedTo"
                type="number"
                value={formData.companyAlteration.pfAC22_roundedTo}
                onChange={handleChange}
                placeholder="0.500"
                className="w-full"
              />
            </div>

            <div className="flex  items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold   justify-end text-center w-1/3">
                Amount Max{" "}
              </p>
              <CustomInput
                name="pfAC22_max_amount"
                type="text"
                value={formData.companyAlteration.pfAC22_max_amount}
                onChange={handleChange}
                placeholder="Enter Eps Slab"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4  font-semibold  justify-end text-center w-1/3">
                Amount Min{" "}
              </p>
              <CustomInput
                name="pfAC22_min_amount"
                type="text"
                value={formData.companyAlteration.pfAC22_min_amount}
                onChange={handleChange}
                placeholder="Enter EDLI Slab"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                PF AC02 Rate
              </p>
              <CustomInput
                name="pfAC02_rate"
                type="text"
                value={formData.companyAlteration.pfAC02_rate}
                onChange={handleChange}
                placeholder="Enter PF Slab"
                className="w-full"
              />
            </div>

            {/* ------ Selection -------- */}

            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex  leading-4 font-semibold  justify-end text-center w-1/3">
                Rounded to{" "}
              </p>
              <CustomInput
                name="pfAC02_roundedTo"
                type="number"
                value={formData.companyAlteration.pfAC02_roundedTo}
                onChange={handleChange}
                placeholder="0.500"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold   justify-end text-center w-1/3">
                Amount Max{" "}
              </p>
              <CustomInput
                name="pfAC02_max_amount"
                type="text"
                value={formData.companyAlteration.pfAC02_max_amount}
                onChange={handleChange}
                placeholder="Enter Eps Slab"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold  justify-end text-center w-1/3">
                Amount Min{" "}
              </p>
              <CustomInput
                name="pfAC02_min_amount"
                type="text"
                value={formData.companyAlteration.pfAC02_min_amount}
                onChange={handleChange}
                placeholder="Enter EDLI Slab"
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
                Conpany PF trust *{" "}
              </p>
              <CustomInput
                name="companies_pf_trust"
                type="text"
                value={formData.companyAlteration.companies_pf_trust}
                onChange={handleChange}
                placeholder="Enter pf trust "
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                PF No.
              </p>
              <CustomInput
                name="pf_no"
                type="number"
                value={formData.companyAlteration.pf_no}
                onChange={handleChange}
                placeholder="Enter PF Number"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p
                className="flex font-semibold leading-4
                        justify-end text-center w-1/3"
              >
                {" "}
                PF challan location *{" "}
              </p>
              <CustomInput
                name="round_pf_challan"
                type="text"
                value={formData.companyAlteration.round_pf_challan}
                onChange={handleChange}
                placeholder="Enter Round pf challan"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                Print PF No.*{" "}
              </p>
              <CustomInput
                name="print_pf_no"
                type="text"
                value={formData.companyAlteration.print_pf_no}
                onChange={handleChange}
                placeholder="Enter Print PF no"
                className="w-full"
              />
            </div>
          </div>

          {/* ------ Set of two input Fields ----- */}
          <div className="flex mt-4 flex-row gap-4 mb-4 w-full">
            <div className="flex items-center flex-row gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                PF protal User Name{" "}
              </p>
              <CustomInput
                name="pf_portal_user_name"
                type="text"
                value={formData.companyAlteration.pf_portal_user_name}
                onChange={handleChange}
                placeholder="Enter PF user nam"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <p className="flex leading-4 font-semibold justify-end text-center w-1/3">
                PF Portal Password
              </p>
              <CustomInput
                name="pf_portal_password"
                type="text"
                value={formData.companyAlteration.pf_portal_password}
                onChange={handleChange}
                placeholder="Enter Portal Password"
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
        <h2 className="text-2xl text-black font-bold ">Company Alteration</h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 4{" "}
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
          className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          // onClick={showData}
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
