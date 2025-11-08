import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

const jobs = [
  {
    date: "23-12-2024",
    title: "Software Engineer",
    company: "Wipro Corporation",
    status: "Selected",
  },
  {
    date: "10-01-2025",
    title: "Frontend Developer",
    company: "Infosys Ltd.",
    status: "Pending",
  },
  {
    date: "05-02-2025",
    title: "Backend Developer",
    company: "TCS",
    status: "Interview",
  },
  {
    date: "12-03-2025",
    title: "Full Stack Developer",
    company: "Accenture",
    status: "Selected",
  },
  {
    date: "25-04-2025",
    title: "DevOps Engineer",
    company: "IBM",
    status: "Rejected",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "Selected":
      return "bg-green-100 text-green-700 border-green-400";
    case "Pending":
      return "bg-yellow-100 text-yellow-700 border-yellow-400";
    case "Interview":
      return "bg-blue-100 text-blue-700 border-blue-400";
    case "Rejected":
      return "bg-red-100 text-red-700 border-red-400";
    default:
      return "bg-gray-100 text-gray-700 border-gray-400";
  }
}

function AppliedJob() {
  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden sm:block bg-gray-50 rounded-2xl shadow-md overflow-hidden border border-gray-300">
        <Table>
          <TableCaption className="text-gray-500 font-medium py-2">
            Recent Applied Jobs
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-gray-800 font-semibold">Date</TableHead>
              <TableHead className="text-gray-800 font-semibold">Job Title</TableHead>
              <TableHead className="text-gray-800 font-semibold">Company</TableHead>
              <TableHead className="text-right text-gray-800 font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <TableCell>{job.date}</TableCell>
                <TableCell className="font-medium text-gray-800">{job.title}</TableCell>
                <TableCell className="text-gray-700">{job.company}</TableCell>
                <TableCell className="text-right">
                  <Badge className={`border px-3 py-1 ${getStatusColor(job.status)}`}>
                    {job.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden flex flex-col gap-4 mt-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl shadow-sm p-4 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-800">{job.title}</h2>
              <Badge className={`border text-xs px-2 py-1 ${getStatusColor(job.status)}`}>
                {job.status}
              </Badge>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-700">Company:</span> {job.company}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium text-gray-700">Date:</span> {job.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppliedJob;
