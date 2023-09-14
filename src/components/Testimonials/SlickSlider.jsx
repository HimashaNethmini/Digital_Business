import { testimonialsData } from "@/src/utils/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import './Testimonials.css';

const SlickSlider = () => {

    const settings = {
        dots: true,
        inifinite: true,
        speed: 1000,
        slidesToShow: 3,  /* 3 should display at once */
        slidesToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    inifinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    <div>
      <Slider {...settings}>
        {testimonialsData.map((comment, i) => (
          <div key={i} className="comment">

            {/*upper side  - " and comment - */}
            <div className="c-content">
              <Image
                src={"/apos.svg"}
                className="apos-slider"
                alt="people's comment"
                width={40}
                height={30}
              />
              <span>{comment.comment}</span>
            </div>

            {/* low side - name */}
            <div className="c-info">
              <div className="c-avatar">
                <div className="c-person">
                  <span>{comment.name}</span>
                  <span>{comment.profession}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
