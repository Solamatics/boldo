import React, { Component } from "react";
import Slider from "react-slick";
import PrestoImg from "../assets/presto.png";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
      backgroundColor: "red",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={PrestoImg} alt="" />
          </div>
          <div>
            <img src={PrestoImg} alt="" />
          </div>
          <div>
            <img src={PrestoImg} alt="" />
          </div>
          <div>
            <img src={PrestoImg} alt="" />
          </div>
          <div>
            <img src={PrestoImg} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
