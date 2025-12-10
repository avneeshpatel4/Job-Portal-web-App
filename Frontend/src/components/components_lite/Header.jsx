import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="px-4">
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">

          {/* Badge */}
          <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-red-600 font-medium w-fit">
            <span className="text-[#614232]">
              <PiBuildingOfficeBold />
            </span>
            No.1 Job Hunt Website
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Search Apply & <br className="hidden sm:block" />
            Get Your <span className="text-[#6A38C2]">Dream Job</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto px-2 leading-relaxed">
            Start your hunt for the best, life-changing career opportunities
            right here. Choose your preferred areas and get hired quickly.
          </p>

          {/* Search bar */}
          <div className="flex w-full sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto mt-4 shadow-lg border border-gray-300 px-3 py-2 rounded-full items-center gap-2 bg-white">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className="outline-none w-full text-sm sm:text-base"
            />
            <Button
              onClick={searchjobHandler}
              className="rounded-full px-4 py-2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
