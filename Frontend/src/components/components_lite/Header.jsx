import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";

function Header() {
  return (
    <div>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          {/* Top Badge */}
          <span className="px-4 py-2 flex items-center gap-2 mx-auto rounded-full bg-gray-200 text-red-600 font-medium">
            <span className="text-[#614232]">
              <PiBuildingOfficeBold />
            </span>
            No.1 Job hunt website
          </span>

          {/* Title */}
          <div className="flex justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
              Search, Apply & <br />
              Get your <span className="text-[#6A38C2]">Dream Job</span>
            </h2>
          </div>

          {/* Centered Paragraph */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto px-4">
            Start your hunt for the best, life-changing career opportunities
            from here in your selected areas conveniently and get hired quickly.
          </p>

          {/* Search Bar */}
          <div
            className="flex w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] shadow-lg border border-gray-300 
             pl-3 rounded-full items-center gap-3 mx-auto transition-all duration-300"
          >
            <input
              type="text"
              placeholder="Find your dream job"
              className="flex-1 py-2 sm:py-3 px-2 text-sm sm:text-base outline-none border-none rounded-l-full"
            />
            <Button className="rounded-full bg-black hover:bg-gray-800 transition-all duration-200">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
