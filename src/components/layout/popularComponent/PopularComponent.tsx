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
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 6,
};

//styles
import "../../../styles/card.sass";
import PopularCardListComponent from "./PopularCardListComponent";

const PopularComponent: React.FC = () => {
    return (
        <section>
            <div className="header">인기있는 블로그</div>
            <div className="slider-item">
                <Slider {...slickSettings}>
                    {popularPostsData.map((popularPost) => (
                        <PopularCardListComponent
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
