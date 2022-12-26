import * as React from "react";
import { Link, PageProps } from "gatsby";
import { GITHUB_URL, LOGO_IMG_URL, LOGO_TEXT } from "../../../constant/constant";
import recentPostsData, { recentPostDataType, recentPostsDataType } from '../../layout/recentComponent/recentPostsData';
import { initialFilterKeyState } from "./filterKey";
import { useSearch, useScroll } from "../../../hooks";

// style
import '../../../styles/header.sass';
import FilterBoxComponent from "./FilterBoxComponent";

type HeaderComponentType = {
    path: string
}

const HeaderComponent = ({
    path
}: HeaderComponentType) => {

    const scrollPosition = useScroll();

    // focus event
    const [filterFocus, setfilterFocus] = React.useState<boolean>(false);

    // search
    const [searchValue, setSearchValue] = React.useState<string>("");

    // filter tag
    const [seletedTag, setSeletedTag] = React.useState<string>("");
    const [notSeletedTags, setNotSeletedTags] = React.useState<string[]>(initialFilterKeyState);
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    
    // search functions
    const searchedPosts = useSearch(searchValue);
    
    // notSeletedTags Tag Click Event
    const tagClick = React.useCallback((tag: string) => {
        let taglist: string[] = [...initialFilterKeyState];
        var index: number = taglist.indexOf(tag);
        if (index !== -1) {
            taglist.splice(index, 1);
        }
        setNotSeletedTags([...taglist]);
        setSeletedTag(tag);
    }, []);

    // filter tags backup
    const reset = React.useCallback(() => {
        setSeletedTag('');
        setNotSeletedTags([...initialFilterKeyState]);
    }, []);

    return (
        <header className={path == '/postitem' ? "notfixed" : scrollPosition < 50 ? "original" : "change"}>
            <div className="head index">
                <Link to="../">
                    <div className="head box">
                        <img className="logo" src={LOGO_IMG_URL} alt="logo"></img>
                        <span>{LOGO_TEXT}</span>
                    </div>
                </Link>
                <div className="search warp">
                    <input type="text"
                        className="search-input"
                        name="search"
                        autoComplete="off"
                        placeholder="검색할 내용을 입력하세요"
                        onChange={onChange}
                        value={searchValue}>
                    </input>
                    {
                        searchValue ?
                            <div className="searchBox">
                                <div className="search_post">
                                    {
                                        searchedPosts.length ?
                                            searchedPosts.map((searchPost: recentPostDataType) =>
                                                <Link to={`/postitem/?name=${searchPost.filename}`} key={searchPost.id}>
                                                    <span>{searchPost.title}</span>
                                                </Link>
                                            ) :
                                            <span>검색 결과가 없습니다.</span>
                                    }
                                </div>
                            </div> : null
                    }
                </div>
                <div className="filter wrap">
                    <div className="filter wrap" onClick={() => { setfilterFocus(isFocus => !isFocus) }}>
                        {filterFocus ?
                            <div className="filter img click"></div>
                            : <div className="filter img"></div>
                        }
                        <div className="filter text">필터설정</div>
                    </div>
                    {filterFocus ?
                        <FilterBoxComponent
                            seletedTag={seletedTag}
                            notSeletedTags={notSeletedTags}
                            reset={reset}
                            tagClick={tagClick} />
                        : null
                    }
                </div>
            </div>
            <div className="head content">
                <Link to="/intro">
                    <span>소개</span>
                </Link>
                <a href={GITHUB_URL}>
                    <span>깃허브</span>
                </a>
                <Link to="/login">
                    <span>Github 로그인</span>
                </Link>
                {/* <div className="mod">
                    <div className="circle"></div>
                </div> */}
            </div>
        </header>
    )
}

export default HeaderComponent;