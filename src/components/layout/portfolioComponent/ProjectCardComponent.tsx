import * as React from "react";
import { Link } from "gatsby";

type ProjectCardComponentType = {
    key: number;
    filename: string;
    stack: string;
    name: string;
    date: {
        month: string;
        year: string;
    };
    logo: string;
};

const ProjectCardComponent = ({
    key,
    filename,
    stack,
    name,
    date,
    logo,
}: ProjectCardComponentType) => {
    return (
        <div className="project--list-card" key={key}>
            <Link to={`/postitem/?name=${filename}`}>
                <div className="project--list-card--stack">{stack}</div>
                <div className="project--list-card--name">{name}</div>
                <div className="project--list-card--bottom">
                    <div className="project--list-card--date">
                        <div className="project--list-card--month">
                            {date.month}
                        </div>
                        <div className="project--list-card--year">
                            {date.year}
                        </div>
                    </div>
                    <div className="project--list-card--logo">{logo}</div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCardComponent;
