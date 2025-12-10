import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setloading } from "@/redux/authSlice";

function Register() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    file: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading,user } = useSelector((store) => store.auth);


  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) formData.append("file", input.file);

    try {
      dispatch(setloading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "An unexpected error occurred";
      toast.error(errorMessage);
    } finally {
      dispatch(setloading(false));
    }
  };
   useEffect(()=>{
      if (user){
        navigate("/")
      }
    },[])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 bg-gray-300">
      {/* <Navbar /> */}

      <div className="w-full max-w-3xl text-center mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-bold">
          Find Your Dream Job...
        </h1>
      </div>

      <form
        onSubmit={submitHandler}
        className="w-full sm:w-[90%] md:w-2/3 lg:w-1/2 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8 my-4 shadow-sm bg-gray-100"
      >
        <h1 className="font-bold text-xl sm:text-2xl text-center text-blue-600">
          Register
        </h1>

        {/* Fullname */}
        <div className="my-3">
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            placeholder="Enter your full name"
              className="border border-gray-500"

          />
        </div>

        {/* Email */}
        <div className="my-3">
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="Enter your email"
              className="border border-gray-500"

          />
        </div>

        {/* Password */}
        <div className="my-3">
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Enter your password"
              className="border border-gray-500"

          />
        </div>

        {/* Phone Number */}
        <div className="my-3">
          <Label>Phone Number</Label>
          <Input
            type="tel"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={changeEventHandler}
            placeholder="Enter your phone number"
              className="border border-gray-500"

          />
        </div>

        {/* Role */}
        <div className="my-3">
          <Label>Role</Label>
          <RadioGroup className="flex flex-col sm:flex-row gap-4 mt-2">
            <label className="flex items-center gap-2">
              <Input
                type="radio"
                name="role"
                value="Student"
                checked={input.role === "Student"}
                onChange={changeEventHandler}
                className="cursor-pointer"
                
              />
              Student
            </label>
            <label className="flex items-center gap-2">
              <Input
                type="radio"
                name="role"
                value="Recruiter"
                checked={input.role === "Recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              Recruiter
            </label>
          </RadioGroup>
        </div>

        {/* File Upload */}
        <div className="my-3">
          <Label>Profile Photo</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={changeFileHandler}
            className="cursor-pointer border border-gray-400"
          />
        </div>

        {/* Submit Button */}
        {loading ? (
          <div className="flex justify-center my-6">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-600"></div>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-800 rounded-md transition-all duration-200"
          >
            Register
          </button>
        )}

        <p className="text-gray-600 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
