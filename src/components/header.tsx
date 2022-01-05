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
    const [valueText, setValueText] = useState("");
    const [searchFilename, setSearchFilename] = useState("");
    const [focus, setFocus] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }
    // 검색
    const findTitle = (text: string) => {
        for (let i = 0; i < recent.length; i++) {
            // 검색 정확도 향상
            if (recent[i]['title'].toLowerCase().indexOf(text) > -1 || recent[i]['filename'].toLowerCase().indexOf(text) > -1
                || recent[i]['title'].indexOf(text) > -1 || recent[i]['filename'].indexOf(text) > -1) {
                setValueText(recent[i]['title'])
                setSearchFilename(recent[i]['filename'])
            }
            if(valueText == ""){
                setValueText('검색 결과가 없습니다')
            }
        }
    }
    const onChange = (e: any) => {
        setSearchText(e.target.value);
        findTitle(e.target.value);
    };
    const onFocus = () => {
        setFocus(1);
    }
    const onBlur = () => {
        setFocus(0);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
    }, []);
    return (
        <header className={props.path == '/postitem' ? "notfixed" : scrollPosition < 50 ? "original" : "change"}>
            <div className="head index">
                <Link to="../">
                    <div className="head box">
                        <img className="logo" src="https://user-images.githubusercontent.com/45661217/145702017-641a444f-1f06-473d-b7e1-f3ae27012186.png" alt="logo"></img>
                        <span>dev-log</span>
                    </div>
                </Link>
                <div className="search warp" onClick={onFocus}>
                    <input type="text"
                        name="search"
                        autoComplete="off"
                        placeholder="검색할 내용을 입력하세요"
                        onChange={onChange}
                        value={searchText}>
                    </input>
                    {focus ? 
                        searchText == '' ? 
                            null : 
                            <div className="searchBox" onBlur={onBlur}> <div className ="search_post">
                                {props.path == '/postitem' ? 
                                    (valueText == "검색 결과가 없습니다" ? <span>{valueText}</span> :
                                    <Link to={`../postitem/?name=${searchFilename}`}>{valueText}</Link>) :
                                    (valueText == "검색 결과가 없습니다" ? <span>{valueText}</span> :
                                    <Link to={`postitem/?name=${searchFilename}`}><span>{valueText}</span></Link>)} </div></div> 
                        : null
                    }
                    
                </div>
                <div className="filter wrap">
                    <div className="filter img"></div>
                    <div className="filter text">필터설정</div>
                </div>
            </div>
            <div className="head content">
                <a href="https://pond-cheshire-bae.notion.site/young-min-3ceea45d28bd4eddb465e8ecfa0539f2"><span>소개</span></a>
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