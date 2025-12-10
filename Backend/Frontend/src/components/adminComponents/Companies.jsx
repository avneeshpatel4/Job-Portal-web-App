import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";

import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";

const Companies = () => {
  const navigate = useNavigate();

  useGetAllCompanies();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);
  return (
  <div className="min-h-screen bg-gray-100">
    <Navbar />

    <div className="max-w-6xl mx-auto pt-10 px-4">
      {/* Card */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <Input
            className="w-full md:w-72 border-gray-400"
            placeholder="Filter by company name..."
            onChange={(e) => setInput(e.target.value)}
          />

          <Button
            className="w-full md:w-auto"
            onClick={() => navigate("/admin/companies/create")}
          >
            Add Company
          </Button>
        </div>

        {/* Table Wrapper */}
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm">
          <CompaniesTable />
        </div>
      </div>
    </div>
  </div>
);

};

export default Companies;