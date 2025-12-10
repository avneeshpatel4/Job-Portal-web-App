import React from "react";
import JobCards from "./JobCards";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const LatestJobs = () => {
  const { allJobs, loading, error } = useGetAllJobs();

  if (loading)
    return <p className="text-center text-xl font-semibold mt-10">Loading jobs...</p>;

  if (error)
    return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto my-20 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8 justify-center">
        {allJobs.length === 0 ? (
          <div className="text-center p-8 bg-gray-100 rounded-xl">
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
