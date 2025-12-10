import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const { companies } = useSelector((store) => store.company);
  const { allAdminJobs = [], searchJobByText = "" } = useSelector(
    (store) => store.jobs
  );

  const navigate = useNavigate();

  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    if (!Array.isArray(allAdminJobs)) return;

    const filtered = allAdminJobs.filter((job) => {
      if (!searchJobByText) return true;

      const titleMatch = job.title
        ?.toLowerCase()
        .includes(searchJobByText.toLowerCase());

      const companyMatch = job.company?.name
        ?.toLowerCase()
        .includes(searchJobByText.toLowerCase());

      return titleMatch || companyMatch;
    });

    setFilterJobs(filtered);
  }, [allAdminJobs, searchJobByText]);

  if (!companies) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-md">
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg border">
        <Table className="min-w-full">
          <TableCaption className="text-gray-500 text-sm py-3">
            Your Recently Posted Jobs
          </TableCaption>

          <TableHeader className="bg-gray-200 border-b">
            <TableRow>
              <TableHead className="font-semibold text-gray-700">
                Company Name
              </TableHead>
              <TableHead className="font-semibold text-gray-700">Role</TableHead>
              <TableHead className="font-semibold text-gray-700">Date</TableHead>
              <TableHead className="text-right font-semibold text-gray-700">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filterJobs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan="4"
                  className="text-center py-6 bg-gray-50 text-gray-500 italic"
                >
                  No Jobs Found
                </TableCell>
              </TableRow>
            ) : (
              filterJobs.map((job) => (
                <TableRow
                  key={job._id}
                  className="hover:bg-gray-50 transition-all cursor-pointer border-b"
                >
                  <TableCell className="py-4 text-gray-800 font-medium">
                    {job?.company?.name}
                  </TableCell>

                  <TableCell className="py-4 text-gray-600">
                    {job.title}
                  </TableCell>

                  <TableCell className="py-4 text-gray-500">
                    {job.createdAt?.split("T")[0]}
                  </TableCell>

                  <TableCell className="text-right py-4">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal className="cursor-pointer hover:text-gray-900 transition" />
                      </PopoverTrigger>

                      <PopoverContent className="w-40 bg-white shadow-xl rounded-lg border p-2">
                        <div
                          onClick={() => navigate(`/admin/companies/${job._id}`)}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                        >
                          <Edit2 className="w-4 text-blue-600" />
                          <span>Edit</span>
                        </div>

                        <hr className="my-1 border-gray-300" />

                        <div
                          onClick={() =>
                            navigate(`/admin/jobs/${job._id}/applicants`)
                          }
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                        >
                          <Eye className="w-4 text-green-600" />
                          <span>Applicants</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminJobsTable;
