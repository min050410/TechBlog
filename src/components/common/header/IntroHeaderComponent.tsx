import * as React from "react";
import { Link, navigate } from "gatsby";
import { recentPostDataType } from "../../layout/recent/recentPostsData";
import { initialFilterKeyState } from "./filter/filterKey";
import { LOGO_IMG_URL, LOGO_TEXT } from "../../../constant/constant";
import { useSearch, useScroll, useSearchParam } from "../../../hooks";
import FilterBoxComponent from "./filter";
import DarkModeSwitchComponent from "./darkMode";
import { useRecoilState } from "recoil";
import { sessionState } from "../../../recoil/session";
import { useSmoothScroll } from "../../../hooks";

// style
import "../../../styles/header.sass";

type TagStateType = {
    selected: string;
    notSelected: string[];
};

const IntroHeaderComponent = () => {
    const scrollPosition = useScroll();
    const [, setToken] = useRecoilState(sessionState);
    const session = useSearchParam("utterances");
    React.useEffect(() => {
        if (session) {
            setToken("right after login");
        }
    }, []);

    // search
    const [searchValue, setSearchValue] = React.useState<string>("");
    const searchedPosts = useSearch(searchValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    // focus event
    const [filterFocus, setfilterFocus] = React.useState<boolean>(false);

    // filter tag
    const [tag, setTag] = React.useState<TagStateType>({
        selected: "",
        notSelected: initialFilterKeyState,
    });

    // Tag Click Event
    const tagClick = React.useCallback((clickedTag: string) => {
        setTag({
            selected: clickedTag,
            notSelected: [
                ...initialFilterKeyState.filter(
                    (tag: string) => tag !== clickedTag
                ),
            ],
        });
        navigate(`/?f=${clickedTag}`);
    }, []);

    const reset = React.useCallback(() => {
        setTag({
            selected: "",
            notSelected: [...initialFilterKeyState],
        });
        navigate("/");
    }, []);

    return (
        <header className={scrollPosition.y < 50 ? "original" : "change"}>
            <div className="head index">
                <Link to="/">
                    <div className="head box">
                        <img
                            className="logo"
                            src={LOGO_IMG_URL}
                            alt="logo"
                        ></img>
                        <span>{LOGO_TEXT}</span>
                    </div>
                </Link>
                <div className="search warp">
                    <input
                        type="text"
                        className="search-input"
                        name="search"
                        autoComplete="off"
                        placeholder="검색할 내용을 입력하세요"
                        onChange={onChange}
                        value={searchValue}
                    ></input>
                    {searchValue ? (
                        <div className="searchBox">
                            <div className="search_post">
                                {searchedPosts.length ? (
                                    searchedPosts.map(
                                        (searchPost: recentPostDataType) => (
                                            <Link
                                                to={`/postitem/?name=${searchPost.filename}`}
                                                key={searchPost.id}
                                            >
                                                <span>{searchPost.title}</span>
                                            </Link>
                                        )
                                    )
                                ) : (
                                    <span>검색 결과가 없습니다.</span>
                                )}
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="filter wrap">
                    <div
                        className="filter wrap"
                        onClick={() => {
                            setfilterFocus((prev) => !prev);
                        }}
                    >
                        {filterFocus ? (
                            <div className="filter img click"></div>
                        ) : (
                            <div className="filter img"></div>
                        )}
                        <div className="filter text">필터설정</div>
                    </div>
                    {filterFocus ? (
                        <FilterBoxComponent
                            seletedTag={tag.selected}
                            notSeletedTags={tag.notSelected}
                            reset={reset}
                            tagClick={tagClick}
                        />
                    ) : null}
                </div>
            </div>
            <div className="head content">
                <Link to="/">
                    <span>BLOG</span>
                </Link>
                <span
                    className="head content navigate"
                    onClick={useSmoothScroll("about")}
                >
                    ABOUT
                </span>
                <span
                    className="head content navigate"
                    onClick={useSmoothScroll("project")}
                >
                    PROJECT
                </span>
                <span
                    className="head content navigate"
                    onClick={useSmoothScroll("experience")}
                >
                    EXPERIENCE
                </span>
                <DarkModeSwitchComponent />
            </div>
        </header>
    );
};

export default IntroHeaderComponent;
