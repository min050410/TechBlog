import * as React from "react";

// hook
import useScrollFadeIn from "../../../../../hooks/useScrollFadeIn";
import portfolioSkillData from "./portfolioSkillData";

const PortfolioSkillsComponent = () => {
    return (
        <div className="experience--skills" {...useScrollFadeIn("right", 1, 0)}>
            <h2>Skills</h2>
            <div className="skills--content">
                <div className="skill--list">
                    {portfolioSkillData.map((portfolioSkill) => (
                        <div className="skill--list-card">
                            <div className="skill--list-card--header">
                                <div className={portfolioSkill.tagColor}>
                                    {portfolioSkill.stack}
                                </div>
                                <div className="skill-count">
                                    {portfolioSkill.count}
                                </div>
                            </div>
                            <ul>
                                {portfolioSkill.values.map(
                                    (portfolioSkillValue) => (
                                        <li>
                                            <div className="skill--list-card--value">
                                                {portfolioSkillValue}
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSkillsComponent;
