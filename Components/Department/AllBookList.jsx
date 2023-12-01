import React from "react";
import { ImageCard } from "./ImageCard";
import { FaChevronDown } from "react-icons/fa";

export const AllBookList = () => {
  return (
    <>
      <div className="flex justify-between items-center me-2 mt-10 mb-2">
        <h1 className=" md:ps-12 ps-2 text-[20px] text-[#563a9f] IBM font-bold underline">
          All Semester Book list
        </h1>
        <div>
          <div class="relative inline-flex self-center md:pe-12 ">
            <FaChevronDown className="absolute end-1 md:end-14 top-1" />
            <select class="ps-2 text-[16px] font-bold rounded border-2 border-purple-700 text-gray-600 h-6 px-4  bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>হক প্রকাশনি</option>
              <option>আর এস প্রকাশনি </option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 ">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </>
  );
};
