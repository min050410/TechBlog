import * as React from "react";
import { Element } from "react-scroll";

// components
import PortfolioCertificateComponent from "./portfolioCertificateComponent/PortfolioCertificateComponent";
import PortfolioPrizesComponent from "./portfolioPrizesComponent/PortfolioPrizesComponent";
import PortfolioSkillsComponent from "./portfolioSkillsComponent/PortfolioSkillsComponent";
import PortfolioWorksComponent from "./portfolioWorksComponent/PortfolioWorksComponent";

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
