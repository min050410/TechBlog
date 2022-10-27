import * as React from "react";
import { Link } from 'gatsby';
import { useState } from 'react';
import popularPostsData from './popularPostsData';

//styles
import '../../../styles/card.sass';

const PopularComponent: React.FC = () => {
    const [isHover, setHover] = useState<boolean>(false);
    const [ID, setID] = useState<number>(-1);

    const popular_list = popularPostsData.map((post, i) =>
    (
        <div className="card" key={i}>
            <div className="imgbox">
                <Link to={`postitem/?name=${post.filename}`} >
                    <img
                        src={require(`../../../../static/images/${post.img}.png`).default}
                        alt={post.img}
                        onMouseOver={function () {
                            setHover(true)
                            setID(post.id)
                        }}
                        onMouseOut={function () {
                            setHover(false)
                            setID(-1)
                        }}
                    />
                </Link>
            </div>
            <h3>{post.title}</h3>
        </div>
    ));

    return (
        <section>
            <div className="header">인기있는 블로그</div>
            <div className="container">
                {popular_list}
            </div>
        </section>
    )
}

export default PopularComponent;




