import { useFormData } from "@/util/ContectApi";
import { CustomInput, useKeyboardNavigation } from "@/util/utils";
import React from "react";
import { toast } from "react-toastify";
import { useWizard } from "react-use-wizard";

function Earning() {
  const { nextStep, previousStep, activeStep } = useWizard();

  useKeyboardNavigation(nextStep, previousStep);

  const { formData, updateFormData, updateSelect } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("earning", name, value); 
  };

  const calculateTotal = (data) => {
    const total =
      parseFloat(data.earning.amount_basic || 0) +
      parseFloat(data.earning.amount_vda || 0) +
      parseFloat(data.earning.amount_hra || 0) +
      parseFloat(data.earning.amount_conveyance || 0) +
      parseFloat(data.earning.amount_others || 0);
  
    // Return total with 2 decimal points
    return total.toFixed(2);
  };
  

  function checkTotalUpdated() {
    if (formData.earning.total == "") {
      toast.error("Please Update Total to save the data");
    }else nextStep()
  }
  
  const handleCalculateTotal = () => {
    const updatedFormData = { ...formData }; // Copy form data
    const total = calculateTotal(updatedFormData); // Calculate total
    updateFormData("earning", "total", total); // Update the total in form data
  };

  function showData() {
    console.log("cration", formData.earning);
  }

  function pfInputFeilds() {
    return (
      <div className="flex border-2 bg-gray-200 p-4 rounded-2xl flex-wrap mb-6 text-black">
        <div className="p-6 flex ">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="font-semibold text-center leading-4">
                  Employee Name:{" "}
                </div>
                <CustomInput
                  type="text"
                  value={formData.employeeCreation?.employeeName || "N/A"}
                  className="ml-2 border p-1 rounded w-40"
                  readOnly
                />
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="font-semibold text-center"> Code: </div>
                <CustomInput
                  type="text"
                  value={formData.employeeCreation?.code || "N/A"}
                  className="ml-2 border p-1 rounded w-20"
                  readOnly
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table-auto w-full text-sm text-left">
                <thead className="bg-gray-200 text-gray-600">
                  <tr>
                    <th className="px-4 py-2"> S.No. </th>
                    <th className="px-4 py-2">Fixed Earning Name</th>
                    <th className="px-4 py-2">Formula/Percent/Amount/Slab</th>
                    <th className="px-4 py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2 font-semibold">1.</td>

                    <td className="px-4 py-2">
                      <div className="font-semibold text-center">
                        <CustomInput
                          type="text"
                          value={formData.earning?.basic || "N/A"}
                          className="ml-2 border p-1 rounded w-20"
                          readOnly
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 font-semibold">Amount</td>
                    <td className="px-4 py-2">
                      <CustomInput
                        name={"amount_basic"}
                        type="number"
                        value={formData.earning?.amount_basic}
                        placeholder="0.00"
                        className="ml-2 border p-1 rounded w-20"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2 font-semibold">2.</td>

                    <td className="px-4 py-2">
                      <div className="font-semibold text-center">
                        <CustomInput
                          type="text"
                          value={formData.earning?.vda || "N/A"}
                          className="ml-2 border p-1 rounded w-20"
                          readOnly
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 font-semibold">Amount</td>
                    <td className="px-4 py-2">
                      <CustomInput
                        name={"amount_vda"}
                        type="number"
                        value={formData.earning?.amount_vda}
                        placeholder="0.00"
                        className="ml-2 border p-1 rounded w-20"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2 font-semibold">3.</td>

                    <td className="px-4 py-2">
                      <div className="font-semibold text-center">
                        <CustomInput
                          type="text"
                          value={formData.earning?.hra || "N/A"}
                          className="ml-2 border p-1 rounded w-20"
                          readOnly
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 font-semibold">Amount</td>
                    <td className="px-4 py-2">
                      <CustomInput
                        name={"amount_hra"}
                        type="number"
                        value={formData.earning?.amount_hra}
                        placeholder="0.00"
                        className="ml-2 border p-1 rounded w-20"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2 font-semibold">4.</td>

                    <td className="px-4 py-2">
                      <div className="font-semibold text-center">
                        <CustomInput
                          type="text"
                          value={formData.earning?.conveyance || "N/A"}
                          className="ml-2 border p-1 rounded w-20"
                          readOnly
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 font-semibold">Amount</td>
                    <td className="px-4 py-2">
                      <CustomInput
                        name={"amount_conveyance"}
                        type="number"
                        value={formData.earning?.amount_conveyance}
                        placeholder="0.00"
                        className="ml-2 border p-1 rounded w-20"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2 font-semibold">5.</td>

                    <td className="px-4 py-2">
                      <div className="font-semibold text-center">
                        <CustomInput
                          type="text"
                          value={formData.earning?.others || "N/A"}
                          className="ml-2 border p-1 rounded w-20"
                          readOnly
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 font-semibold">Amount</td>
                    <td className="px-4 py-2">
                      <CustomInput
                        name={"amount_others"}
                        type="number"
                        value={formData.earning?.amount_others}
                        placeholder="0.00"
                        className="ml-2 border p-1 rounded w-20"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-ed mt-8 items-center">
                <h2 className="font-semibold text-center">Total Earning:</h2>

                <div className="flex flex-row justify-center items-center mb-2 mx-2 gap-2">
                  <CustomInput
                    type="text"
                    value={formData.earning?.total || "N/A"}
                    className="ml-2 border p-1 rounded w-20"
                    readOnly
                  />

                  <div className="">
                    <button
                      onClick={handleCalculateTotal}
                      className="ml-4 w-40 py-2 px-4 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-lg"
                    >
                      Update Total
                    </button>
                  </div>
                </div>
                <p className="text-sm text-red-500">
                  *Please Update Total to save the data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90vw]  bg-white mx-auto p-8  rounded-lg shadow-2xl text-center">
      <div className="flex justify-between mb-5 ">
        <h2 className="text-2xl text-black font-bold ">Employee Earning</h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 7{" "}
        </h2>
      </div>

      {pfInputFeilds()}

      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 cursor-pointer text-white py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
        onClick={checkTotalUpdated}
          // onClick={showData}
          className="bg-blue-500 cursor-pointer text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Earning;
