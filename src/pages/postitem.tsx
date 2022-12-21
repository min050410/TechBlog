import * as React from "react";
import { useReducer } from "react";
import { MDXProvider } from "@mdx-js/react"
import { Helmet } from 'react-helmet'

//components
import CodeBlock from "../components/layout/codeblock"
import HeaderComponent from '../components/common/headerComponent/HeaderComponent'
import PostComment from '../components/layout/comment'
import SEOComponent from '../components/common/seoComponent/SEOComponet'
import NotFoundPage from "./404";

//data
import recentPostsData from '../components/layout/recentComponent/recentPostsData'

//styles
import "../styles/postitem.sass"
import '../styles/index.sass';

type PostimportProps = {
    location: {
        search: string | null,
        pathname: string, state: {
            key: number
        }
    }
}

const Postimport: React.FC<PostimportProps> = ({ location }) => {
    if (location.search === undefined) {
        return (null);
    }
    else if (location.search == null) {
        return (null);
    }
    else {
        const params = new URLSearchParams(location.search);
        const filename: string | null = params.get("name");

        if (filename == null) {
            return (<NotFoundPage />)
        }
        
        let pageTitle: string = '';
        //filename으로 title을 찾아주는 함수
        const findTitle = (filename: string) => {
            for (let i = 0; i < recentPostsData.length; i++) {
                if (recentPostsData[i].filename == filename) {
                    pageTitle = recentPostsData[i].title;
                }
            }
        }
        findTitle(filename);

        //postitem dynamic import
        const Postitem = require(`../docs/${filename}.mdx`).default;

        return (
            <main>
                <SEOComponent title={pageTitle} />
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta name="google-site-verification" content="Vfqlx3gjgzF7VwfWKG3BDziWEL76_QpnF4LvF0bgj8I" />
                    <meta name="description" content={`Dev Log | ${filename} - 고등학교 1학년 재학생이 만든 코딩과 관련된 갖가지 정보들과 에러 해결 방법 등을 모아놓은 블로그입니다.`}></meta>
                </Helmet>
                <HeaderComponent path={location.pathname} />
                <div className="middle">
                    <div className="left">
                        <MDXProvider components={{ code: CodeBlock }} >
                            <Postitem />
                        </MDXProvider>
                    </div>
                </div>
                <PostComment search={location.pathname} key={location.state ? location.state.key : Math.random()} />
            </main>
        )
    }

}

export default Postimport;

