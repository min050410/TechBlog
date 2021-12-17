import * as React from "react";
import '../styles/header.sass';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <div class="head index">
                <Link to="../">
                    <div class="head box">
                        <img class="logo" src="https://user-images.githubusercontent.com/45661217/145702017-641a444f-1f06-473d-b7e1-f3ae27012186.png" alt="logo"></img>
                        <span>dev-log</span>
                    </div>
                </Link>
                <div class="search warp">
                    <input type="text" name="search" autocomplete="off" placeholder="검색할 내용을 입력하세요">
                    </input>
                </div>
                <div class="filter wrap">
                    <div class="filter img"></div>
                    <div class="filter text">필터 설정</div>
                </div>
            </div>
            <div class="head content">
                <a href="https://github.com/min050410/TIL"><span>소개</span></a>
                <span>깃허브</span>
                <a href="https://github.com/min050410"><span>다크모드</span></a>
                <div class="mod">
                    <div class="circle"></div>
                </div>
            </div>
        </header>
    )
}
export default Header;