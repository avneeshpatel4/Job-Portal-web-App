import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Button } from "../ui/button";

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

function Categories() {
  return (
    <div>
        <div>
            <h1 className="text-2xl font-bold text-center text-blue-600">Categories</h1>
            <p className="text-center text-gray-600">Explore our extensive job market</p>
        </div>
      <Carousel className="w-full max-w-xl mx-auto my-5 ">
        <CarouselContent>
          {Category.map((category, index) => {
            return (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
                <Button key={index}>{category}</Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="sm:mx-48 md:mx-1"/>
        <CarouselNext className="sm:mx-48 md:mx-1"/>
      </Carousel>
    </div>
  );
}

export default Categories;
