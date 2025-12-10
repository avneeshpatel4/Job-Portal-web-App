import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job?._id}`)}
      className="p-4 sm:p-5 md:p-6 rounded-xl shadow-lg bg-gray-200 
                 border border-gray-400 hover:shadow-2xl hover:shadow-blue-200 
                 transition-all duration-300 cursor-pointer 
                 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto 
                 hover:scale-[1.02]"
    >
      {/* Company Info */}
      <div className="mb-2 sm:mb-3">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
          {job?.company?.name || "Unknown Company"}
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          {job?.company?.location || "India"}
        </p>
      </div>

      {/* Job Details */}
      <div>
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl my-2 sm:my-3 text-gray-900">
          {job?.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed line-clamp-3">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 sm:gap-3 items-center mt-4">
        <Badge className="text-blue-600 font-bold bg-white" variant="ghost">
          {job?.position ? `${job.position} Positions` : "Positions"}
        </Badge>
        <Badge className="text-[#FA4F09] font-bold bg-white" variant="ghost">
          {job?.salary ? `${job.salary} LPA` : "N/A"}
        </Badge>
        <Badge className="text-[#6B3AC2] font-bold bg-white" variant="ghost">
          {job?.location || job?.company?.location || "Location"}
        </Badge>
        <Badge className="text-black font-bold bg-white" variant="ghost">
          {job?.jobType || "Full Time"}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
