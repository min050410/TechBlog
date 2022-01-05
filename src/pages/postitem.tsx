import * as React from "react";
import { useState, useEffect, useReducer } from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/codeblock"
import Header from '../components/header'
import PostComment from '../components/comment'
import recent from '../md/recent'
import { Helmet } from 'react-helmet'

//styles
import "../styles/postitem.sass"
import '../styles/index.sass';

const Postimport = ({ location }) => {

    if (location.search === undefined) {
        return (null)
    }
    else if (location.search == null) {
        return (null)
    }
    else {
        const [, forceUpdate] = useReducer(x => x + 1, 0);
        let pageTitle: string = null;
        const params = new URLSearchParams(location.search);
        const filename: string = params.get("name");

        //filename으로 title을 찾아주는 함수
        const findTitle = (filename: string) => {
            for (let i = 0; i < recent.length; i++) {
                if (recent[i].filename == filename) {
                    pageTitle = recent[i].title;
                }
            }
        }
        if (filename == null) {
            return (null)
        }
        // search시 reload
        function componentDidMount() {
            const reloadCount: string = sessionStorage.getItem('reloadCount');
            if(Number(reloadCount) < 1) {
              sessionStorage.setItem('reloadCount', String(reloadCount + 1));
              //강제로 rerendering
              forceUpdate()
            } else {
              sessionStorage.removeItem('reloadCount');
            }
        }
        componentDidMount()

        const Postitem = require(`../md/${filename}.mdx`).default

        const components = {
            code: CodeBlock,
        };

        findTitle(filename);    
    
        return (
            <main>
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta name="google-site-verification" content="Vfqlx3gjgzF7VwfWKG3BDziWEL76_QpnF4LvF0bgj8I" />
                    <meta name="description" content={`Dev Log | ${filename} - 고등학교 1학년 재학생이 만든 코딩과 관련된 갖가지 정보들과 에러 해결 방법 등을 모아놓은 블로그입니다.`}></meta>
                </Helmet>
                <Header path={location.pathname} />
                <div className="middle">
                    <div className="left">
                        <MDXProvider components={components} >
                            <Postitem />
                        </MDXProvider>
                    </div>
                </div>
                <PostComment/>
            </main>
        )
    }

}

export default Postimport;

