import React, { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import CompanyCreation from "./CompanyCreation";
import CompanyAlteration from "./CompanyAlteration";
import StepThree from "./CompanyAlteration_two";
import StepFour from "../companyDetail/StepFour";
import Header from "../common/Header";
import CompanyAlteration_two from "./CompanyAlteration_two";



export default function WizardComponent() {



  return (
    <>
    <div className="bg-gradient-to-b from-[#5e77e9] to-[#0070FA]  text-white">
      <Header/>
    <div className="w-full mx-auto p-6">
    

<Wizard>
          <CompanyCreation />
          <CompanyAlteration />
          <CompanyAlteration_two />
          <StepFour />
        </Wizard>

    </div>

    </div>

    
    </>
  );
}

