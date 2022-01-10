import * as React from "react";

//components
import SEO from "../components/SEO"
import Header from '../components/header'

//style
import "../styles/intro.sass"

const Intro = ({ location }) => {
    return (
        <main>
            <SEO title="Dev log | 소개" />
            <Header path={location.pathname} />
            <div className="moveto">
            <div>이동하기</div>
            <div><a href="#hi">📑 intro</a></div>
            <div><a href="#skill">🏹 Skill + Tool</a></div>
            <div><a href="#side">🎁 Side Project</a></div>
            <div><a href="#prize">🏆 Prize + Award</a></div>
            </div>
            <div className="middle">
                <h2 id="hi">Hello, YoungMin </h2>
                <h3 id="gray">안녕하세요. <u>김영민(YoungMin)</u>입니다.</h3>
                <div className="intro">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgs7zmA2X55TVRum7fe9_03F2Y5hWmNjX4Q&usqp=CAU"></img>
                    <div className="intro_test">
                        <h3 id="gray">여러 데이터를 다뤄보고 싶은 <u>Backend 개발자</u> 입니다.</h3>
                        <h3 id="gray">단순히 <u>아는 것</u>보다,
                            <u>이해</u>하고 넘어가는 것을 좋아합니다. </h3>
                    </div>
                </div>
                <div className="section_union">
                <section className="section"><span>부산 소마고</span></section>
                <section className="section"><span>하이루</span></section>
                </div>
                <h4 className="under" id="skill">🏹 Skill + Tool</h4>
                <div className="over">
                <div className="skill">
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                </div>
                </div>
                <h4 className="under" id="side">🎁 Side Project(+Product Release)</h4>
                <div className="side">
                    <div className="card">

                    </div> 
                    <div className="card">
                        
                    </div>
                    <div className="card">
                        
                    </div>
                    <div className="card">
                        
                    </div>
                </div>
                <h4 className="under" id="prize">🏆 Prize + Award</h4>
                <div className="prize">
                    <div className="card">

                    </div>
                    <div className="card">
                        
                    </div>
                    <div className="card">
                        
                    </div>
                </div>
                <footer></footer>
            </div>
        </main>

    )
}

export default Intro