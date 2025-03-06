import React from "react";
import { useWizard } from "react-use-wizard";
import { CustomInput } from "../../util/utils";

export default function StepOne({ formData, setFormData }) {
  const { nextStep, activeStep } = useWizard();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[90vw] bg-[#efefef] mx-auto p-8  rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-6">Step {activeStep + 1} of 4 </h2>

      <div className="flex flex-wrap mb-6">

        <div className="flex flex-row gap-4 mb-4 w-full">
          <CustomInput
            // label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <CustomInput
            // label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

        </div>

        <div className="flex flex-row gap-4 w-full">
          <CustomInput
            // label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <CustomInput
            // label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
