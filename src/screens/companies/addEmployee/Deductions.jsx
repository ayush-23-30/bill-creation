import { useFormData } from '@/util/ContectApi';
import { CustomButton, CustomInput, useKeyboardNavigation } from '@/util/utils';
import React from 'react'
import { toast } from 'react-toastify';
import { useWizard } from 'react-use-wizard';

function deductions() {
  const [loading, setLoading] = React.useState(false);
  const { nextStep, previousStep, activeStep } = useWizard();

  useKeyboardNavigation(nextStep, previousStep);

  const { formData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("deduction", name, value); // Update the value in form data
  };
  

  const calculateTotal = (data) => {
    const total =
      parseFloat(data.deduction.amount_basic || 0) +
      parseFloat(data.deduction.amount_vda || 0) +
      parseFloat(data.deduction.amount_hra || 0) +
      parseFloat(data.deduction.amount_conveyance || 0) +
      parseFloat(data.deduction.amount_others || 0);
  
    // Return total with 2 decimal points
    return total.toFixed(2);
  };
  
  
  const handleCalculateTotal = () => {
    const updatedFormData = { ...formData }; // Copy form data
    const total = calculateTotal(updatedFormData); // Calculate total
    updateFormData("deduction", "total", total); // Update the total in form data
  };

    function showData(){
     if (formData.deduction.total == "") {
          toast.error("Please Update Total to save the data")
     }else{
      console.log("cration", formData);
    }
  }
  
  
  function pfInputFeilds(){
    return (
      <div className="flex border-2 bg-gray-200 p-4 rounded-2xl flex-wrap mb-6 text-black">
         <div className="p-6 flex ">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
          <div className="flex justify-between items-center mb-4">
            <div className='flex flex-row justify-center items-center gap-2'>
              <div className="font-semibold text-center leading-4">Employee Name: </div>
              <CustomInput
                type="text"
                value={formData.employeeCreation?.employeeName || "N/A"}
                className="ml-2 border p-1 rounded w-40"
                readOnly
              />
            </div>
            <div className='flex flex-row justify-center items-center gap-2'>
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
                  <th className="px-4 py-2">Fixed deduction Name</th>
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
                value={formData.deduction.basic}
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
          value={formData.deduction?.amount_basic }
          placeholder='0.00'
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
                value={formData.deduction?.vda}
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
          value={formData.deduction?.amount_vda}
          placeholder='0.00'
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
                value={formData.deduction?.hra}
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
          value={formData.deduction?.amount_hra }
          placeholder='0.00'
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
                value={formData.deduction?.conveyance}
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
          value={formData.deduction?.amount_conveyance}
          placeholder='0.00'
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
                value={formData.deduction?.others}
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
          value={formData.deduction?.amount_others ||  0}
          placeholder='0.00'
          className="ml-2 border p-1 rounded w-20"
          onChange={handleChange}
            
          />
        </td>
      </tr>
             
              </tbody>
            </table>
            <div className="flex justify-ed mt-8 items-center">
              <h2 className='font-semibold text-center'>
                Total deduction:
              </h2>
  
  <div className='flex flex-row justify-center items-center mb-2 mx-2 gap-2'>
              <CustomInput
                type="text"
                value={formData.deduction?.total || "N/A"}
                className="ml-2 border p-1 rounded w-20"
                readOnly
              />
              
             <div className=''>
                  <button
                    onClick={handleCalculateTotal}
                    className="ml-4 w-40 py-2 px-4 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-lg"
                  >
                    Update Total
                  </button>
                  
  
  </div>
                </div>
                <p className='text-sm text-red-500'>
                    *Please Update Total to save the data
                  </p>
            </div>
  
          </div>
  
          </div>
        </div>
      </div>
      // </div>
    )
  
  }


  return (

  <div className="w-[90vw]  bg-white mx-auto p-8  rounded-lg shadow-2xl text-center">
      <div className="flex justify-between mb-5 ">
        <h2 className="text-2xl text-black font-bold ">Tax deductions</h2>
        <h2 className="text-md text-black font-bold ">
          Step {activeStep + 1} of 7{" "}
        </h2>
      </div>

      {/*  ------ input Feilds ------  */}
{pfInputFeilds()}
      {/*  ------ input Feilds ------  */}

      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 cursor-pointer text-white py-2 px-6 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
          <div className="">
            {/* add condtion of total update ' not working if value == n/a '  */}
                <CustomButton
                          //  onClick={()=> toast.success("Data Saved")}
                           onClick={showData}
                           loading={loading}
                           disabled={false}
                         >
                           Sumbit 
                         </CustomButton>
       
               </div>
      </div>
    </div>
  )
}

export default deductions
