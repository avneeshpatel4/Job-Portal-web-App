import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

function CompanyCreate() {
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        { companyName },
        {
          header: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Main Container */}
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 border border-gray-700 rounded-xl shadow-md">
        {/* Heading */}
        <h1 className="font-bold text-3xl">Create Company</h1>
        <p className="text-gray-600 mt-1 mb-6">
          Register a new company to manage jobs, listings, and more.
        </p>

        {/* Input Section */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Company Name</Label>
          <Input
            type="text"
            placeholder="Enter company name"
            className="h-12 text-base border border-gray-700"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
            className="h-11 px-6 border border-gray-700"
          >
            Cancel
          </Button>

          <Button
            onClick={registerNewCompany}
            className="h-11 px-6 bg-blue-600 hover:bg-blue-700 transition"
          >
            Continue
          </Button>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="mb-10"></div>
    </div>
  );
}

export default CompanyCreate;
