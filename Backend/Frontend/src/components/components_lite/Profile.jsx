import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJob from "./AppliedJob";
import EditProfileModal from "./EditProfileModal";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAllAppliedJob";

function Profile() {
  useGetAppliedJobs()
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  // Fallback dummy data if user data is missing
  const dummyData = {
    fullname: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+91 9876543210",
    profile: {
      bio: "A passionate software developer exploring MERN stack and cloud technologies.",
      skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      resume: "#",
      resumeOriginalname: "resume_johndoe.pdf",
    },
  };

  // Use real user if available, otherwise fallback to dummy data
  const displayUser = user && Object.keys(user).length > 0 ? user : dummyData;

  return (
    <div className="bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 min-h-screen">
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-6xl mx-auto bg-gray-100 border border-gray-300 rounded-3xl shadow-2xl my-8 p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Avatar className="cursor-pointer h-28 w-28 ring-2 ring-gray-500 shadow-md rounded-3xl">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt={displayUser.fullname}
              />
              <AvatarFallback>
                {displayUser.fullname?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="font-bold text-2xl sm:text-3xl text-gray-900">
                {displayUser.fullname}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {displayUser?.profile?.bio || "No bio available"}
              </p>
            </div>
          </div>

          <Button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-xl px-3 py-2 flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            onClick={() => setOpen(true)}
          >
            <Pen size={16} />
            <span>Edit</span>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-6 grid gap-4 sm:grid-cols-2 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-200 rounded-lg">
              <Mail size={18} className="text-gray-800" />
            </div>
            <span className="text-gray-800 break-all">
              <a href={`mailto:${displayUser.email}`}>{displayUser.email}</a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-200 rounded-lg">
              <Contact size={18} className="text-gray-800" />
            </div>
            <span className="text-gray-800">
              <a href={`tel:${displayUser.phoneNumber}`}>
                {displayUser.phoneNumber}
              </a>
            </span>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        {/* Skills */}
        <div className="my-6">
          <h1 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900">
            Skills
          </h1>
          <div className="flex flex-wrap gap-2">
            {displayUser?.profile?.skills?.length > 0 ? (
              displayUser.profile.skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-gray-200 border border-gray-400 text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-yellow-200 transition-all"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        {/* Resume */}
        <div className="mt-6">
          <Label className="text-gray-900 font-semibold text-lg">Resume</Label>
          <div className="mt-3">
            {displayUser?.profile?.resume ? (
              <a
                target="_blank"
                href={displayUser.profile.resume}
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 font-medium text-sm sm:text-base transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {displayUser.profile.resumeOriginalname}
              </a>
            ) : (
              <span className="text-gray-600">No Resume Found</span>
            )}
          </div>
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-5xl text-base sm:text-lg my-8 mx-auto bg-gray-200 rounded-3xl shadow-lg p-5 sm:p-8 border border-gray-300">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
          🧑‍💼 Applied Jobs
        </h1>
        <AppliedJob />
      </div>

      {/* Edit Modal */}
      <EditProfileModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default Profile;
