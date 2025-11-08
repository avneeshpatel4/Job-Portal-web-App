import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bookmark } from "lucide-react";

const Job1 = ({ job }) => {
  const navigate = useNavigate();
const jobId = "123qwe123";
  // ✅ Dummy data fallback
  const dummyJob = {
    _id: "123",
    createdAt: new Date(),
    title: "Frontend Developer",
    description:
      "Join our dynamic team to build interactive UIs using React.js and Tailwind CSS.",
    position: "2",
    jobType: "Full-Time",
    salary: "8",
    company: {
      name: "TechNova Solutions",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
  };

  const data = job || dummyJob;

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
          {daysAgoFunction(data?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(data?.createdAt)} days ago`}
        </p>
        <Button
          variant="outline"
          className="rounded-full bg-gray-50"
          size="icon"
          aria-label="Bookmark job"
        >
          <Bookmark className="text-gray-600" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 my-4">
        <div className="flex items-center gap-3">
          <Button className="p-6" variant="outline" size="icon">
            <Avatar>
              <AvatarImage src={data?.company?.logo} alt="Company Logo" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
          <div>
            <h1 className="font-semibold text-lg">{data?.company?.name}</h1>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
      </div>

      {/* Job Info */}
      <div>
        <h1 className="font-bold text-xl my-2 text-gray-800">{data?.title}</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          {data?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-semibold" variant="ghost">
          {data?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-semibold" variant="ghost">
          {data?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-semibold" variant="ghost">
          {data?.salary} LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-5">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
          className="w-full sm:w-auto"
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
