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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Edit2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const navigate = useNavigate();
  const [filterCompany, setFilterCompany] = useState(companies);

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) return true;

        return company.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });

    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  if (!companies) return <div>Loading...</div>;

  return (
    <div className="w-full overflow-x-auto">
      <div className="rounded-xl border border-gray-300 bg-white shadow-sm">
        <Table className="min-w-full">
          <TableCaption className="text-gray-500 text-sm pb-4">
            Your recently registered companies
          </TableCaption>

          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-semibold text-gray-700">
                Logo
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Company Name
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Date
              </TableHead>
              <TableHead className="text-right font-semibold text-gray-700">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filterCompany.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan="4"
                  className="text-center py=6 text-gray-500"
                >
                  No companies found
                </TableCell>
              </TableRow>
            ) : (
              filterCompany.map((company) => (
                <TableRow
                  key={company._id}
                  className="hover:bg-gray-50 transition-all border-b border-gray-200"
                >
                  <TableCell>
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={company.logo || "/default-logo.png"}
                        alt={`${company.name} logo`}
                        className="object-cover"
                      />
                    </Avatar>
                  </TableCell>

                  <TableCell className="font-medium text-gray-800">
                    {company.name}
                  </TableCell>

                  <TableCell className="text-gray-600">
                    {company.createdAt?.split("T")[0]}
                  </TableCell>

                  {/* ⭐ ONLY EDIT BUTTON — NO 3 DOTS ⭐ */}
                  <TableCell className="text-right">
                    <button
                      onClick={() =>
                        navigate(`/admin/companies/${company._id}`)
                      }
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-900 transition"
                    >
                      <Edit2 className="w-4 text-white" />
                    </button>
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

export default CompaniesTable;
