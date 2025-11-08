import React from "react";
import JobCards from "./JobCards";

const randomJobs = [
    1,2,3,4,5,6,7,8,9
]

function LatestJobs() {
  return (
    <div className="max-w-7xl mx-auto my-20 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Opening
      </h2>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5 justify-center">
 {randomJobs.slice(0,6).map((job,index)=>{
        return(
      <JobCards key={index}></JobCards>
        )
      })}
</div>
     
    </div>
  );
}

export default LatestJobs;
