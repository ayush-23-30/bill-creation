import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import hero from "../../assets/login_img.avif";
import { CustomButton, CustomInput, PasswordInput } from "../../util/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import apiCall from "@/sdk/apiCall";
import axiosInstance from "@/sdk/axois";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();


 
  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in both fields');
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post('/api/auth/login', {
        username: email, 
         password
      });
      localStorage.setItem('authToken', response.data.token);
      
      toast.success('Login successful!');
      navigate('/dashboard'); 
    } catch (error) {
      let errorMessage = 'Login failed';
      
      if (error.response) {
    
        errorMessage = error.response.data.message || errorMessage;
        
        // Handle 401 specifically if needed
        if (error.response.status === 401) {
          errorMessage = 'Invalid credentials';
        }
      }
      
      toast.error(errorMessage);
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e) => {
    if (!email || !password){
      // Checks for empty or undefined values
      setError(true);
      toast.error("Please fill out both fields"); 
      return;
    }
    e.preventDefault(); // Prevent form submission
    setLoading(true);
    setError(null);
    try {
      // Define the API endpoint for login
      const url = '/api/auth/login';

      // Prepare the request payload
      const data = {
        username: email, 
        password: password,
      };

      const result = await apiCall({
        method: 'POST',
        url,
        data,
        headers: {
          'Content-Type': 'application/json', 
        },
      });

      // Handle the response
      if (result.error) {
        toast.error(result.error)
        throw new Error(result.error);
      }

      toast.success('Login Successful')
      // console.log('Login successful:', result.data);
      navigate('/dashboard')

      // Optionally, save the token to localStorage or context
      if (result.data.token) {
        localStorage.setItem('authToken', result.data.token);
      }
    } catch (error) {
      // Handle login error
      toast.error(error.message)
      console.error('Login error:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
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
            onClick={handleLogin}
            // onClick={handleSubmit}
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
          <h2 className="text-3xl text-black font-bold">Welcome back!</h2>
          <p className="text-gray-500 text-sm leading-2">
            Please Enter your Details.
          </p>
        </div>

        {/* Login Fields */}
        {loginInputField()}

        {/* Divider */}
        <div className="w-[90%] sm:w-[90%] md:w-[80%] my-4 flex justify-center items-center">
          <div className="border-[1px] border-[#D0D5DD] flex-grow"></div>
          <p className="text-lg mx-2 text-black relative -top-[2px]">or</p>
          <div className="border-[1px] border-[#D0D5DD] flex-grow"></div>
        </div>

        {/* Sign-Up Button */}
        <div
          className="border-[1px] cursor-pointer w-[90%] sm:w-[90%] md:w-[80%] border-[#D0D5DD] rounded-md shadow-md text-center hover:bg-gray-200 transition"
          onClick={() => navigate("/sign-up")}
        >
          <p className="flex justify-center font-semibold text-black items-center p-2">
            Don't have an account?{" "}
            <span className="text-blue-500 pl-1 underline hover:text-blue-700">
              Sign-Up
            </span>
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
    <div className="w-full h-screen bg-white flex flex-col lg:flex-row justify-center lg:justify-start items-center overflow-hidden">
      {loginScreenData()}
      {imageSideSection()}
    </div>
  );
}

export default Login;
