import * as React from "react";
import { Link } from 'gatsby';
import recentPostsData from './recentPostsData'

// hooks
import { useSearchParam } from "../../../hooks/useSearchParam";

//styles
import '../../../styles/recent.sass'

const RecentComponent = () => {
    const filter = useSearchParam("f");

    //filter 함수를 통한 filtering 후 map
    const recent_list = recentPostsData.filter(word => word.filter == filter || filter === null).reverse().map((post, i) =>
    (
        <div className="recent_content" key={i}>
            <Link to={`postitem/?name=${post.filename}`}>
                <div className="margin_post">
                    <div className="post">
                        <div className="left">
                            {/* <Link to="postitem/" state={{ myProp: post.filename }}> */}
                            <div className="imgbox">
                                <img
                                    src={require(`../../../../static/gradients/${post.id}.png`).default}
                                    alt={post.imgLineTwo}
                                />
                                <div className="img-text-one">
                                    <p>{post.imgLineOne}</p>
                                </div>
                                <div className="img-text-two">
                                    <p>{post.imgLineTwo}</p>
                                </div>
                            </div>
                            <div id="text_group">
                                <h3>{post.title}</h3>
                                <div>{post.date}</div>
                            </div>
                        </div>
                        <div className="tag">
                            {(post.tag) && <span>{post.tag}</span>}
                            {(post.tag2) && <span>{post.tag2}</span>}
                            {(post.tag3) && <span>{post.tag3}</span>}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    ));
    return (
        <section>
            <div className="header_wrap">
                <div className="header">최근 블로그</div>
                {filter && <span className="filter-key">{filter}</span>}
            </div>
            <div className="horizontal_container">
                {recent_list}
            </div>
        </section>
    )
}

export default RecentComponent;




