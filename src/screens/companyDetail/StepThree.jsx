import React from "react";
import { useWizard } from "react-use-wizard";
import {CustomInput} from "../../util/utils";

export default function StepThree({ formData, setFormData }) {
  const { nextStep, previousStep, activeStep } = useWizard();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-4/5 mx-auto p-8 bg-[#efefef]  rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-6">Step {activeStep + 1} of 4</h2>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <CustomInput label="Country" name="country" value={formData.country} onChange={handleChange} placeholder="Enter your country" />
        <CustomInput label="State" name="state" value={formData.state} onChange={handleChange} placeholder="Enter your state" />
        <CustomInput label="Zip Code" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Enter your zip code" />
    
      </div>

      <div className="flex justify-between">
        <button onClick={previousStep} className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600">
          Back
        </button>
        <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );
}
