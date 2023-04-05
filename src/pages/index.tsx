import * as React from "react";

//components
import SEOComponent from "../components/common/seo";
import HeaderComponent from "../components/common/header";
import PostComment from "../components/layout/comment";
import PopularComponent from "../components/layout/popular";
import RecentComponent from "../components/layout/recent";

const IndexPage = () => {
    return (
        <main>
            <SEOComponent title="Dev Log | Main" />
            <div>
                <HeaderComponent />
                <div className="fade_in">
                    <PopularComponent />
                    <RecentComponent />
                </div>
            </div>
            <div className="hide">
                <PostComment />
            </div>
        </main>
    );
};

export default IndexPage;
