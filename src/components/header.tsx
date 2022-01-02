import * as React from "react";
import { useState, useEffect } from "react";
import recent from '../md/recent'
import '../styles/header.sass';
import { Link } from 'gatsby';

type MyProps = {
    path: string,
}

const Header: React.FC<MyProps> = (props: MyProps) => {
    const [searchText, setSearchText] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }
    const onChange = (e: any) => {
        setSearchText(e.target.value);

    };
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll)
    },[]);

    return (
        <header className={ props.path=='/postitem'? "notfixed" : scrollPosition < 50? "original":"change"}>   
            <div className="head index">
                <Link to="../">
                    <div className="head box">
                        <img className="logo" src="https://user-images.githubusercontent.com/45661217/145702017-641a444f-1f06-473d-b7e1-f3ae27012186.png" alt="logo"></img>
                        <span>dev-log</span>
                    </div>
                </Link>
                <div className="search warp">
                    <input type="text" name="search" autoComplete="off" placeholder="검색할 내용을 입력하세요" onChange={onChange} value={searchText}>
                    </input>
                    <div className="searchBox"></div> 
                </div>
                <div className="filter wrap">
                    <div className="filter img"></div>
                    <div className="filter text">필터설정</div>
                </div>
            </div>
            <div className="head content">
                <a href="https://github.com/min050410/min050410"><span>소개</span></a>
                <a href="https://github.com/min050410/TechBlog"><span>깃허브</span></a>
                <Link to="/login"><span>Github 로그인</span></Link>
                <div className="mod">
                    <div className="circle"></div>
                </div>
                <span className="darkmode_text">다크모드</span>
            </div>
        </header>
    )
}

export default Header;