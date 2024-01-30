import { useState } from "react";
import "tailwindcss/tailwind.css";
import "../../index.css";
// import { Link } from "react-router-dom";
import Image from "../../asset/images/svg/registration-page.svg";
import Logo from "../../assets/svg/orm-resized-logo.svg";
import EyeIcon from "../../assets/svg/eye-icon.svg";
import ArrowBack from "../../assets/png/arrow-back.png"
import { LoginUser } from "../../utils/apis/APICall";
// import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  // const navigate = useNavigate();

  const initialData = {
    email: "",
    password: ""
  }

  const [data, setData] = useState(initialData);

  const handleLogin = async () => {
    try {
      const response = await LoginUser(data);
      if (response && response.access_token) {
        const accessToken = response.access_token;
        toast.success("Login successful");
        localStorage.setItem("token", accessToken);
        window.location.href = "/dashboard";
      } else {
        console.error("Login failed");
        toast.success("Login failed: please try again");
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  


  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }


  return (
    <div className="flex h-screen overflow-y-hidden pt-0">
      <div className="w-1/2 bg-blue-600 flex items-center justify-center">
      <img
          src={ArrowBack}
          alt="Arrow Back"
          style={{ maxWidth: "2%", maxHeight: "2%", position: "absolute", top: "3%", left: "2%", filter: "invert(1)" }}
        />
        <img
          src={Image}
          alt="Your Image"
          className="object-center"
          style={{ maxHeight: "80%", maxWidth: "80%" }}
        />
      </div>

      <div className="w-1/2 p-8 mt-20 pt-0">
        <img src={Logo} alt="Logo" className="h-48 w-32 -mt-6" />
        <h2 className="text-1xl font-bold pt-0 -mt-16">Welcome back!</h2>
        <br />
        <form className="mt-0" onSubmit={(event) => event.preventDefault()}>
          <div className="mb-6">
            <label className="text-xs font-bold">Enter company email</label>{" "}
            <br />
            <input
              className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Company email"
              type="email"
              name="email"
              onChange={handleChange}
            ></input>
          </div>

          <div className="mb-8 relative">
            <label className="text-xs font-bold block mb-1">
              Enter Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full h-10 px-4 rounded-md bg-gray-300 border-2 border-gray-300 text-xs"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src={EyeIcon}
                  alt="Eye Icon"
                  className="h-4 w-4 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-10 px-4 rounded-md mb-2 bg-blue-600 hover:bg-blue-400 hover:border-blue-400 cursor-pointer border-2 border-blue-600 text-white flex items-center justify-center font-bold">
            <button type="submit" onClick={handleLogin}>Login</button>
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center">
          <p className="text-sm">Don't have an account? </p>
          <a className="text-sm text-blue-600 font-bold" href="/admin-registration">
            Register
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a className="text-xs font-bold text-blue-700 underline" href="/forgot-password">
            Forgot Password
          </a>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
