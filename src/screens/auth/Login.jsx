import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import hero from "../../assets/login_img.avif";
import { CustomButton, CustomInput, PasswordInput } from "../../util/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (!email || !password) {
      // Checks for empty or undefined values
      setError(true);
      toast.error("Please fill out both fields"); // Add a toast message for better feedback
      return;
    }

    setError(false); // Reset error state if inputs are valid
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Email: ", email);
      console.log("Password: ", password);
      navigate('/dashboard'); // Redirect to dashboard
    }, 2000);
  };

  function loginInputField() {
    return (
      <div className=" mt-10 w-[90%] sm:w-[90%] md:w-[80%]">
        <div className="">
          <p className="text-md mb-[1px] text-gray-500">Email Address</p>
          <CustomInput
            placeholder={"Enter your email address"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">Email is required</p>}
        </div>
        <div className="mt-4">
          <p className="text-md mb-[1px] text-gray-500">Password</p>
          <PasswordInput
            placeholder={"Enter your Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}
        </div>
        <div className="flex items-end justify-end">
          <p
            className="text-blue-500 text-md mt-2 cursor-pointer hover:underline "
            onClick={() => navigate("/forget-password")}
          >
            Forgot Password?
          </p>
        </div>
        <div className="mt-5">
          <CustomButton
            onClick={handleClick}
            loading={loading}
            disabled={false}
          >
            Login
          </CustomButton>
        </div>
      </div>
    );
  }

  function loginScreenData() {
    return (
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-10 md:px-20 h-screen">
        <img
          src={logo}
          width={150}
          className="relative bottom-12 md:bottom-0"
        />
        <div className="mt-6 md:mt-12">
          <h2 className="text-3xl font-bold">Welcome back!</h2>
          <p className="text-gray-500 text-sm leading-2">
            Please Enter your Details.
          </p>
        </div>

        {/* Login Fields */}
        {loginInputField()}

        {/* Divider */}
        <div className="w-[90%] sm:w-[90%] md:w-[80%] my-4 flex justify-center items-center">
          <div className="border-[1px] border-[#D0D5DD] flex-grow"></div>
          <p className="text-lg mx-2 relative -top-[2px]">or</p>
          <div className="border-[1px] border-[#D0D5DD] flex-grow"></div>
        </div>

        {/* Sign-Up Button */}
        <div
          className="border-[1px] cursor-pointer w-[90%] sm:w-[90%] md:w-[80%] border-[#D0D5DD] rounded-md shadow-md text-center hover:bg-gray-200 transition"
          onClick={() => navigate("/sign-up")}
        >
          <p className="flex justify-center font-semibold items-center p-2">
            Don't have an account?{" "}
            <p className="text-blue-500 pl-1 underline hover:text-blue-700">
              Sign-Up
            </p>
          </p>
        </div>
      </div>
    );
  }

  function imageSideSection() {
    return (
      <div className="hidden lg:flex items-center justify-center w-1/2 h-screen">
        <img
          src={hero}
          className="w-full h-[calc(100vh-40px)] m-5 rounded-lg object-cover"
          alt="Login Hero"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row justify-center lg:justify-start items-center overflow-hidden">
      {loginScreenData()}
      {imageSideSection()}
    </div>
  );
}

export default Login;
