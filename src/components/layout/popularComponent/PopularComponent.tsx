import * as React from "react";
import { Link } from 'gatsby';
import popularPostsData from './popularPostsData';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//styles
import '../../../styles/card.sass';

const PopularComponent: React.FC = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        // prevArrow: <SamplePrevArrow />
    };

    const popular_list = popularPostsData.map((post, i) =>
    (
        <div className="card" key={i}>
            <div className="imgbox">
                <Link to={`postitem/?name=${post.filename}`} >
                    <img
                        src={require(`../../../../static/gradients/${post.id}.png`).default}
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
            <Slider {...settings}>
                <div className="slider-item">
                    <div className="container">
                        {popular_list}
                    </div>
                </div>
                <div>
                    <div className="container">
                        {popular_list}
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default PopularComponent;




