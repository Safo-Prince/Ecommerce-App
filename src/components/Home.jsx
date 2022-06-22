import React from "react";
import ImageSlider from "./ImageSlider";
import Product from "./Product";
import { SliderData } from "./SlideData";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <ImageSlider slides={SliderData} />
        <Product />
      </div>
    </>
  );
};

export default Home;
