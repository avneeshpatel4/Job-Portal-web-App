import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ChevronDown, Filter as FilterIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "frontend",
      "backend",
      "mobile",
      "desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [openSection, setOpenSection] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const dispatch = useDispatch();
  const handleToggle = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-gray-200 hover:bg-gray-300 rounded-xl shadow-md border border-gray-100 p-4 sm:p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-5">
        <h1 className="font-bold text-lg sm:text-xl flex items-center gap-2">
          <FilterIcon className="w-5 h-5 text-[#7209b7]" />
          Filter Jobs
        </h1>

        {/* Mobile Toggle */}
        <button
          className="block md:hidden text-sm font-medium text-[#7209b7] border border-[#7209b7] rounded-md px-3 py-1"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide" : "Show"}
        </button>
      </div>

      {/* Filter Options */}
      <div
        className={`transition-all duration-300 ${
          showFilters ? "block" : "hidden md:block"
        }`}
      >
        <RadioGroup
          value={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
        >
          {filterData.map((data, index) => (
            <div key={index} className="border-b border-gray-100 pb-3 mb-3">
              {/* Section Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h2 className="font-semibold text-gray-800 text-base sm:text-lg">
                  {data.filterType}
                </h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                    openSection === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Section Items */}
              <div
                className={`mt-2 pl-1 transition-all duration-300 overflow-hidden ${
                  openSection === index ? "max-h-96" : "max-h-0"
                }`}
              >
                {data.array.map((item, i) => {
                  const id = `${data.filterType}-${i}`;
                  return (
                    <div key={id} className="flex items-center space-x-2 my-2">
                      <RadioGroupItem value={item} id={id} />
                      <label
                        htmlFor={id}
                        className="text-gray-600 text-sm sm:text-base cursor-pointer"
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default Filter;
