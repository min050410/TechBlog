import * as React from "react";
import { Link } from "gatsby";

type RecentPostComponentType = {
    id: number;
    filename: string;
    imgLineOne: string;
    imgLineTwo: string;
    title: string;
    date: string;
    tag: string;
    tag2: string;
    tag3: string;
};

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
}: RecentPostComponentType) => (
    <div className="recent_content" key={id}>
        <Link to={`postitem/?name=${filename}`}>
            <div className="margin_post">
                <div className="post">
                    <div className="left">
                        <div className="imgbox">
                            <img
                                src={
                                    require(`../../../../static/gradients/${id}.png`)
                                        .default
                                }
                                alt={imgLineTwo}
                            />
                            <div className="img-text-one">
                                <p>{imgLineOne}</p>
                            </div>
                            <div className="img-text-two">
                                <p>{imgLineTwo}</p>
                            </div>
                        </div>
                        <div id="text_group">
                            <h3>{title}</h3>
                            <div>{date}</div>
                        </div>
                    </div>
                    <div className="tag">
                        {tag && <span>{tag}</span>}
                        {tag2 && <span>{tag2}</span>}
                        {tag3 && <span>{tag3}</span>}
                    </div>
                </div>
            </div>
        </Link>
    </div>
);

export default RecentPostComponent;
