import * as React from "react";
import { Link } from 'gatsby';
import popularPostsData, { popularPostsDataType } from './popularPostsData';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from "./nextArrow";

export const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
};

//styles
import '../../../styles/card.sass';

type pageStateType = {
    currentPage: number,
    posts: popularPostsDataType, 
    postsPerPage: number
}

const PopularComponent: React.FC = () => {

    const [page, setPage] = React.useState<pageStateType>({
        currentPage: 1,
        posts: [],
        postsPerPage: 5
    })

    React.useEffect(() => {
        setPage((prev) => {
            return {
                ...prev,
                posts: popularPostsData
            }
        })
    }, [])

    const popular_list = popularPostsData.map((post, i) =>
    (
        <div className="card" key={i}>
            <div className="imgbox">
                <Link to={`postitem/?name=${post.filename}`}>
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
            <Slider {...slickSettings}>
                <div className="slider-item">
                    <div className="container">
                        {popular_list}
                    </div>
                </div>
                <div className="slider-item">
                    <div className="container">
                        {popular_list}
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default PopularComponent;




