import React, { useState , useEffect } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Spinner from "../screens/common/Spinner";


export const CustomInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name 
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={` border text-black border-gray-400 bg-[#efefef] rounded-md p-2 w-full focus:outline-none  max-h-[42px] cursor-text placeholder:text-black focus:ring-2 focus:ring-blue-500`}
     
    />
  );
};

export const PasswordInput = ({ placeholder, value, onChange , name }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        name = {name}
        onChange={onChange}
        className="border border-gray-400 bg-[#efefef] rounded-md placeholder:text-black p-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-2 text-gray-600"
      >
        <div className="relative top-1 pr-1">
          {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
        </div>
      </button>
    </div>
  );
};

export const CustomButton = ({
  children,
  onClick,
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={`w-full text-white px-4 py-2 rounded-md flex items-center cursor-pointer justify-center min-h-[40px] shadow-md transition
        ${loading || disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}
      `}
    >
      {loading ? <Spinner size="w-5 h-5" /> : children}
    </button>
  );
};



export const useKeyboardNavigation = (nextStep, previousStep) => {
  useEffect(() => {
    // Function to handle keydown events
    const handleKeyDown = (e) => {
      // Tab key to go to the next step
      if (e.key === "Tab") {
        nextStep();     
      }

      // Shift + Space to go to the previous step
      if (e.shiftKey) {
        previousStep();
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextStep, previousStep]); // Only re-run if nextStep or previousStep changes
};


