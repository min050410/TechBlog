import * as React from "react";
import { Link } from 'gatsby';
import popularPostsData, { popularPostsDataType } from './popularPostsData';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from "./nextArrow";

//styles
import '../../../styles/card.sass';

type pageStateType = {
    currentPage: number,
    posts: popularPostsDataType, 
    postsPerPage: number
}

const slickSettings = {
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
    // customPaging: (index: number) => {
    //     setPage((prev) => {
    //         return {
    //             ...prev,
    //             currentPage: index
    //         }
    //     })
    // }
};

const PopularComponent: React.FC = () => {

    const [page, setPage] = React.useState<pageStateType>({
        currentPage: 1,
        posts: [],
        postsPerPage: 6
    })

    React.useEffect(() => {
        setPage((prev) => {
            return {
                ...prev,
                posts: popularPostsData
            }
        })
    }, []);


    const pageCount = popularPostsData.length / 6;
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

    const popular_item_list = Array(pageCount).fill().map(() => (
        <div className="slider-item">
            <div className="container">
                {popular_list}
            </div>
        </div>
    ))

    return (
        <section>
            <div className="header">인기있는 블로그</div>
            <Slider {...slickSettings}>
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




