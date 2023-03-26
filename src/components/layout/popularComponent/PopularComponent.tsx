import * as React from "react";
import { Link } from "gatsby";
import popularPostsData from "./popularPostsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const slickSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 6,
    variableWidth: true,
};

//styles
import "../../../styles/card.sass";

const PopularComponent: React.FC = () => {
    const popular_list = popularPostsData.map((post, i) => (
        <div className="card" key={i}>
            <div className="imgbox">
                <Link to={`postitem/?name=${post.filename}`}>
                    <img
                        src={
                            require(`../../../../static/gradients/${post.id}.png`)
                                .default
                        }
                        alt={post.imgLineTwo}
                    />
                    <div className="recent-img-text-one">
                        <p>{post.imgLineOne}</p>
                    </div>
                    <div className="recent-img-text-two">
                        <p>{post.imgLineTwo}</p>
                    </div>
                </Link>
            </div>
            <h3>{post.title}</h3>
        </div>
    ));

    return (
        <section>
            <div className="header">인기있는 블로그</div>
            <div className="slider-item">
                <Slider {...slickSettings}>{popular_list}</Slider>
            </div>
        </section>
    );
};

export default PopularComponent;
