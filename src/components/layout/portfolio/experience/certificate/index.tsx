import * as React from "react";

// hook
import { useScrollFadeIn } from "../../../../../hooks";

// data
import portfolioCertificateData from "./portfolioCertificateData";

const PortfolioCertificateComponent = () => {
    return (
        <div
            className="experience--certificates"
            {...useScrollFadeIn("right", 1, 0)}
        >
            <h2>Certificates</h2>
            <ul>
                {portfolioCertificateData.map((portfolioCertificate) => (
                    <li>{portfolioCertificate.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioCertificateComponent;
