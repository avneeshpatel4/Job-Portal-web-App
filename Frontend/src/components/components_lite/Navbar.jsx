import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User2, LogOut, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-300 hover:bg-gray-300 shadow-sm p-3">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <h1 className="text-2xl font-bold text-[#FA4F09]">
            Job <span className="text-[#6A38C2]">Portal</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex font-medium items-center gap-4 text-gray-700">
            <li>
              <Link to={"/"}>
                <Button
                  variant="ghost"
                  className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium"
                >
                  Home
                </Button>
              </Link>
            </li>
            <Link to={"/Browse"}>
              <li>
                <Button
                  variant="ghost"
                  className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium"
                >
                  Browse
                </Button>
              </li>
            </Link>
            <li>
              <Link to="/Jobs">
                <Button
                  variant="ghost"
                  className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium"
                >
                  Jobs
                </Button>
              </Link>
            </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>AP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Avneesh Patel</h3>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <Link to="/Profile">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">Profile</Button>
                    </div>
                  </Link>

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-gray-200 bg-gray-100 animate-fadeIn">
          <ul className="flex flex-col gap-3 font-medium text-gray-700 w-full max-w-[200px]">
            <li>
              <Link to={"/"}>
                <Button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800">
                  Home
                </Button>
              </Link>
            </li>
            <Link to={"/Browse"}>
              <li>
                <Button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800">
                  Browse
                </Button>
              </li>
            </Link>
            <li>
              <Link to={"/Jobs"}>
                <Button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800">
                  Jobs
                </Button>
              </Link>
            </li>
          </ul>

          {!user ? (
            <div className="flex flex-col gap-2 w-full max-w-[200px]">
              <Link to="/login">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <Link to="/Profile">
                <Button variant="link">Profile</Button>
              </Link>

              <Button variant="link">Logout</Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
