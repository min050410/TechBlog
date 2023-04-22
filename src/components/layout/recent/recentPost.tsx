import * as React from "react";
import { Link } from "gatsby";

const RecentPostComponent = ({
    id,
    filename,
    imgLineOne,
    imgLineTwo,
    title,
    date,
    tag,
    tag2,
    tag3,
}: RecentPostComponentType) => {
    <div className="recent_content" key={i}>
        <Link to={`postitem/?name=${post.filename}`}>
            <div className="margin_post">
                <div className="post">
                    <div className="left">
                        <div className="imgbox">
                            <img
                                src={
                                    require(`../../../../static/gradients/${post.id}.png`)
                                        .default
                                }
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
                        {post.tag && <span>{post.tag}</span>}
                        {post.tag2 && <span>{post.tag2}</span>}
                        {post.tag3 && <span>{post.tag3}</span>}
                    </div>
                </div>
            </div>
        </Link>
    </div>;
};

export default RecentPostComponent;
