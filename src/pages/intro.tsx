import * as React from "react";

//components
import SEOComponent from "../components/common/seoComponent/SEOComponet";
import IntroHeaderComponent from "../components/common/headerComponent/IntroHeaderComponent";

//style
import "../styles/intro.sass";

// hook
import PortfolioAboutComponent from "../components/layout/portfolioComponent/portfolioAboutComponent/PortfolioAboutComponent";
import PortfolioProjectComponent from "../components/layout/portfolioComponent/portfolioProjectComponent/PortfolioProjectComponent";
import PortfolioRefComponent from "../components/layout/portfolioComponent/portfolioRefComponent/PortfolioRefComponent";
import PortfolioExperienceComponent from "../components/layout/portfolioComponent/portfolioExperienceComponent/PortfolioExperienceComponent";

const Intro = () => {
    return (
        <main>
            <SEOComponent title="Dev log | 소개" />
            <IntroHeaderComponent />
            <PortfolioRefComponent />
            <div className="portfolio">
                <PortfolioAboutComponent />
                <PortfolioProjectComponent />
                <PortfolioExperienceComponent />
            </div>
        </main>
    );
};

export default Intro;
