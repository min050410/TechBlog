import * as React from "react";
import '../styles/header.sass';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <Link to="../">
                <div class="head box">
                    <img class="logo" width="86px" height="64px" src="https://user-images.githubusercontent.com/45661217/145702017-641a444f-1f06-473d-b7e1-f3ae27012186.png" alt="logo"></img>
                    <span>dev-log</span>
                </div>
            </Link>
            <div class="search_warp">
                <img class="search" src="https://user-images.githubusercontent.com/45661217/145702560-4a375749-e726-49ff-b6e1-f1bd1279a402.png"></img>
                <input type="text" name="search" placeholder="        검색할 내용을 입력하세요">
                </input>
            </div>
            <div class="head content">
                <a href="https://github.com/min050410/TIL"><span>블로그</span></a>
                <span>다크모드</span>
                <a href="https://github.com/min050410"><span>소개</span></a>
                {/* <Link to="info"><span>소개</span></Link> */}
            </div>
        </header>
    )
}
export default Header;