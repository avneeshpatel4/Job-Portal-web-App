import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function Description() {
  const isApplied = true;
  return (
    <div>
      <div className="max-w-7xl mx-auto my-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Title</h1>
            <div>
              <div className="flex gap-2 items-center mt-4">
                <Badge className={"text-blue-600 font-bold"} varient={"ghost"}>
                  10 Position
                </Badge>
                <Badge className={"text-[#FA4F09] font-bold"} varient={"ghost"}>
                  20 LPA
                </Badge>{" "}
                <Badge className={"text-[#6B3AC2] font-bold"} varient={"ghost"}>
                  Remote
                </Badge>{" "}
                <Badge className={"text-black font-bold"} varient={"ghost"}>
                  Full Time
                </Badge>
              </div>
            </div>
          </div>
          <div>
            <Button
              disabled={isApplied}
              className={`rounded-lg px-6 py-2 ${isApplied ? "bg-green-400 text-black cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              {isApplied ? "Applied" : "Apply"}
            </Button>
          </div>
        </div>
          <h1 className="border-b-2 border-gray-400 font-semibold py-4">Job Description</h1>
        <div className="my-3">
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Sofware Engineer</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Remote</span></h1>
        <h1 className="font-bold my-1">salary: <span className="pl-4 font-normal text-gray-800">50000-200000</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">0-2 year</span></h1>
        <h1 className="font-bold my-1">Job Type: <span className="pl-4 font-normal text-gray-800">Full time</span></h1>
        <h1 className="font-bold my-1">About the Company: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolores!</span></h1>
        <h1 className="font-bold my-1">Total Applicant: <span className="pl-4 font-normal text-gray-800">50</span></h1>

        </div>
      </div>
       
    </div>
  );
}

export default Description;
