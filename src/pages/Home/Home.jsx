import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Categories />
      <FeaturedProducts type="featured " />
      <FeaturedProducts type="trending " />
    </div>
  );
};

export default Home;
