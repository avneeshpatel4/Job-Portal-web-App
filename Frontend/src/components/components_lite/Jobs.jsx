import React from "react";
import Navbar from "./Navbar";
import FilterCard from "./FilterCard";
import Job1 from "./Job1";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Jobs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Section */}
          <div className="md:w-[25%] lg:w-[20%]">
            <FilterCard />
          </div>

          {/* Job Cards Section */}
          {jobsArray.length <= 0 ? (
            <span className="text-gray-600 text-lg font-medium">
              Job Not Found 😔
            </span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-3
                  gap-6
                "
              >
                {jobsArray.map((job, index) => (
                  <Job1 key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
