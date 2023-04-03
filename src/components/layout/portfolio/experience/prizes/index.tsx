import * as React from "react";

// hook
import { useScrollFadeIn } from "../../../../../hooks";

// data
import portfolioPrizeData from "./PortfolioPrizeData";

const PortfolioPrizesComponent = () => {
    return (
        <div className="experience--prizes">
            <h2 {...useScrollFadeIn("right", 1, 0)}>Prizes</h2>
            {portfolioPrizeData.map((portfolioPrize) => (
                <p {...useScrollFadeIn("right", 1, 0)}>
                    <big>{portfolioPrize.name}</big> {portfolioPrize.date}
                    <br />
                    {portfolioPrize.summary}
                </p>
            ))}
        </div>
    );
};

export default PortfolioPrizesComponent;
