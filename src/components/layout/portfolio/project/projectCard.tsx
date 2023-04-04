import * as React from "react";
import { Link } from "gatsby";

type ProjectCardComponentType = {
    filename: string;
    stack: string;
    name: string;
    date: {
        month: string;
        year: string;
    };
};

const ProjectCardComponent = ({
    filename,
    stack,
    name,
    date,
}: ProjectCardComponentType) => {
    return (
        <Link to={`/postitem/?name=${filename}`} className="project--list-card">
            <div className="project--list-card--stack">{stack}</div>
            <div className="project--list-card--name">{name}</div>
            <div className="project--list-card--bottom">
                <div className="project--list-card--date">
                    <div className="project--list-card--month">
                        {date.month}
                    </div>
                    <div className="project--list-card--year">{date.year}</div>
                </div>
                <div className="project--list-card--logo">
                    <img src="/images/link.png"></img>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCardComponent;
