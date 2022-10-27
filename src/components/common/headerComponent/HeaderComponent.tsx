import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from 'gatsby';
import { GITHUB_URL, LOGO_IMG_URL, LOGO_TEXT } from "../../../constant/constant";
import recentPostsData from '../../layout/recentComponent/recentPostsData';

// style
import '../../../styles/header.sass';

type HeaderComponentProps = {
    path: string,
}

type highestSimilarityValuesType = {
    title: string,
    filename: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ path }) => {

    const filter_key: string[] = ['js', 'ts', 'python', 'c', 'react', 'cpp', 'java', 'sql'];

    const [scrollPosition, setScrollPosition] = useState<number>(0);

    //Focus Event
    const [searchFocus, setsearchFocus] = useState<number>(0);
    const [filterFocus, setfilterFocus] = useState<number>(0);

    //search
    const [changeText, setChangeText] = useState<string>("");
    const [highestSimilarityValues, setHighestSimilarityValues] = useState<highestSimilarityValuesType>({ title: "", filename: "" });

    //filter_tag
    const [seletedTag, setSeletedTag] = useState<string>('');
    const [notSeletedTags, setNotSeletedTags] = useState<string[]>([...filter_key]);

    //Scroll Event
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);

    // search function
    const findTitle = (searchText: string) => {
        for (let i = 0; i < recentPostsData.length; i++) {
            // Lowercase로 변환해 검색 정확도 향상
            if (recentPostsData[i]['title'].toLowerCase().indexOf(searchText) > -1 || recentPostsData[i]['filename'].toLowerCase().indexOf(searchText) > -1
                || recentPostsData[i]['title'].indexOf(searchText) > -1 || recentPostsData[i]['filename'].indexOf(searchText) > -1) {
                setHighestSimilarityValues({ title: recentPostsData[i]['title'], filename: recentPostsData[i]['filename'] });
            }
            if (highestSimilarityValues.title == "") {
                setHighestSimilarityValues({ title: '검색 결과가 없습니다', filename: "" })
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
    const filterClick = () => {
        setfilterFocus(isFocus => isFocus ? 0 : 1);
    }

    //notSeletedTags Tag Click Event
    const tagClick = (tag: string) => {
        let taglist: string[] = [...filter_key];
        var index: number = taglist.indexOf(tag);
        if (index !== -1) {
            taglist.splice(index, 1);
        }
        setNotSeletedTags([...taglist]);
        setSeletedTag(tag);
    }

    //notSeletedTags map
    const notSeletedTagsMap = notSeletedTags.map((tag: string) => (
        <Link to={`/?f=${tag}`}>
            <span onClick={() => tagClick(tag)}>{tag}</span>
        </Link>
    ))

    //filter tags backup
    const reset = () => {
        setSeletedTag('');
        setNotSeletedTags([...filter_key]);
    }

    return (
        <header className={path == '/postitem' ? "notfixed" : scrollPosition < 50 ? "original" : "change"}>
            <div className="head index">
                <Link to="../">
                    <div className="head box">
                        <img className="logo" src={LOGO_IMG_URL} alt="logo"></img>
                        <span>{LOGO_TEXT}</span>
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
                        changeText === "" ?
                            null :
                            <div className="searchBox" onBlur={onSearchBoxBlur}> <div className="search_post">
                                { path == '/postitem' ?
                                    (highestSimilarityValues.title == "검색 결과가 없습니다" ? 
                                        <span>{highestSimilarityValues.title}</span> :
                                        <Link to={`../postitem/?name=${highestSimilarityValues.filename}`} state={{ key: Math.random() }}>{highestSimilarityValues.title}</Link>) :
                                    (highestSimilarityValues.title == "검색 결과가 없습니다" ? 
                                        <span>{highestSimilarityValues.title}</span> :
                                        <Link to={`postitem/?name=${highestSimilarityValues.filename}`}><span>{highestSimilarityValues.title}</span></Link>)} </div></div>
                        : null
                    }
                </div>
                <div className="filter wrap">
                    <div className="filter wrap" onClick={filterClick}>
                        {filterFocus ? <div className="filter img click"></div> : <div className="filter img"></div>}
                        <div className="filter text">필터설정</div>
                    </div>
                    {filterFocus ?
                        <div className="filterBox">
                            <div className="left">
                                <div>적용됨</div>
                                {seletedTag && <Link to={`/`}><span onClick={reset}>{seletedTag}</span></Link>}
                            </div>
                            <div className="right">
                                <div>태그 목록</div>
                                {notSeletedTagsMap}
                            </div>
                        </div>
                        : null
                    }
                </div>
            </div>
            <div className="head content">
                <Link to="/intro"><span>소개</span></Link>
                <a href={GITHUB_URL}><span>깃허브</span></a>
                <Link to="/login"><span>Github 로그인</span></Link>
                <div className="mod">
                    <div className="circle"></div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;