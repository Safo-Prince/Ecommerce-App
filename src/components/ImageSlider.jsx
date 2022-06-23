import React, { useState } from "react";
import { SliderData } from "./SlideData";
import FaArrowAltCircleLeft from "@meronex/icons/fa/FaArrowAltCircleLeft";
import FaArrowAltCircleRight from "@meronex/icons/fa/FaArrowAltCircleRight";
import "../css/ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const numberOfImage = length - 1;
  const nextSlide = () => {
    setCurrent(current === numberOfImage ? 0 : current + 1);
    console.log(current);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? numberOfImage : current - 1);
  };
  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="slider__arrowLeft" onClick={prevSlide} />
      <FaArrowAltCircleRight
        className="slider__arrowRight"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide--active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                width="1680 "
                height="700"
                className="slider__image"
                alt="Link is broken"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
