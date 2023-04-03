import * as React from "react";
import { Element } from "react-scroll";

// components
import PortfolioCertificateComponent from "./certificate";
import PortfolioPrizesComponent from "./prizes";
import PortfolioSkillsComponent from "./skills";
import PortfolioWorksComponent from "./works";

const PortfolioExperienceComponent = () => {
    return (
        <Element name="experience">
            <div className="experience">
                <div className="experience--content">
                    <PortfolioWorksComponent />
                    <PortfolioCertificateComponent />
                    <PortfolioPrizesComponent />
                    <PortfolioSkillsComponent />
                </div>
            </div>
        </Element>
    );
};

export default PortfolioExperienceComponent;
