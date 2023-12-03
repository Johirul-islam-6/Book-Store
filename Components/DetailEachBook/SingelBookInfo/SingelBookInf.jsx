import Image from "next/image";
import React from "react";
import img01 from "../../../app/Assets/Product/Diploma/1st/one.webp";
import "./SingelBookDetail.css";
import {
  FaRegCheckCircle,
  FaShoppingBag,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { ReviewField } from "../Review/ReviewField";
import Link from "next/link";

export const SingelBookInf = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-center md:justify-start  gap-5 gap-x-10 p-3">
          <div className="  border-2 flex justify-center  md:w-[40%] py-5">
            <Image
              width={290}
              height={200}
              src={img01}
              className="md:w-[80%] w-[60%] h-[42vh] md:h-[55vh]"
              alt=""
            />
          </div>

          <div className="content-details w-[100%]">
            <h1 className="DetailsBook-heading GT text-[30px] md:text-[40px] font-[400]  text-[#2c293b]">
              Democracy Awakening Notes on the{" "}
              <br className="hidden md:block" /> State of America
            </h1>

            <p className="pt-3 text-[16px] md:text-[18px] text-[#433782] IBM font-[600]">
              Subject Code : <span className="text-[#000000a7]">(6661)</span>{" "}
            </p>
            <p className="pt-3 text-[18px] IBM font-[600]">
              Company :{" "}
              <span className="font-[100] text-[#433782]">
                ( হক পাবলিকেশন )
              </span>{" "}
            </p>
            <p className="pt-3 text-[16px]  md:text-[16px] IBM font-[600]">
              <span className="font-[100] text-[#020202] flex items-center">
                <span className="text-yellow-400 pe-2 flex text-[14px] md:text-[16px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </span>
                Rating |{" "}
                <Link
                  href="#review"
                  className="ps-1 underline cursor-pointer text-[#433782]"
                >
                  16 Review
                </Link>
              </span>{" "}
            </p>
            <p className="pt-3 text-[16px] font-extrabold flex items-center lign-hight-32 ">
              <FaRegCheckCircle className="text-[#1fa5a3] text-[20px] font-extrabold" />{" "}
              <span className="uppercase IBM text-[#1fa5a3] ps-1 lign-hight-32">
                Available
              </span>{" "}
            </p>
            <p className="pt-3 text-[25px] md:text-[28px] GT font-[600] text-[#000000bd]">
              Price : <span className="font-[600] text-[#433782]">130</span>{" "}
              <span className="text-[14px]">টাকা</span>
            </p>

            {/* ----- add to card ---- */}

            <div className="flex justify-start gap-2 mt-5">
              {" "}
              <button className="px-2 w-[140px] md:w-[180px] h-[50px] justify-center flex uppercase items-center gap-2  rounded-[5px] text-[14px] md:text-[16px] font-bold  bg-[#BF1F49] text-white IBM ">
                <FaShoppingBag /> ADD TO CART
              </button>
              <button className="px-2 w-[180px] md:w-[240px]  h-[50px] flex uppercase items-center justify-center gap-2 py-3 rounded-[5px] text-[14px] md:text-[16px] font-bold border-[2px] border-[#573BA3] text-[#573BA3] IBM ">
                <FaShoppingBag /> add to wishlist
              </button>
            </div>
          </div>
        </div>

        {/* ---- details part--- */}
        <div className="flex lex-col md:flex-row justify-start gap-5 gap-x-10 p-3 mt-5">
          <div className="product-part md:block hidden w-[40%]"></div>
          <div className="discription w-[100%] ">
            <h1 className="text-[35px]  GT">Product Details</h1>
            <span>
              <p className="">
                price <span>130</span>
              </p>
              <p className="">
                Publisher <span>Ak Rohim</span>
              </p>
              <p className="">
                Publish Date
                <span>1/09/2023</span>
              </p>
            </span>
            <h1 className="text-[35px] text-start GT pt-5">Description</h1>
            <p className="discription-paragrap text-[20px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis autem reprehenderit obcaecati soluta voluptas error,
              nostrum similique sunt aut? Ab mollitia nesciunt unde deleniti
              dolores consequuntur ullam inventore odio beatae eligendi optio
              nobis cupiditate dicta aliquid suscipit more..
            </p>

            <h1
              id="review"
              className="text-[25px] text-white text-center GT mt-5 bg-[#563a9f] border-2"
            >
              All Review
            </h1>
            {/* -------------- review field ------------ */}

            <div className="block h-[500px] w-[100%]  ">
              <div className="scrollbar overflow-y-auto h-[489px] flex border-2">
                <div className=" block">
                  <ReviewField />
                  <ReviewField />
                  <ReviewField />
                  <ReviewField />
                  <ReviewField />
                  <ReviewField />
                  <ReviewField />
                  <ReviewField />
                </div>
              </div>
            </div>

            <button className="bg-[#563a9f] text-white flex justify-center w-[120px] py-2 rounded-md mx-auto mt-3">
              Write Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
