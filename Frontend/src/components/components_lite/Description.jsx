import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_ENDPOINT, JOB_API_ENDPOINT } from "@/utils/data";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

const Description = () => {
  const { user } = useSelector((store) => store.auth);
  const { singleJob } = useSelector((store) => store.jobs);

  const dispatch = useDispatch();
  const params = useParams();
  const jobId = params.id;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // -------- CHECK IF USER HAS APPLIED ---------
  const initialApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;

  const [isApplied, setIsApplied] = useState(initialApplied);

  // -------- APPLY BUTTON HANDLER ---------
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setIsApplied(true);

        const updatedJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };

        dispatch(setSingleJob(updatedJob));
        toast.success(res.data.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong!");
    }
  };

  // -------- FETCH SINGLE JOB (FROM 2ND FILE STRUCTURE) ---------
  useEffect(() => {
    const fetchSingleJob = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });

        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications?.some(
              (application) => application.applicant === user?._id
            )
          );
        } else {
          setError("Unable to fetch job details");
        }
      } catch (err) {
        setError(err?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  if (!singleJob) {
    return (
      <div className="text-center py-10 text-lg font-semibold">Loading...</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-300 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto bg-gray-100 p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-700">
        {/* ------------ HEADER ------------ */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl text-gray-900">
              {singleJob.title}
            </h1>

            <div className="flex flex-wrap gap-2 mt-3">
              <Badge className="bg-blue-100 text-blue-700">
                {singleJob.position} Positions
              </Badge>
              <Badge className="bg-orange-100 text-orange-700">
                {singleJob.salary} LPA
              </Badge>
              <Badge className="bg-purple-100 text-purple-700">
                {singleJob.location}
              </Badge>
              <Badge className="bg-gray-200 text-black">
                {singleJob.jobType}
              </Badge>
            </div>
          </div>

          {/* ---- APPLY BUTTON ---- */}
          <Button
            disabled={isApplied}
            onClick={isApplied ? null : applyJobHandler}
            className={`px-6 py-2 rounded-xl w-full sm:w-auto text-white font-semibold
              ${
                isApplied
                  ? "bg-green-400 cursor-not-allowed text-black"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
          >
            {isApplied ? "Applied" : "Apply"}
          </Button>
        </div>

        {/* ------------ DESCRIPTION HEADING ------------ */}
        <h2 className="border-b border-gray-400 text-xl font-semibold mt-8 pb-2">
          Job Description
        </h2>

        {/* ------------ DETAILS SECTION ------------ */}
        <div className="mt-6 space-y-4">
          <Detail label="Role" value={singleJob.position} />
          <Detail label="Location" value={singleJob.location} />
          <Detail label="Salary" value={`${singleJob.salary} LPA`} />
          <Detail
            label="Experience"
            value={`${singleJob.experienceLevel} Years`}
          />
          <Detail label="Job Type" value={singleJob.jobType} />
          <Detail
            label="Total Applicants"
            value={singleJob.applications?.length}
          />
          <Detail
            label="Posted On"
            value={singleJob.createdAt?.split("T")[0]}
          />
          <Detail label="About Job" value={singleJob.description} />
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center">
    <p className="font-semibold w-40 text-gray-900">{label}:</p>
    <p className="text-gray-800">{value}</p>
  </div>
);

export default Description;
