import React from "react";
import "../../css/main.css";

//Swiperjs css import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Hero from "./Hero";
import Swpier from "./Swpier";
import Create from "./Create";
import Top from "./Top";


const Home = () => {
  return (
    <React.Fragment className=" black_bg z-0">
      <Hero />
      <Swpier />
      <Top />
      <Create />
     
    </React.Fragment>
  );
};

export default Home;
