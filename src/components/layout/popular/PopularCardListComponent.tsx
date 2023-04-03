import * as React from "react";
import { Link } from "gatsby";

type PopularCardListComponentType = {
    id: number;
    filename: string;
    imgLineOne: string;
    imgLineTwo: string;
    title: string;
};

const PopularCardListComponent = ({
    id,
    filename,
    imgLineOne,
    imgLineTwo,
    title,
}: PopularCardListComponentType) => {
    return (
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
            <h3>{title}</h3>
        </div>
    );
};

export default PopularCardListComponent;
