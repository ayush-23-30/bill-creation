import React, { createContext, useState, useContext } from 'react';

// Create context for form data
const FormDataContext = createContext();

// Custom hook to use form data context
export function useFormData() {
  return useContext(FormDataContext);
}

// Create a provider for form data
export function FormDataProvider({ children }) {
  // Define the form data state, divided into sections for different pages
  const [formData, setFormData] = useState({
    companyCreation: {
      companyName: "",
      formalName: "",
      address: "",
      state: "",
      phone: "",
      email: "",
      alt_phone: "",
      alt_email: "",
      salary_start_date: "",
      password: "",  // not taken in step one till now
      pan_gir_no: "",
      tan_no: "",
      gst: "",
      company_Code_payman_web: "",
      address_change_web: "",
    },

    companyAlteration: {
      pf_slab: "",
      eps_slab: "",
      edli_slab: "",
      pf_rate_employees: "",
      pf_rate_employer: "",
      eps_rate_employees: "",
      eps_rate_employer: "",
      epf_pro_rate: "",  // should be a selection box
      eps_pro_rate: "",  // should be a selection box
      pf_rounded_: "",
      eps_rounded_: "",
      max_pf_amount_employees: "",
      max_pf_amount_employer: "",
      max_eps_amount_employees: "",
      max_eps_amount_employer: "",
      pf21_rate : "",
      pf21_roundedTo : "", 
      pf21_max_amount : "",
      pf21_min_amount : "",

      pfAC22_rate : "",
      pfAC22_roundedTo : "", 
      pfAC22_max_amount : "",
      pfAC22_min_amount : "",

      pfAC02_rate : "",
      pfAC02_roundedTo : "", 
      pfAC02_max_amount : "",
      pfAC02_min_amount : "",
    
      companies_pf_trust: "",
      pf_no: "",
      round_pf_challan: "",
      print_pf_no: "",
      pf_portal_user_name: "",
      pf_portal_password: "",
    },

    companyAlteration_two :{
      esi_slab_employees : "", 
      esi_slab_employer : "", 
      esi_rate_employees  : "" , 
      esi_rate_employer : "", 
      max_esi_amount_employees : "", 
      max_epi_amount_employer : "" , 

      esi_no : "", 
      employee_esi_round : "", 
      employer_esi_round : "", 
      round_esi_challan  : "", 
      calculate_esi : "", 
      esi_portal_user_name : "", 
      esi_portal_password : "", 
      
      bonus_slab : "", 
      bonus_app_max : "", 
    },
    company_other_calclations : {
      earning_rounded : "", 
      earning_rounded_user_defined : "", 
      round_nearest_price : "", 
      earn_curr_month : "", 

      no_of_salaryDay : "", 
      gratutiy_year : '',
      
      shift_wise : "", 
      shift_working_wise : "",
      ot_max_till : "", 
      nps_employer : "", 
      nps_employee : "", 
      lwf_employee_amt : "", 
      lwf_employer_amt : "", 

      overtime : "",
      esi_app_ot : "",
      overtime_salary_rate : "", 
      pf_app_ot : "" , 
    },

    company_leave_management : {
      leave_register : "", 
      leave_rounded_to : "", 
      monitor_leave_period : "",

      earned_leave_calc_gross : "",
      earned_leave_calc_formula : "" ,
      enter_formula : "" , 
      accrual_period : "", 
      earned_leave_method : "",  
      maximum_earned_leave : "", 
      earned_leave_calc : "", 

      medical_leave_carry : "", 
      medical_leave_calc : "", 
      maximum_medical_leave : "", 
      casual_calc : "",
    },

    company_person_responsible : {
      person_name : "", 
      designation : "", 
      flat : "", 
      premises : "",
      road_street : "" , 
      area: "", 
      town : "", 
      state : "" , // not applicable 
      pin : "" , 
      phone : "" , 
      fax : "", 
      email : "", 
      alt_phone : "", 
      alt_email : "", 

      address_change : "", 
      non_tax_employee : "", 
      deductor_type : "", 
      tds_round : "" , 
      cit_details : "", 
      traces_user_name : "", 
      traces_password : "",
    },

    // --------- ADD Employee ---------

    employeeCreation: {
      employeeName: "",
      formalName: "",
      code: "",
      gender : "",
      father_husband_name : "", 
      father_husband : "", 
      Dob : "", 
      Doj : "", 
      Doc : "", 
      Doi : "", 
      pd : "",
      salary_calc : "", 
      grade : "", 
      location : "", 
      designation : "",
      department : "",
      state_tx : '',
      pre_address: "",
      perm_address: "",
      pre_city: "", 
      perm_city: "", 
      pre_state : "", 
      perm_state : "",
      email: "",
      phone: "",
      pre_pin : "", 
      perm_pin : "", 
      alt_phone: "",
    },

    employeeAlteration: {
      category: "",
      retirement_date: "",
     salutation : "",
      min_wages_category: "",
      dimensional : "",
      dimensional2: "",
      dimensional3: "",
      dimensional4: "",  // should be a selection box
      dimensional5: "",  // should be a selection box
      NPS: "",
      LWF: "",
      joining_status: "",
      pranNo: "",
      current_status: "",
      allowed_salary: "",
      curr_location : "",
      salary_export : "", 
      doLI : "",
      doNI : "",

      doLP : "",
      doA : "", 
    },

    employeeAlteration_two :{
      pf : "", 
      EPS : "", 
      VPF  : "" ,
      rate: "",  
      vpfAmount : "", 
      pfNo : "", 
      pfDate : "" , 
      prev_pf : "", 
      prev_pf_date : "",
      pf_calc_slab: "", 
      pf_calc_basic: "", 
      pf_trust: "", 
      pf_deposited: "", 
      posted_other: "", 
     eps_calc : "",
      uanNo: "", 

 
      esi_no_yes : "", 
      esi_no : "", 
      esi_dispensary : "", 
      other_remarks: "", 
      
    },

    employeePayment : {
      paymentMode : "", 
      SalaryBankName : "",
      SalaryAccNo : "",
      Ifsccode : "",
      // salary_bank : "", 
      draft_telex : "", 
      allowBank_no : '',
      allowance_bank : "", 
      all_ifsc_code : "",
      march_paid : "", 
      shift_wise : "", 
      shift_Working : "", 
      d_wages : "", 
      ot : "", 
      exgratia : "",
      OtRate : "",
      bonus : "", 
      HolidayPaid : "" , 
    },

    employeeTax : {
      leave_register : "", 
      leave_rounded_to : "", 
      monitor_leave_period : "",

      earned_leave_calc_gross : "",
      earned_leave_calc_formula : "" ,
      enter_formula : "" , 
      accrual_period : "", 
      earned_leave_method : "",  
      // earned_leave_calc : "", 
      maximum_earned_leave : "", 

      medical_leave_carry : "", 
      medical_leave_calc : "", 
      maximum_medical_leave : "", 
      casual_calc : "",
    },
    
    earning : {
      basic : "Basic",
      amount_basic : "", 
      vda : "VDA", 
      amount_vda :  "", 
      hra : "HRA",
      amount_hra : "",
      conveyance : "Conveyance",
      amount_conveyance : "",
      others: "Others", 
      amount_others: "",
      total : "",
    }, 
    deduction : {
      basic : "Basic",
      amount_basic : "", 
      vda : "VDA", 
      amount_vda :  "", 
      hra : "HRA",
      amount_hra : "",
      conveyance : "Conveyance",
      amount_conveyance : "",
      others: "Others", 
      amount_others: "",
      total : "",
    }
  });

  // Update a specific field in the form data
  const updateFormData = (section, name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  const updateSelect = (section, name, value) => {
    console.log("Updating state:", section, name, value);  // Log the values to confirm
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };
  

  return (
    <FormDataContext.Provider value={{ formData, updateFormData , updateSelect }}>
      {children}
    </FormDataContext.Provider>
  );
}
