import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";

import { toast } from "react-toastify";
// import { CustomButton, CustomInput } from "../../utils/Utils";
import { CustomButton, CustomInput } from "../../util/utils";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.info("This feature will work soon");
    }, 2000);
  };

  function ForgetInputField() {
    return (
      <div className=" mt-6 w-[90%]  sm:w-[90%] md:w-[80%]">
        <div className="">
          <p className="text-md mb-[1px] text-gray-500">Email Address</p>
          <CustomInput
            placeholder={"Enter your email address"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <CustomButton
            onClick={handleClick}
            loading={loading}
            disabled={false}
          >
            Reset Password
          </CustomButton>
        </div>
      </div>
    );
  }

  function ScreenData() {
    return (
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-10 md:px-20 h-screen">
        <img
          src={logo}
          width={150}
          className="relative bottom-12 md:bottom-0"
        />
        <div className="mt-6 md:mt-12">
          <h2 className="text-3xl text-black font-bold">Forget Password?</h2>
          <div className="mt-2">
            <p className="text-gray-500 leading-3.5 text-sm leading-">
              Enter the email associated with your account and we’ll send an
              email with instructions to reset your password.
            </p>
          </div>
        </div>

        {/* Login Fields */}
        {ForgetInputField()}
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-white flex flex-col lg:flex-row justify-center items-center  overflow-hidden">
      {ScreenData()}
    </div>
  );
}

export default ForgetPassword;
