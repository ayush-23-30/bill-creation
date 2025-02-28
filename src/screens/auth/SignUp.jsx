import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import hero from "../../assets/login_img.avif";
import { CustomButton, CustomInput, PasswordInput } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

const navigate= useNavigate();

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);
  

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value); // Debugging log
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.gender) newErrors.gender = "Select a gender.";
    if (!formData.password.trim() || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = () => {
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.succes("Account Created Successfully!");
    }, 2000);
  };

  function headerSection() {
    return (
      <>
        <div className="w-full max-w-md ">
          <img src={logo} width={130} className="mb-4" alt="Logo" />
          <h2 className="text-3xl font-bold">Welcome!</h2>
          <p className="text-gray-500 text-sm">
            Please enter your details to create an account.
          </p>
        </div>
      </>
    );
  }

  function signUpFormSection() {
    return (
      <>
        <div className="w-full max-w-md mt-6 flex flex-col gap-3">
          <div className="">
            <p className="text-md text-gray-500">Full Name</p>

            <CustomInput
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="">
            <p className="text-md text-gray-500">Phone Number</p>

            <CustomInput
              name="phone"
              type="number"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <p className="text-md text-gray-500">Email</p>

            <CustomInput
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <p className="text-md text-gray-500">Gender</p>

            <select
              name="gender"
              className="border border-gray-300 rounded-md p-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.gender}
              onChange={handleChange}
            >
              <option className="" value="">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>
          <div>
            <p className="text-md text-gray-500">Password</p>

            <PasswordInput
              placeholder="Enter your Password"
              name="password"
              // type= "password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <p className="text-md text-gray-500"> Confirm password</p>

            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="mt-5">
            <CustomButton
              onClick={handleClick}
              loading={loading}
              disabled = {loading}
            >
              Create Account
            </CustomButton>

          </div>

          {/* Divider */}

          <div className="w-full my-4 flex justify-center items-center">
            <div className="border-t w-full border-gray-300"></div>
            <p className="text-lg mx-2">or</p>
            <div className="border-t w-full border-gray-300"></div>
          </div>

          {/* Login Link */}

          <div className="border cursor-pointer w-full border-gray-300 rounded-md shadow-md text-center py-2 hover:bg-gray-200 transition"onClick={() => navigate("/")}>
            <p className="font-semibold">
              Have an account?{" "}
              <span
                // href="#"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }

  function sideImageSection() {
    return (
      <>
        <div className="hidden lg:flex m-4 items-center justify-center w-1/2 h-screen">
          <img
            src={hero}
            className="w-full rounded-2xl  h-full object-cover"
            alt="Login Hero"
          />
        </div>
      </>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left Section (Header + Form) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center px-6 md:px-20 py-10">
        {/* Header Section */}

        {headerSection()}

        {/* Form Section */}

        {signUpFormSection()}
      </div>

      {/* Right Section (Image) */}

      {sideImageSection()}
    </div>
  );
}

export default SignUp;
