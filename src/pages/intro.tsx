import * as React from "react";
import { Element } from "react-scroll";

//components
import SEOComponent from "../components/common/seoComponent/SEOComponet";
import IntroHeaderComponent from "../components/common/headerComponent/IntroHeaderComponent";

//style
import "../styles/intro.sass";
import ProjectCardComponent from "../components/layout/portfolioComponent/ProjectCardComponent";
import projectCardsData from "../components/layout/portfolioComponent/projectCardData";
import { EMAIL_URL, GITHUB_PROFILE_URL } from "../constant/constant";

const Intro = () => {
    return (
        <main>
            <SEOComponent title="Dev log | 소개" />
            <IntroHeaderComponent />
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
            <div className="portfolio">
                <Element name="about">
                    <div className="layout-center">
                        <div className="about">
                            <div className="about--content">
                                <h1>👋 안녕하세요 김영민입니다.</h1>
                                <p>
                                    현재 부산소프트웨어마이스터고에 재학 중인
                                    학생입니다.
                                </p>
                                <p>
                                    코드를 작성할 때 고민하며 사용자와
                                    개발팀에게 최고의 가치를 전달할 수 있도록
                                    노력합니다.
                                    <br />웹 풀스택 개발자이지만 서버쪽에 관심이
                                    있으며, 다양한 프로젝트를 개발하였습니다.
                                </p>
                            </div>
                            <img src="https://avatars.githubusercontent.com/min050410"></img>
                        </div>
                    </div>
                </Element>
                <Element name="project">
                    <div className="project">
                        <div className="project--content">
                            <h1>Project</h1>
                            <div className="project--list">
                                {projectCardsData.map((projectCard) => (
                                    <ProjectCardComponent
                                        key={projectCard.id}
                                        filename={projectCard.filename}
                                        stack={projectCard.stack}
                                        name={projectCard.name}
                                        date={projectCard.date}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Element>
                <Element name="experience">
                    <div className="experience">
                        <div className="experience--content">
                            <h1>Experience</h1>
                            <div className="experience--works">
                                <h2>Education</h2>
                                <p>
                                    <strong>소프트웨어마이스터고</strong>{" "}
                                    (2021.03 ~ 2023.02)
                                </p>
                                <ul>
                                    <li>
                                        소프트웨어 개발과 전공 졸업 예정입니다.
                                    </li>
                                    <li>마이스터 역량인증제 점수 272.4/1위</li>
                                </ul>
                            </div>
                            <div className="experience--certificates">
                                <h2>Certificates</h2>
                                <p>
                                    2021 하계전공캠프 해커톤 (2021.02)
                                    <br />
                                    최우수상 - 부산소프트웨어마이스터고
                                </p>
                                <hr />
                                <p>
                                    2022 1학기 해커톤 (2022.07)
                                    <br />
                                    우수상 - 부산소프트웨어마이스터고
                                </p>
                            </div>
                            <div className="experience--prizes">
                                <h2>Prizes</h2>
                                <p>
                                    2021 하계전공캠프 해커톤 (2021.02)
                                    <br />
                                    최우수상 - 부산소프트웨어마이스터고
                                </p>
                                <p>
                                    2022 1학기 해커톤 (2022.07)
                                    <br />
                                    우수상 - 부산소프트웨어마이스터고
                                </p>
                            </div>
                            <div className="experience--skills">
                                <div className="over">
                                    <div className="skill">
                                        <div className="card">
                                            <div className="card_up">
                                                <div className="tagr">
                                                    Backend
                                                </div>
                                                <div className="count">11</div>
                                            </div>
                                            <div className="values">C, C++</div>
                                            <div className="values">JS</div>
                                            <div className="values">python</div>
                                            <div className="values">HTML5</div>
                                            <div className="values">CSS3</div>
                                            <div className="values">TS</div>
                                            <div className="values">jquery</div>
                                            <div className="values">Sass</div>
                                            <div className="values">Java</div>
                                            <div className="values">Lua</div>
                                            <div className="values">SQL</div>
                                        </div>
                                        <div className="card">
                                            <div className="card_up">
                                                <div className="tagy">
                                                    Frontend
                                                </div>
                                                <div className="count">7</div>
                                            </div>
                                            <div className="values">React</div>
                                            <div className="values">Flask</div>
                                            <div className="values">
                                                gatsby.js
                                            </div>
                                            <div className="values">
                                                sqlchemy
                                            </div>
                                            <div className="values">
                                                Node.js
                                            </div>
                                            <div className="values">
                                                Express.js
                                            </div>
                                            <div className="values">
                                                Android studio
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card_up">
                                                <div className="tagg">tool</div>
                                                <div className="count">3</div>
                                            </div>
                                            <div className="values">Linux</div>
                                            <div className="values">Ajax</div>
                                            <div className="values">
                                                Autodesk
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
                {/* <Element name="project">

                </Element> */}
                {/* <div className="section_union">
                    <section className="section">
                        <span>💼 현재 직장 없음</span>
                        <span>🍀 position | Backend programer</span>
                        <span>📆 Date | 2023 ~</span>
                    </section>
                    <section className="section">
                        <span>🏫 BSSM 재학중</span>
                        <span>💻 major | SW development</span>
                    </section>
                </div>
                <h4 className="under" id="skill">
                    🏹 Skill + Tool
                </h4>
                <div className="over">
                    <div className="skill">
                        <div className="card">
                            <div className="card_up">
                                <div className="tagr">Languages</div>
                                <div className="count">11</div>
                            </div>
                            <div className="values">C, C++</div>
                            <div className="values">JS</div>
                            <div className="values">python</div>
                            <div className="values">HTML5</div>
                            <div className="values">CSS3</div>
                            <div className="values">TS</div>
                            <div className="values">jquery</div>
                            <div className="values">Sass</div>
                            <div className="values">Java</div>
                            <div className="values">Lua</div>
                            <div className="values">SQL</div>
                        </div>
                        <div className="card">
                            <div className="card_up">
                                <div className="tagy">Frameworks</div>
                                <div className="count">7</div>
                            </div>
                            <div className="values">React</div>
                            <div className="values">Flask</div>
                            <div className="values">gatsby.js</div>
                            <div className="values">sqlchemy</div>
                            <div className="values">Node.js</div>
                            <div className="values">Express.js</div>
                            <div className="values">Android studio</div>
                        </div>
                        <div className="card">
                            <div className="card_up">
                                <div className="tago">Certificate</div>
                                <div className="count">2</div>
                            </div>
                            <div className="values">Microsoft Excel</div>
                            <div className="values">Microsoft Azure</div>
                        </div>
                        <div className="card">
                            <div className="card_up">
                                <div className="tagg">etc</div>
                                <div className="count">3</div>
                            </div>
                            <div className="values">Linux</div>
                            <div className="values">Ajax</div>
                            <div className="values">Autodesk</div>
                        </div>
                    </div>
                </div> */}
                {/* <h4 className="under" id="side">🎁 Side Project ( + Product Release )</h4>
                <div className="side">
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                </div>  */}
                {/* <h4 className="under" id="prize">
                    🏆 Prize + Award
                </h4>
                <div className="prize">
                    <div className="card">
                        <div className="card_title">
                            🥈 학생을 도와주는 혼공앱
                        </div>
                        <div className="time">2021.11</div>
                        <div className="desc">
                            KAIST 제 6회 전국 고등 소프트웨어 경진대회
                        </div>
                        <div className="tagg">은상</div>
                    </div>
                    <div className="card">
                        <div className="card_title">⌨️ Human for AI</div>
                        <div className="time">2021.11</div>
                        <div className="desc">2021 SW마이스터고 연합해커톤</div>
                        <div className="tagy">인기상</div>
                    </div>
                    <div className="card">
                        <div className="card_title">🐾 What is Neuralink</div>
                        <div className="time">2021.11</div>
                        <div className="desc">영어 말하기 대회</div>
                        <div className="tagb">결승 진출</div>
                    </div>
                    <div className="card">
                        <div className="card_title">💬 국어 우리말 대회</div>
                        <div className="time">2021.10</div>
                        <div className="desc">국어 우리말 대회</div>
                        <div className="tago">최우수상</div>
                    </div>
                    <div className="card">
                        <div className="card_title">🌠 Dream</div>
                        <div className="time">2021.7</div>
                        <div className="desc">교내 해커톤 대회</div>
                        <div className="tago">최우수상</div>
                    </div>
                    <div className="card">
                        <div className="card_title">✏️ 내신 성적 우수</div>
                        <div className="time">2021.7</div>
                        <div className="desc">교과 우수상 수상</div>
                        <div className="tagr">교과 우수상</div>
                    </div>
                </div> */}
                {/* <footer>
                    <div className="footer_wrap">
                        <a href={HIT_URL}>
                            <img src={HIT_BADGE_URL} />
                        </a>
                        <div className="date">last Update. 220110 </div>
                    </div>
                </footer> */}
            </div>
        </main>
    );
};

export default Intro;
