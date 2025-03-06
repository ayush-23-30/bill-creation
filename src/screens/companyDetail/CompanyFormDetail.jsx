import React, { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import StepOne from "../companyDetail/StepOne";
import StepTwo from "../companyDetail/StepTwo";
import StepThree from "../companyDetail/StepThree";
import StepFour from "../companyDetail/StepFour";
import SubHeader from "../common/SubHeader";



export default function WizardComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    address: "",
    phone: "",
    gender: "",
    age: "",
    country: "",
    state: "",
    zipCode: "",
    company: "",
    experience: "",
    skills: "",
    github: "",
    linkedin: "",
  });


  return (
    <>
      <SubHeader/>
    <div className="w-full mx-auto p-6">
      <Wizard>
        <StepOne formData={formData} setFormData={setFormData} />
        <StepTwo formData={formData} setFormData={setFormData} />
        <StepThree formData={formData} setFormData={setFormData} />
        <StepFour formData={formData} setFormData={setFormData}/>
      </Wizard>
    </div>
    
    </>
  );
}

