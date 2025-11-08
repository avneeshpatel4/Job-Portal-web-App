import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJob from "./AppliedJob";
import EditProfileModal from "./EditProfileModal";

const skills = [
  "React",
  "JavaScript",
  "Java",
  "HTML",
  "CSS",
  "Python",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Redux",
  "Tailwind CSS",
  "Docker",
  "Kubernetes",
];
const isHaveResume = true;

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 min-h-screen">
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-6xl mx-auto bg-gray-100 border border-gray-300 rounded-3xl shadow-2xl my-8 p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Avatar className="cursor-pointer h-28 w-28 ring-2 ring-yellow-500 shadow-md">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="font-bold text-2xl sm:text-3xl text-gray-900">
                Full Name
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Software Engineer | MERN Stack Developer
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
              avneeshpatel@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-200 rounded-lg">
              <Contact size={18} className="text-gray-800" />
            </div>
            <span className="text-gray-800">+91 1234567890</span>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        {/* Skills */}
        <div className="my-6">
          <h1 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900">
            Skills
          </h1>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <Badge
                key={i}
                className="bg-gray-200 border border-gray-400 text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-yellow-200 transition-all"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        {/* Resume */}
        <div className="mt-6">
          <Label className="text-gray-900 font-semibold text-lg">
            Resume
          </Label>
          <div className="mt-3">
            {isHaveResume ? (
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1_DcYMMfNHprO3EWGBhdklxznjE2mQ6Re/view?usp=drivesdk"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 font-medium text-sm sm:text-base transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Download Resume
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
