import React from "react";
import Card from "./Card";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import Product from "./Product";
import { SliderData } from "./SlideData";

const Home = () => {
  return (
    <div>
      <Header />
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default Home;
