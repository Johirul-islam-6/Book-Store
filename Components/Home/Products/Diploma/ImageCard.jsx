import React from "react";
import "./Image.css";
import Image from "next/image";
import book1 from "../../../../app/Assets/Product/Diploma/book.jpg";

export const ImageCard = () => {
  return (
    <>
      <div class="card">
        <Image
          width={250}
          height={20}
          className="card-image absolute top-1 p-5"
          src={book1}
          alt=""
        />

        <div class="content ">
          <h2 class="title">Mountain View</h2>
          <p class="copy">
            Check out all of these gorgeous mountain trips with beautiful views
            of, you guessed it, the mountains
          </p>
          <button class="btn">View Trips</button>
        </div>
      </div>
    </>
  );
};
