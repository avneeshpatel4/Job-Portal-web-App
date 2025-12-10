import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import { setSearchJobByText } from "@/redux/jobSlice";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-4">
        {/* Top Section */}
        <div className="bg-gray-100 shadow-md rounded-xl p-5 border border-gray-700">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <Input
              className="sm:w-1/2 w-full"
              placeholder="Filter by Name & Jobs"
              onChange={(e) => setInput(e.target.value)}
            />

            <Button
              className="w-full sm:w-fit"
              onClick={() => navigate("/admin/jobs/create")}
            >
              Post New Job
            </Button>
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-gray-100 shadow-lg rounded-xl mt-8 p-6 border border-gray-700">
          <AdminJobsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;
