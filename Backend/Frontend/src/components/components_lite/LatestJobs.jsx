import React from "react";
import JobCards from "./JobCards";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const LatestJobs = () => {
  const { allJobs, loading, error } = useGetAllJobs();

  if (loading)
    return (
      <p className="text-center text-xl font-semibold mt-10">
        Loading jobs...
      </p>
    );

  if (error)
    return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 my-20 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h2>

      {/* Grid Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10">
        {allJobs.length === 0 ? (
          <div className="col-span-full text-center p-10 bg-gray-100 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-600">No Jobs Found 😞</h3>
            <p className="text-gray-500">Try adjusting your search or check back later.</p>
          </div>
        ) : (
          allJobs.slice(0, 6).map((job) =>
            job?._id ? (
              <JobCards key={job._id} job={job} />
            ) : (
              <span key={Math.random()}>Invalid Job Data</span>
            )
          )
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
