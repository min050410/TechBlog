import * as React from "react";
import { EMAIL_URL, GITHUB_PROFILE_URL } from "../../../../constant/constant";

const PortfolioRefComponent = () => {
    return (
        <div className="ref">
            <a href={GITHUB_PROFILE_URL}>
                <div>
                    <img src="/images/github.png"></img>
                </div>
            </a>
            <a href={EMAIL_URL}>
                <div>
                    <img src="/images/email.png"></img>
                </div>
            </a>
        </div>
    );
};

export default PortfolioRefComponent;
