import Header from '@/screens/common/Header'
import React from 'react'
import EmployeeCreation from './EmployeeCreation'
import { Wizard } from 'react-use-wizard'
import EmployeeAlteration from './EmployeeAlteration'
import Employee_Alteration_two from './Employee_Alteration_two'
import Employee_payment from './Employee_payment'
import Employee_tax from './Employee_tax'
import Earning from './Earning'
import Deductions from './Deductions'

function AddEmployee() {
  return (
    <div className="bg-gradient-to-b from-[#5e77e9] to-[#0070FA]  text-white">
      <Header/>
    <div className="w-full mx-auto p-6">
<Wizard>
        <EmployeeCreation/> 
        <EmployeeAlteration/> 
        <Employee_Alteration_two/>
        <Employee_payment/>
        <Employee_tax/>
        <Earning/>
        <Deductions/>
        </Wizard>

    </div>

    </div>

  )
}

export default AddEmployee
