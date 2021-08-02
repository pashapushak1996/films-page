import React from "react";
import Slider from "react-slick";
import styled from "styled-components/macro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true
    }
    const IMAGES = '/images/'

    let imgPathArray = [
        `${ IMAGES }/slider-badag.jpg`,
        `${ IMAGES }/slider-badging.jpg`,
        `${ IMAGES }/slider-scale.jpg`,
        `${ IMAGES }/slider-scales.jpg`];

    return (
        <Carousel { ...settings }>
            { imgPathArray.map((imgPath) => <Wrap>
                <img src={ imgPath } alt=""/>
            </Wrap>) }
        </Carousel>
    );
};

export default ImgSlider;


const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white !important;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  cursor: pointer;
  outline: none;

  img {
    border: 4px solid transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 /69%) 0px 25px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;


    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

