import * as React from "react";

// hook
import useScrollFadeIn from "../../../../../hooks/useScrollFadeIn";

const PortfolioWorksComponent = () => {
    return (
        <div className="experience--works" {...useScrollFadeIn("right", 1, 0)}>
            <h2>Experience</h2>
            <p>
                <big>부산소프트웨어마이스터고</big> (2021.03 ~ 2023.02)
            </p>
            <ul>
                <li>소프트웨어개발과 전공 졸업 예정입니다.</li>
                <li>
                    마이스터 역량인증제 점수 <big>272.4/1위</big>
                </li>
            </ul>
            <p>
                <big>
                    <a>INSERT 동아리</a>
                </big>{" "}
                (2023.03 ~ 현재)
            </p>
            <p>부산소마고와 관련된 웹사이트를 유지보수 하는 동아리 입니다.</p>
            <ul>
                <li>
                    해당 동아리에서 <big>백엔드</big>를 담당하고 있습니다.
                </li>
            </ul>
        </div>
    );
};

export default PortfolioWorksComponent;
