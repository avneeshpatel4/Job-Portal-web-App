import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mern Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="px-4 my-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
          Categories
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Explore our extensive job market.
        </p>
      </div>

      <Carousel className="w-full max-w-2xl mx-auto">
        <CarouselContent>
          {Category.map((category, index) => (
            <CarouselItem
              key={index}
              className="basis-3/4 sm:basis-1/2 lg:basis-1/3 px-2"
            >
              <Button
                onClick={() => searchjobHandler(category)}
                className="w-full py-3 text-sm sm:text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                {category}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default Categories;
