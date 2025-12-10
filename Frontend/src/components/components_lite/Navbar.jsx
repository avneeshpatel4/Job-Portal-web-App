import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User2, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "../../utils/data";
import axios from "axios";
import { setUser } from "@/redux/authSlice";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (response.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logged out successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <nav className="bg-gray-300 shadow-sm p-3">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Job <span className="text-[#6A38C2]">Portal</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex font-medium items-center gap-4 text-gray-700">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Button
                    onClick={() => navigate("/admin/companies")}
                    className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium"
                  >
                    Companies
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate("/admin/jobs")}
                    className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium"
                  >
                    Jobs
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button
                    onClick={() => navigate("/")}
                    className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium"
                  >
                    Home
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate("/Browse")}
                    className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium"
                  >
                    Browse
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate("/Jobs")}
                    className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium"
                  >
                    Jobs
                  </Button>
                </li>
              </>
            )}
          </ul>

          {/* Right Side User Menu */}
          {!user ? (
            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate("/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Register
              </Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="Avatar" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent
                align="end"
                className="w-56 p-4 shadow-lg rounded-xl border bg-gray-100"
              >
                <div className="flex items-center gap-3 pb-3 border-b">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                    <AvatarFallback>AP</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900">
                      {user?.fullname}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-3 text-gray-700">
                  {user?.role === "Student" && (
                    <Button
                      variant="ghost"
                      onClick={() => navigate("/Profile")}
                      className="justify-start"
                    >
                      <User2 className="mr-2 w-4 h-4" /> Profile
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    onClick={logoutHandler}
                    className="justify-start"
                  >
                    <LogOut className="mr-2 w-4 h-4" /> Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-gray-200 bg-gray-100 rounded-lg">

          {/* Recruiter menu */}
          {user && user.role === "Recruiter" && (
            <>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/admin/companies");
                }}
                className="w-32 bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Companies
              </Button>

              <Button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/admin/jobs");
                }}
                className="w-32 bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Jobs
              </Button>
            </>
          )}

          {/* Student / normal user menu */}
          {(!user || user.role === "Student") && (
            <>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/");
                }}
                className="w-32 bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Home
              </Button>

              <Button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/Browse");
                }}
                className="w-32 bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Browse
              </Button>

              <Button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/Jobs");
                }}
                className="w-32 bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Jobs
              </Button>
            </>
          )}

          {!user ? (
            <>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/login");
                }}
                className="w-32 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Login
              </Button>

              <Button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/register");
                }}
                className="w-32 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Register
              </Button>
            </>
          ) : (
            <>
              {user.role === "Student" && (
                <Button
                  variant="link"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/Profile");
                  }}
                >
                  Profile
                </Button>
              )}

              <Button
                variant="link"
                onClick={() => {
                  setMenuOpen(false);
                  logoutHandler();
                }}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
