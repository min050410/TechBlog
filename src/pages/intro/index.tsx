import * as React from "react";

//components
import SEOComponent from "../../components/common/seo";
import IntroHeaderComponent from "../../components/common/header/IntroHeaderComponent";

//style
import "../../styles/intro.sass";

// hook
import PortfolioAboutComponent from "../../components/layout/portfolio/about";
import PortfolioProjectComponent from "../../components/layout/portfolio/project";
import PortfolioRefComponent from "../../components/layout/portfolio/ref";
import PortfolioExperienceComponent from "../../components/layout/portfolio/experience";

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
