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

export const SingelBookInf = () => {
  return (
    <>
      <div>
        <div className="flex justify-start border-2 gap-5 gap-x-10 p-3">
          <div className=" img border-2 w-[40%]">
            <Image width={290} height={200} src={img01} alt="" />
          </div>

          <div className="content-details w-[100%]">
            <h1 className="DetailsBook-heading GT text-[46px] font-[400]  text-[#2c293b]">
              Democracy Awakening Notes on the{" "}
              <br className="hidden md:block" /> State of America
            </h1>

            <p className="pt-3 text-[20px] text-[#433782] IBM font-[600]">
              Subject Code : <span className="text-[#000000a7]">(6661)</span>{" "}
            </p>
            <p className="pt-3 text-[20px] IBM font-[600]">
              Company :{" "}
              <span className="font-[100] text-[#433782]">
                ( হক পাবলিকেশন )
              </span>{" "}
            </p>
            <p className="pt-3  text-[16px] IBM font-[600]">
              <span className="font-[100] text-[#020202] flex items-center">
                <span className="text-yellow-400 pe-2 flex text-[16px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </span>
                Rating |{" "}
                <span className="ps-1 underline cursor-pointer text-[#433782]">
                  16 Review
                </span>
              </span>{" "}
            </p>
            <p className="pt-3 text-[16px] font-extrabold flex items-center lign-hight-32 ">
              <FaRegCheckCircle className="text-[#1fa5a3] text-[20px] font-extrabold" />{" "}
              <span className="uppercase IBM text-[#1fa5a3] ps-1 lign-hight-32">
                Available
              </span>{" "}
            </p>
            <p className="pt-3 text-[35px] GT font-[600] text-[#000000bd]">
              Price : <span className="font-[600] text-[#433782]">130</span>{" "}
              <span className="text-[14px]">টাকা</span>
            </p>

            {/* ----- add to card ---- */}

            <div className="flex justify-center md:justify-start gap-2 mt-3">
              {" "}
              <button className="px-6 flex uppercase items-center gap-2 py-3 rounded-[20px] text-[16px] font-bold bg-[#BF1F49] text-white IBM ">
                <FaShoppingBag /> ADD TO CART
              </button>
              <button className="px-6 flex uppercase items-center gap-2 py-3 rounded-[20px] text-[16px] font-bold border-[2px] border-[#573BA3] text-[#573BA3] IBM ">
                <FaShoppingBag /> add to wishlist
              </button>
            </div>
          </div>
        </div>

        {/* ---- details part--- */}
        <div className="flex justify-start border-2 gap-5 gap-x-10 p-3 mt-5">
          <div className="product-part w-[40%]">
            <h1 className="text-[35px] text-center GT">Product Details</h1>
            <span>
              <p className="text-center">
                price <span>130</span>
              </p>
              <p className="text-center">
                Publisher <span>Ak Rohim</span>
              </p>
              <p className="text-center">
                Publish Date
                <span>1/09/2023</span>
              </p>
            </span>
          </div>
          <div className="discription w-[100%]">
            <h1 className="text-[35px] text-start GT">Description</h1>
            <p className="discription-paragrap text-[20px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis autem reprehenderit obcaecati soluta voluptas error,
              nostrum similique sunt aut? Ab mollitia nesciunt unde deleniti
              dolores consequuntur ullam inventore odio beatae eligendi optio
              nobis cupiditate dicta aliquid suscipit, laboriosam rerum officia,
              architecto itaque deserunt dolore veniam incidunt aliquam quae. In
              voluptatem aliquid eligendi reiciendis? Quasi vitae quibusdam
              dolor, velit id voluptatibus earum consequuntur ex ullam illum, ut
              sed non expedita. Quaerat, placeat eveniet vero asperiores velit
              nesciunt voluptate? Aliquam, architecto cupiditate tempora placeat
              obcaecati, magni nesciunt culpa voluptas esse, libero neque
              quisquam amet dignissimos eos provident ipsam possimus aperiam
              officiis dolorum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
