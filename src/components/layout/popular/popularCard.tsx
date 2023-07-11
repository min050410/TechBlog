import * as React from "react";
import { Link } from "gatsby";

type PopularCardComponentType = {
    id: number;
    filename: string;
    imgLineOne: string;
    imgLineTwo: string;
    title: string;
};

const PopularCardComponent = ({
    id,
    filename,
    imgLineOne,
    imgLineTwo,
    title,
}: PopularCardComponentType) => (
    <div className="card" key={id}>
        <div className="imgbox">
            <Link to={`postitem/?name=${filename}`}>
                <img
                    src={
                        require(`../../../../static/gradients/${id}.png`)
                            .default
                    }
                    alt={imgLineTwo}
                />
                <div className="recent-img-text-one">
                    <p>{imgLineOne}</p>
                </div>
                <div className="recent-img-text-two">
                    <p>{imgLineTwo}</p>
                </div>
            </Link>
        </div>
        <div className="card--title">{title}</div>
    </div>
);

export default PopularCardComponent;
