import React from "react";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import "../../index.css";
import { Link } from "react-router-dom";
import Image from "../../assets/svg/registration-page.svg";
import Logo from "../../assets/svg/orm-resized-logo.svg";
import EyeIcon from "../../assets/svg/eye-icon.svg";
import ArrowBack from "../../assets/png/arrow-back.png";
import { RegisterUser } from "../../utils/apis/APICall";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegistrationPage = () => {


  const handleRegistration = async () => {
    try {
      const response = await RegisterUser(data);
      console.log("Registration successful:", response.data);
      if (response.status === true) {
        console.log("hello");
        alert("Registration successful, kindly login");
        window.location.href = "/login";
      } else {
        alert("Registration failed");
        window.location.href = "/admin-registration";
      }
      
    } catch (error) {
      console.error("Registration failed:", error);
      
    } 
  };

  const initialData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "" 
  }

  const [data, setData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <div className="flex h-screen overflow-y-hidden pt-0">
      <div className="w-1/2 bg-blue-600 flex items-center justify-center">
        <img
          src={ArrowBack}
          alt="Arrow Back"
          style={{
            maxWidth: "2%",
            maxHeight: "2%",
            position: "absolute",
            top: "3%",
            left: "2%",
            filter: "invert(1)",
          }}
        />
        <img
          src={Image}
          alt="Your Image"
          className="object-center"
          style={{ maxHeight: "80%", maxWidth: "80%" }}
        />
      </div>

      <div className="w-1/2 p-8 mt-0 pt-0">
        <img src={Logo} alt="Logo" className="h-48 w-32 -mt-6" />
        <h2 className="text-1xl font-bold pt-0 -mt-16">Get Started</h2>
        <br />
        

        <form className="mt-10" onSubmit={(event) => event.preventDefault()}>
          <div className="-mt-10 mb-4">
            <label className="text-xs font-bold">Company name</label> <br />
            <input
              className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Company name"
              value={data.name}
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="text-xs font-bold">Company email</label>{" "}
            <br />
            <input
              className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Company email"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 relative">
            <label className="text-xs font-bold block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={handleChange}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src={EyeIcon}
                  alt="Eye Icon"
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
          </div>

          <div className="mb-8 relative">
            <label className="text-xs font-bold block mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 border-gray-300 text-xs"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src={EyeIcon}
                  alt="Eye Icon"
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-10 px-4 rounded-md mb-2 bg-blue-600 cursor-pointer hover:bg-blue-400 hover:border-blue-400 cursor-pointer border-2 border-blue-600 text-white flex items-center justify-center font-bold">
            <button type="submit" onClick={handleRegistration}>Register</button>
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-sm text-blue-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;


