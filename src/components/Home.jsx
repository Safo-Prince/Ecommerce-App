import React from "react";
import Card from "./Card";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import Product from "./Product";
import { SliderData } from "./SlideData";

const Home = () => {
  return (
    <>
      <ImageSlider slides={SliderData} />
    </>
  );
};

export default Home;
