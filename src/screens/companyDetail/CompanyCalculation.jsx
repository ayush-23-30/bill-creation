import { useWizard } from "react-use-wizard";
import { CustomInput } from "../../util/utils";
import { toast } from "react-toastify";
import { useState } from "react";
import { useFormData } from "@/util/ContectApi";


export default function CompanyCalculation() {
  // const { previousStep, activeStep } = useWizard();
    const { nextStep, previousStep, activeStep } = useWizard();

     const { formData, updateFormData } = useFormData();
   


  return (
    <div className="w-[90vw]  bg-white mx-auto p-8  rounded-lg shadow-2xl text-center">
      <div className="flex justify-between mb-5 ">
        <h2 className="text-2xl text-black font-bold ">
          Company Other Calculations
        </h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 4{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}


      {/*  ------ input Feilds ------  */}

      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          // onClick={nextStep}
          onClick={()=> toast.success("Till Now this is the last page")}
          // onClick={showData}
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
