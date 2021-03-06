import * as React from "react";

//components
import SEO from "../components/SEO"
import Header from '../components/header'

//style
import "../styles/intro.sass"

const Intro: React.FC<{location: {search: string | null, pathname: string }}> = ({ location }) => {
    return (
        <main>
            <SEO title="Dev log | μκ°" />
            <Header path={location.pathname} />
            <div className="moveto">
                <div><a href="#hi">π intro</a></div>
                <div><a href="#skill">πΉ Skill + Tool</a></div>
                <div><a href="#side">π Side Project</a></div>
                <div><a href="#prize">π Prize + Award</a></div>
            </div>
            <div className="middle">
                <h2 id="hi">Hello, min050410</h2>
                <h3 id="gray">μλνμΈμ. <u>κΉμλ―Ό(YoungMin)</u>μλλ€.</h3>
                <div className="intro">
                    <img src="https://avatars.githubusercontent.com/min050410"></img>
                    <div className="intro_test">
                        <h3 id="gray">μ¬λ¬ λ°μ΄ν°λ₯Ό λ€λ€λ³΄κ³  μΆμ <u>Backend κ°λ°μ</u> μλλ€.</h3>
                        <h3 id="gray">λ¨μν <u>μλ κ²</u>λ³΄λ€,</h3>
                        <h3 id="gray"><u>μ΄ν΄</u>νκ³  λμ΄κ°λ κ²μ μ’μν©λλ€. </h3>
                    </div>
                </div>
                <div className="section_union">
                    <section className="section">
                        <span>πΌ νμ¬ μ§μ₯ μμ</span>
                        <span>π position | Backend programer</span>
                        <span>π Date | 2023 ~</span>
                    </section>
                    <section className="section">
                        <span>π« BSSM μ¬νμ€</span>
                        <span>π» major | SW development</span>
                    </section>
                </div>
                <h4 className="under" id="skill">πΉ Skill + Tool</h4>
                <div className="over">
                    <div className="skill">
                        <div className="card">
                            <div className="card_up">
                                <div className="tagr">
                                    Languages
                                </div>
                                <div className="count">11</div>
                            </div>
                            <div className="values">
                                C, C++
                            </div>
                            <div className="values">
                                JS
                            </div>
                            <div className="values">
                                python
                            </div>
                            <div className="values">
                                HTML5
                            </div>
                            <div className="values">
                                CSS3
                            </div>
                            <div className="values">
                                TS
                            </div>
                            <div className="values">
                                jquery
                            </div>
                            <div className="values">
                                Sass
                            </div>
                            <div className="values">
                                Java
                            </div>
                            <div className="values">
                                Lua
                            </div>
                            <div className="values">
                                SQL
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_up">
                                <div className="tagy">
                                    Frameworks
                                </div>
                                <div className="count">7</div>
                            </div>
                            <div className="values">
                            React
                            </div>
                            <div className="values">
                            Flask 
                            </div>
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
                                <div className="tago">
                                    Certificate
                                </div>
                                <div className="count">2</div>
                            </div>
                            <div className="values">
                                Microsoft Excel
                            </div>
                            <div className="values">
                                Microsoft Azure
                            </div>
                        </div>
                        <div className="card">
                        <div className="card_up">
                                <div className="tagg">
                                    etc
                                </div>
                                <div className="count">3</div>
                            </div>
                            <div className="values">
                            Linux 
                            </div>
                            <div className="values">
                            Ajax
                            </div>
                            <div className="values">
                            Autodesk
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h4 className="under" id="side">π Side Project ( + Product Release )</h4>
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
                <h4 className="under" id="prize">π Prize + Award</h4>
                <div className="prize">
                    <div className="card">
                        <div className="card_title">π₯ νμμ λμμ£Όλ νΌκ³΅μ±</div>
                        <div className="time">2021.11</div>
                        <div className="desc">KAIST μ  6ν μ κ΅­ κ³ λ± μννΈμ¨μ΄ κ²½μ§λν</div>
                        <div className="tagg">μμ</div>
                    </div>
                    <div className="card">
                        <div className="card_title">β¨οΈ Human for AI</div>
                        <div className="time">2021.11</div>
                        <div className="desc">2021 SWλ§μ΄μ€ν°κ³  μ°ν©ν΄μ»€ν€</div>
                        <div className="tagy">μΈκΈ°μ</div>
                    </div>
                    <div className="card">
                        <div className="card_title">πΎ What is Neuralink</div>
                        <div className="time">2021.11</div>
                        <div className="desc">μμ΄ λ§νκΈ° λν</div>
                        <div className="tagb">κ²°μΉ μ§μΆ</div>
                    </div>
                    <div className="card">
                        <div className="card_title">π¬ κ΅­μ΄ μ°λ¦¬λ§ λν</div>
                        <div className="time">2021.10</div>
                        <div className="desc">κ΅­μ΄ μ°λ¦¬λ§ λν</div>
                        <div className="tago">μ΅μ°μμ</div>
                    </div>
                    <div className="card">
                        <div className="card_title">π  Dream</div>
                        <div className="time">2021.7</div>
                        <div className="desc">κ΅λ΄ ν΄μ»€ν€ λν</div>
                        <div className="tago">μ΅μ°μμ</div>
                    </div>
                    <div className="card">
                        <div className="card_title">βοΈ λ΄μ  μ±μ  μ°μ</div>
                        <div className="time">2021.7</div>
                        <div className="desc">κ΅κ³Ό μ°μμ μμ</div>
                        <div className="tagr">κ΅κ³Ό μ°μμ</div>
                    </div>
                </div>
                <footer>
                    <div className="footer_wrap">
                        <a href="https://hits.seeyoufarm.com">
                            <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdevlog%2Fintro&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
                        </a>
                        <div className="date">last Update. 220110 </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}

export default Intro