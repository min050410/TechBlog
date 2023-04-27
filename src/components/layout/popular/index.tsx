import * as React from "react";
import popularPostsData from "./popularPostsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    dotsClass: "slick-dots",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            },
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
    ],
};

//styles
import "../../../styles/card.sass";
import PopularCardComponent from "./popularCard";

const PopularComponent: React.FC = () => {
    return (
        <section>
            <div className="header">인기있는 블로그</div>
            <div className="slider-item">
                <Slider {...slickSettings}>
                    {popularPostsData.map((popularPost) => (
                        <PopularCardComponent
                            id={popularPost.id}
                            filename={popularPost.filename}
                            imgLineOne={popularPost.imgLineOne}
                            imgLineTwo={popularPost.imgLineTwo}
                            title={popularPost.title}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PopularComponent;
