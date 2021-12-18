import * as React from "react";
import '../styles/header.sass';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <div className="head index">
                <Link to="../">
                    <div className="head box">
                        <img className="logo" src="https://user-images.githubusercontent.com/45661217/145702017-641a444f-1f06-473d-b7e1-f3ae27012186.png" alt="logo"></img>
                        <span>dev-log</span>
                    </div>
                </Link>
                <div className="search warp">
                    <input type="text" name="search" autoComplete="off" placeholder="검색할 내용을 입력하세요">
                    </input>
                </div>
                <div className="filter wrap">
                    <div className="filter img"></div>
                    <div className="filter text">필터설정</div>
                </div>
            </div>
            <div className="head content">
                <a href="https://github.com/min050410/min050410"><span>소개</span></a>
                <a href="https://github.com/min050410"><span>깃허브</span></a>
                <a href="#"><span>다크모드</span></a>
                <div className="mod">
                    <div className="circle"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;