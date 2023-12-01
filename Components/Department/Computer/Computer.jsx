import "./Computer.css";
import Image from "next/image";
import cetegoryImage from "../../../../app/Assets/Product/Diploma/book.webp";
import semester1 from "../../../../app/Assets/Product/Diploma/1st.png";
import ComputerSlideBook from "./ComputerSlideBook";

export const Computer = () => {
  return (
    <>
      <div className="diploma-engineer pt-[40px]">
        <div className="flex justify-center md:justify-start border-2 items-center gap-1 md:ms-5">
          <Image
            width={50}
            height={30}
            className="rounded-full "
            src={cetegoryImage}
            alt="diploma image"
          />
          <h1 className="text-cetegory-heading ps-1">Diploma Engineer</h1>
        </div>
        {/* --- category body--- */}

        <div className="semester-table flex md:grid md:grid-flow-col md:grid-cols-8 flex-wrap gap-2  md:justify-start justify-center items-center mt-10 md:px-10">
          {/* ------- category-card ------ */}
          <div className="grid justify-center cursor-pointer">
            <Image
              width={100}
              height={60}
              className="rounded-full border-2 object-cover"
              src={semester1}
              alt=""
            />
            <h1 className=" text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div className="grid justify-center cursor-pointer">
            <Image
              width={100}
              height={30}
              className="rounded-full border-2 object-cover"
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div className="grid justify-center cursor-pointer">
            <Image
              width={100}
              height={30}
              className="rounded-full border-2 object-cover"
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div className="grid justify-center cursor-pointer">
            <Image
              width={100}
              height={30}
              className="rounded-full border-2 object-cover"
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div className="grid justify-center cursor-pointer">
            <Image
              width={100}
              height={30}
              className="rounded-full border-2 object-cover"
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div className="grid justify-center cursor-pointer">
            <Image
              width={100}
              height={30}
              className="rounded-full border-2 object-cover"
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div className="grid justify-center cursor-pointer">
            <Image
              width={100}
              height={30}
              className="rounded-full border-2 object-cover"
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div className="grid justify-center cursor-pointer">
            <Image
              width={100}
              height={30}
              className="rounded-full border-2 object-cover"
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
        </div>

        <div className="mt-10">
          <ComputerSlideBook />
        </div>
      </div>
    </>
  );
};
