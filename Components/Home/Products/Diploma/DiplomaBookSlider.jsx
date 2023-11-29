"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { ImageCard } from "./ImageCard";
import "./Image.css";

export default class DiplomaBookSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div className="px-10">
        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}
