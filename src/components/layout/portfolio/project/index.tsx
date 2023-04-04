import * as React from "react";
import { Element } from "react-scroll";

// hook
import ProjectCardComponent from "./ProjectCard";

// data
import projectCardsData from "./projectCardData";

const PortfolioProjectComponent = () => {
    return (
        <Element name="project">
            <div className="project">
                <div className="project--content">
                    <h1>Project</h1>
                    <div className="project--list">
                        {projectCardsData.map((projectCard) => (
                            <ProjectCardComponent
                                key={projectCard.id}
                                filename={projectCard.filename}
                                stack={projectCard.stack}
                                name={projectCard.name}
                                date={projectCard.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default PortfolioProjectComponent;
