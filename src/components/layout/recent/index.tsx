import * as React from "react";
import { Link } from "gatsby";
import recentPostsData from "./recentPostsData";

// hooks
import { useSearchParam } from "../../../hooks";

// styles
import "../../../styles/recent.sass";
import RecentPostComponent from "./recentPost";

const RecentComponent = () => {
    const filter = useSearchParam("f");

    // filter 함수를 통한 filtering 후 map
    const recent_list = recentPostsData
        .filter((word) => word.filter == filter || filter === null)
        .reverse()
        .map((recentPost, i) => (
            <RecentPostComponent
                id={recentPost.id}
                filename={recentPost.filename}
                imgLineOne={recentPost.imgLineOne}
                imgLineTwo={recentPost.imgLineTwo}
                title={recentPost.title}
                date={recentPost.date}
                tag={recentPost.tag}
                tag2={recentPost.tag2}
                tag3={recentPost.tag3}
            />
        ));
    return (
        <section>
            <div className="header_wrap">
                <div className="header">최근 블로그</div>
                {filter && <span className="filter-key">{filter}</span>}
            </div>
            <div className="horizontal_container">{recent_list}</div>
        </section>
    );
};

export default RecentComponent;
