import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_ENDPOINT } from "../../../utils/data";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setloading, setUser } from "@/redux/authSlice";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setloading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "An unexpected error occurred";
      toast.error(errorMessage);
    } finally {
      dispatch(setloading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Uncomment Navbar if needed */}
      {/* <Navbar /> */}

      <div className="flex flex-col items-center justify-center pt-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-8">
          Find Your <span className="text-[#6A38C2]">Dream Job</span>...
        </h1>

        <form
          onSubmit={submitHandler}
          className="w-full max-w-md sm:max-w-lg bg-white border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-600 mb-6">
            Login
          </h2>

          {/* Email */}
          <div className="my-3">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="my-3">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Role */}
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer accent-blue-600"
                />
                <span>Student</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer accent-blue-600"
                />
                <span>Recruiter</span>
              </label>
            </div>
          </div>

          {/* Button / Loader */}
          {loading ? (
            <div className="flex items-center justify-center py-3">
              <Loader2 className="animate-spin h-6 w-6 text-blue-600" />
            </div>
          ) : (
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-all duration-200"
            >
              Login
            </Button>
          )}

          <p className="text-gray-600 text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-700 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
