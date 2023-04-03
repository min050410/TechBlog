import * as React from "react";
import { Element } from "react-scroll";
import { GITHUB_PROFILE_IMG_URL } from "../../../../constant/constant";

// hook
import { useScrollFadeIn } from "../../../../hooks";

// data
import portfolioAboutData from "./PortfolioAboutData";

const PortfolioAboutComponent = () => {
    return (
        <Element name="about">
            <div className="layout-center">
                <div className="about">
                    <div className="about--content">
                        <h1 {...useScrollFadeIn("right", 1, 0)}>
                            {portfolioAboutData.header}
                        </h1>
                        <p {...useScrollFadeIn("right", 1, 0)}>
                            {portfolioAboutData.line1}
                        </p>
                        <p {...useScrollFadeIn("right", 1, 0)}>
                            {portfolioAboutData.line2}
                            <br />
                            {portfolioAboutData.line3}
                        </p>
                    </div>
                    <img src={GITHUB_PROFILE_IMG_URL}></img>
                </div>
            </div>
        </Element>
    );
};

export default PortfolioAboutComponent;
