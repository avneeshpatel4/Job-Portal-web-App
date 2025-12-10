import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bookmark } from "lucide-react";

const Job1 = ({ job }) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="p-5 rounded-xl shadow-lg bg-gray-200 border border-gray-500 hover:shadow-2xl transition-all duration-300 w-full max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-800">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        {/* Bookmark Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`rounded-full transition-all duration-200 
            ${isBookmarked ? "bg-yellow-300 border-yellow-600 shadow-md" : "bg-gray-50 border-gray-500"}
          `}
        >
          <Bookmark
            className={`transition-all 
              ${isBookmarked ? "text-yellow-800 fill-yellow-800" : "text-gray-600"}
            `}
          />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 my-4">
        <div className="flex items-center gap-3">
          <Button className="p-6" variant="outline" size="icon">
            <Avatar>
              <AvatarImage src={job?.company?.logo} alt="Company Logo" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
          <div>
            <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
      </div>

      {/* Job Info */}
      <div>
        <h1 className="font-bold text-xl my-2 text-gray-800">{job?.title}</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-semibold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-semibold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-semibold" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-5">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="w-full sm:w-auto bg-gray-100 border border-gray-700 font-semibold"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] text-white hover:bg-[#5b0992] w-full sm:w-auto">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job1;
