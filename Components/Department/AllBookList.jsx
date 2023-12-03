import React from "react";
import { ImageCard } from "./ImageCard";
import { FaChevronDown } from "react-icons/fa";
import { GoodStudentPackage } from "./GoodStudentPackage";

export const AllBookList = ({ SemesterNumber }) => {
  return (
    <>
      <div className="flex justify-between items-center me-2 mt-12 mb-2">
        <h1 className=" md:ps-12 ps-2 text-[20px] text-[#563a9f] IBM font-bold underline">
          {SemesterNumber} Semester Book list
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
      {SemesterNumber !== "all" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 p-3 md:px-10 mt-5 bg-[#F4F4F4] py-4">
            <GoodStudentPackage />
            <GoodStudentPackage />
          </div>
        </>
      )}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-2">
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
