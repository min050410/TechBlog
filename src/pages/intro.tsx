import * as React from "react";
import { Element } from "react-scroll";

//components
import SEOComponent from "../components/common/seoComponent/SEOComponet";
import IntroHeaderComponent from "../components/common/headerComponent/IntroHeaderComponent";

//style
import "../styles/intro.sass";

// hook
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import PortfolioAboutComponent from "../components/layout/portfolioComponent/portfolioAboutComponent/PortfolioAboutComponent";
import PortfolioProjectComponent from "../components/layout/portfolioComponent/portfolioProjectComponent/PortfolioProjectComponent";
import PortfolioRefComponent from "../components/layout/portfolioComponent/portfolioRefComponent/PortfolioRefComponent";

const Intro = () => {
    return (
        <main>
            <SEOComponent title="Dev log | 소개" />
            <IntroHeaderComponent />
            <PortfolioRefComponent />
            <div className="portfolio">
                <PortfolioAboutComponent />
                <PortfolioProjectComponent />
                <Element name="experience">
                    <div className="experience">
                        <div className="experience--content">
                            <div
                                className="experience--works"
                                {...useScrollFadeIn("right", 1, 0)}
                            >
                                <h2>Experience</h2>
                                <p>
                                    <big>부산소프트웨어마이스터고</big> (2021.03
                                    ~ 2023.02)
                                </p>
                                <ul>
                                    <li>
                                        소프트웨어개발과 전공 졸업 예정입니다.
                                    </li>
                                    <li>
                                        마이스터 역량인증제 점수{" "}
                                        <big>272.4/1위</big>
                                    </li>
                                </ul>
                                <p>
                                    <big>
                                        <a>INSERT 동아리</a>
                                    </big>{" "}
                                    (2023.03 ~ 현재)
                                </p>
                                <p>
                                    부산소마고와 관련된 웹사이트를 유지보수 하는
                                    동아리 입니다.
                                </p>
                                <ul>
                                    <li>
                                        해당 동아리에서 <big>백엔드</big>를
                                        담당하고 있습니다.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="experience--certificates"
                                {...useScrollFadeIn("right", 1, 0)}
                            >
                                <h2>Certificates</h2>
                                <ul>
                                    <li>SQLD (SQL개발자)</li>
                                    <li>정보처리산업기사</li>
                                    <li>TOPCIT(ICT 역량지수평가) 수준 3</li>
                                    <li>AZ-900: Microsoft Azure (842점)</li>
                                    <li>컴퓨터활용능력 2급</li>
                                    <li>토익 745점</li>
                                </ul>
                            </div>
                            <div className="experience--prizes">
                                <h2 {...useScrollFadeIn("right", 1, 0)}>
                                    Prizes
                                </h2>
                                <p {...useScrollFadeIn("right", 1, 0)}>
                                    <big>2021 하계전공캠프 해커톤</big>{" "}
                                    (2021.02)
                                    <br />
                                    최우수상 - 부산소프트웨어마이스터고
                                </p>
                                <p {...useScrollFadeIn("right", 1, 0)}>
                                    <big>2022 1학기 해커톤</big> (2022.07)
                                    <br />
                                    우수상 - 부산소프트웨어마이스터고
                                </p>
                            </div>
                            <div
                                className="experience--skills"
                                {...useScrollFadeIn("right", 1, 0)}
                            >
                                <h2>Skills</h2>
                                <div className="skills--content">
                                    <div className="skill--list">
                                        <div className="skill--list-card">
                                            <div className="skill--list-card--header">
                                                <div className="skill-tag-red">
                                                    Web Backend
                                                </div>
                                                <div className="skill-count">
                                                    11
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="skill--list-card--value">
                                                        Kotlin, Java, Gradle
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="skill--list-card--value">
                                                        Spring Mvc, Spring Boot
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="skill--list-card">
                                            <div className="skill--list-card--header">
                                                <div className="skill-tag-yellow">
                                                    Web Frontend
                                                </div>
                                                <div className="skill-count">
                                                    7
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="skill--list-card--value">
                                                        React, TypeScript,
                                                        Next.js
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="skill--list-card--value">
                                                        React-Query, Recoil,
                                                        Redux
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="skill--list-card--value">
                                                        GitHub Actions
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="skill--list-card">
                                            <div className="skill--list-card--header">
                                                <div className="skill-tag-green">
                                                    Team Collaboration Tool
                                                </div>
                                                <div className="skill-count">
                                                    3
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="skill--list-card--value">
                                                        jira software
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="skill--list-card--value">
                                                        slack
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
            </div>
        </main>
    );
};

export default Intro;
