import { useWizard } from "react-use-wizard";
import { CustomInput } from "../../util/utils";
import { toast } from "react-toastify";
import { useState } from "react";


export default function StepFour({ formData, setFormData }) {
  const { previousStep, activeStep } = useWizard();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Form Data Submitted Successfully");
    }, 2000);
    console.log("Form Data Submitted:", formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-4/5 mx-auto p-8 bg-[#efefef]  rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-6">Step {activeStep + 1} of 4 </h2>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <CustomInput
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
        />
        <CustomInput
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <CustomInput
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter your company name"
        />
      </div>

      <div className="flex justify-between ">
        <button
          onClick={previousStep}
          className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
