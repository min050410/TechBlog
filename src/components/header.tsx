import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from 'gatsby';

//search, filter 기능을 위한 data
import recent from '../md/recent'

//style
import '../styles/header.sass';

//props type 지정 (제네릭)
type Props = {
    path: string,
}

const Header: React.FC<Props> = ({path}) => {
    const [scrollPosition, setScrollPosition] = useState(0); 

    //Focus Event
    const [searchFocus, setsearchFocus] = useState(0);
    const [filterFocus, setfilterFocus] = useState(0);

    //search
    const [changeText, setChangeText] = useState(""); //바뀌는 Text값
    const [found, setFound] = useState({title: "", filename: ""}); //recent의 값 중 유사성이 가장 높은 값

    //filter_tag
    const [seletedTag, setSeletedTag] = useState('')
    const [notSeletedTags, setNotSeletedTags] = useState(['js', 'python', 'c', 'react'])

    //Scroll Event
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
    }, []);
    
    // search function
    const findTitle = (text: string) => {
        for (let i = 0; i < recent.length; i++) {
            // Lowercase로 검색 정확도 향상
            if (recent[i]['title'].toLowerCase().indexOf(text) > -1 || recent[i]['filename'].toLowerCase().indexOf(text) > -1
                || recent[i]['title'].indexOf(text) > -1 || recent[i]['filename'].indexOf(text) > -1) {
                setFound({title:recent[i]['title'], filename:recent[i]['filename']});
            }
            if (found.title == "") {
                setFound({title:'검색 결과가 없습니다', filename:""})
            }
        }
    }

    //Search Text 상태 관리 
    const onChange = (e: any) => {
        setChangeText(e.target.value);
        findTitle(e.target.value);
    };

    //Search Box Focus Event
    const onSearchBoxFocus = () => {
        setsearchFocus(1);
    }

    //Search Box Blur Event
    const onSearchBoxBlur = () => {
        setsearchFocus(0);
    }

    //filter Focus Toggle
    const filterClick = (isFocus: number) => {
        setfilterFocus(isFocus => isFocus ? 0 : 1);
    }

    //notSeletedTags Tag Click Event
    const tagClick = (tag: string) => {
        let Taglist: string[] = ['js', 'python', 'c', 'react']
        var index: number = Taglist.indexOf(tag);
        if (index !== -1) {
            Taglist.splice(index, 1);
        }
        setNotSeletedTags([...Taglist])
        setSeletedTag(tag);
    }

    //notSeletedTags map
    const notSeletedTags_map = notSeletedTags.map((tag) => (
        <Link to={`/?f=${tag}`}><span onClick={() => tagClick(tag)}>{tag}</span></Link>
    ))

    //filter tags backup
    const backup = () => {
        setSeletedTag('')
        setNotSeletedTags(['js', 'python', 'c', 'react'])
    }

    return (
        <header className={path == '/postitem' ? "notfixed" : scrollPosition < 50 ? "original" : "change"}>
            <div className="head index">
                <Link to="../">
                    <div className="head box">
                        <img className="logo" src="https://user-images.githubusercontent.com/45661217/145702017-641a444f-1f06-473d-b7e1-f3ae27012186.png" alt="logo"></img>
                        <span>dev-log</span>
                    </div>
                </Link>
                <div className="search warp" onClick={onSearchBoxFocus}>
                    <input type="text"
                        className="search-input"
                        name="search"
                        autoComplete="off"
                        placeholder="검색할 내용을 입력하세요"
                        onChange={onChange}
                        value={changeText}>
                    </input>
                    {searchFocus ?
                        changeText == '' ?
                            null :
                            <div className="searchBox" onBlur={onSearchBoxBlur}> <div className="search_post">
                                {path == '/postitem' ?
                                    (found.title == "검색 결과가 없습니다" ? <span>{found.title}</span> :
                                        <Link to={`../postitem/?name=${found.filename}`} state={{ key: Math.random() }}>{found.title}</Link>) :
                                    (found.title == "검색 결과가 없습니다" ? <span>{found.title}</span> :
                                        <Link to={`postitem/?name=${found.filename}`} ><span>{found.title}</span></Link>)} </div></div>
                        : null
                    }
                </div>
                <div className="filter wrap">
                    <div className="filter wrap" onClick={() => filterClick(filterFocus)}>
                        {filterFocus ? <div className="filter img click"></div> : <div className="filter img"></div>}
                        <div className="filter text">필터설정</div>
                    </div>
                    {filterFocus ?
                        <div className="filterBox">
                            <div className="left">
                                <div>적용됨</div>
                                {seletedTag ? <Link to={`/`}><span onClick={() => backup()}>{seletedTag}</span></Link>
                                : null}
                            </div>
                            <div className="right">
                                {notSeletedTags_map}
                            </div>
                        </div> : null}
                </div>
            </div>
            <div className="head content">
                <Link to="/intro"><span>소개</span></Link>
                <a href="https://github.com/min050410/TechBlog"><span>깃허브</span></a>
                <Link to="/login"><span>Github 로그인</span></Link>
                <div className="mod">
                    <div className="circle"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;