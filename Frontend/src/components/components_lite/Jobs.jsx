import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./FilterCard";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.jobs);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(allJobs);
      return;
    }

    const query = searchedQuery.toLowerCase();

    const filteredJobs = allJobs.filter((job) => {
      return (
        job.title?.toLowerCase().includes(query) ||
        job.description?.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query) ||
        job.experience?.toLowerCase().includes(query) ||
        job.salary?.toLowerCase().includes(query)
      );
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

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
          {filterJobs.length <= 0 ? (
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
                {filterJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Job1 job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
