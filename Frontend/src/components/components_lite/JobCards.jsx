import React from "react";
import { Badge } from "../ui/badge";

function JobCards() {
  return (
    <div
      className="p-4 sm:p-5 md:p-6 rounded-xl shadow-lg bg-gray-200 
                 border border-gray-500 hover:shadow-2xl transition-shadow 
                 duration-300 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
    >
      {/* Company Info */}
      <div className="mb-2 sm:mb-3">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
          Company Name
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">India</p>
      </div>

      {/* Job Details */}
      <div>
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl my-2 sm:my-3">
          Job Title
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          corporis.
        </p>
      </div>

      {/* Badges Section */}
      <div className="flex flex-wrap gap-2 sm:gap-3 items-center mt-4">
        <Badge className="text-blue-600 font-bold bg-white" variant="ghost">
          10 Open Positions
        </Badge>
        <Badge className="text-[#FA4F09] font-bold bg-white" variant="ghost">
          30 LPA
        </Badge>
        <Badge className="text-[#6B3AC2] font-bold bg-white" variant="ghost">
          Noida
        </Badge>
        <Badge className="text-black font-bold bg-white" variant="ghost">
          Full Time
        </Badge>
      </div>
    </div>
  );
}

export default JobCards;
