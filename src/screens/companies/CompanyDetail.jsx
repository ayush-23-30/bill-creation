import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../common/Header';

const CompanyDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const location = useLocation();
  const { name } = location.state || { name: 'Unknown'};

   function pagetitle() {
      return (
        <>
          <Header />
  
          <div className="px-4 mt-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="text-4xl font-bold sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                 {name}
                </span>
              </h1>
            </div>
          </div>
        </>
      );
    }

    function EmployeeInfo(){
      return (
        <>

        <div className='flex justify-end'>
        <button
          className=" h-12 font-semibold text-center flex justify-between border-2 border-black text-md text-black px-6 py-2 rounded-full shadow-lg 
          transition-all duration-300 ease-in-out 
          hover:bg-green-500 hover:text-white hover:border-green-500 
          cursor-pointer"
          onClick={() => navigate("/add-employee")}
        >
          Add Employee
          <div className="relative top-[2px]">
            <svg
              className="w-6 h-6 ml-8 -mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </button>
        </div>
        </>
      )
    }

    function TabConent (){
      return (
        <div className='mx-auto mt-5 text-black bg-white rounded-lg w-[90%] p-2'>

        <div className="tabs tabs-border  flex justify-between items-center">

    <input type="radio" name="my_tabs_2" className= "tab text-xl" aria-label="Account Info" defaultChecked id="tab1" />
    
    <div className="tab-content border-none p-5 text-black">
      {accontInfo()}
    </div>
  
    <input type="radio" name="my_tabs_2" className= "tab text-xl" aria-label="Employee Info" id="tab2" />
    <div className="tab-content border-none p-5 text-black">
      {EmployeeInfo()}
    </div>
  
    <input type="radio" name="my_tabs_2" className= "tab text-xl" aria-label="Monthly Info" id="tab3" />
    <div className="tab-content border-none p-5 text-black">
      Tab content 3
    </div>
  
    <input type="radio" name="my_tabs_2" className= "tab text-xl" aria-label="Arrear Info" id="tab4" />
    <div className="tab-content border-none p-5 text-black">
      Tab content 4
    </div>
  
    <input type="radio" name="my_tabs_2" className= "tab text-xl" aria-label="Calculate Pay" id="tab5" />
    <div className="tab-content border-none p-5 text-black">
      Tab content 5
    </div>
  
    <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="TDS Calculation" id="tab6" />
    <div className="tab-content border-none p-5 text-black">
      Tab content 6
    </div>
  
    <input type="radio" name="my_tabs_2" className= "tab text-xl" aria-label="Display" id="tab7" />
    <div className="tab-content border-none p-5 text-black">
      Tab content 7
    </div>
  
    <input type="radio" name="my_tabs_2" className= "tab text-xl" aria-label="Query" id="tab8" />
    <div className="tab-content border-none p-5 text-black">
      Tab content 8
    </div>
  </div>
  
  {/* Custom Styles */}
  <style>
    {`
    /* Ensure selected tab text stays black */
    #tab1:checked ~ .tab:nth-of-type(1),
    #tab2:checked ~ .tab:nth-of-type(2),
    #tab3:checked ~ .tab:nth-of-type(3),
    #tab4:checked ~ .tab:nth-of-type(4),
    #tab5:checked ~ .tab:nth-of-type(5),
    #tab6:checked ~ .tab:nth-of-type(6),
    #tab7:checked ~ .tab:nth-of-type(7),
    #tab8:checked ~ .tab:nth-of-type(8) {
      color: black; /* Black text */
    }
  
    /* Non-selected tabs will have black text color */
    .tab:not(:checked) {
      color: black; /* Black text */
    }
  
    /* Hover effect for both selected and non-selected tabs to keep text black */
    .tab:hover {
      color: black; /* Hover text stays black */
    }
  
    /* Ensure text inside tab-content is black */
    .tab-content {
      color: black;
    }
    `}
  </style>
  
        </div>


      )
    }
  
  function accontInfo() {
      return (
        <div className="flex flex-wrap">
          {/* Left Side */}
          <div className="w-1/2 px-2">
            <div className="mb-4">
              <label className="font-bold"> Department info :</label>
              <span className="ml-2">John Doe</span>
            </div>
            <div className="mb-4">
              <label className="font-bold"> Location Info : </label>
              <span className="ml-2">john.doe@example.com</span>
            </div>
            <div className="mb-4">
              <label className="font-bold">Earning Info : </label>
              <span className="ml-2">+91-9876543210</span>
            </div>
            <div className="mb-4">
              <label className="font-bold">User Parameter Info : </label>
              <span className="ml-2">+91-9876543210</span>
            </div>
            <div className="mb-4">
              <label className="font-bold"> Allowance Info : </label>
              <span className="ml-2">+91-9876543210</span>
            </div>
            <div className="mb-4">
              <label className="font-bold">Ioan Info : </label>
              <span className="ml-2">+91-9876543210</span>
            </div>
          </div>
    
          {/* Right Side */}
          <div className="w-1/2 px-2">
            <div className="mb-4">
              <label className="font-bold">Grade Info : </label>
              <span className="ml-2">123 Main Street, Ghaziabad, UP</span>
            </div>
            <div className="mb-4">
              <label className="font-bold">Bank Info : </label>
              <span className="ml-2">30</span>
            </div>
            <div className="mb-4">
              <label className="font-bold">Designation Info : </label>
              <span className="ml-2">Software Developer</span>
            </div>
            <div className="mb-4">
              <label className="font-bold">Dimension Info : </label>
              <span className="ml-2">Software Developer</span>
            </div>
            <div className="mb-4">
              <label className="font-bold">Category  Info : </label>
              <span className="ml-2">Software Developer</span>
            </div>
            <div className="mb-4">
              <label className="font-bold">Maximum Info : </label>
              <span className="ml-2">Software Developer</span>
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className="bg-gradient-to-b from-[#5e77e9] to-[#0070FA] h-[100vh]">
      
      {pagetitle()}
      {TabConent()}

    </div>
  );
};

export default CompanyDetail;
