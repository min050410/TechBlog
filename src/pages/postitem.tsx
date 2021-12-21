import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/codeblock";
import Header from '../components/header'
import PostComment from '../components/comment'
import NotFoundPage from "./404"
import { Helmet } from 'react-helmet'

//styles
import "../styles/postitem.sass"
import '../styles/index.sass';

const Postimport = ({ location }) => {
    if(location.search === undefined){
        return(null)
    }
    else if(location.search == null ){
        return(<NotFoundPage/>)
    }
    else {
        const params = new URLSearchParams(location.search);
        const filename = params.get("name");
        if(filename == null){
            return(<NotFoundPage/>)
        }
        const Postitem = require(`../md/${filename}.mdx`).default
        const components = {
            code: CodeBlock,
        };
        return (
            <main>
                <Helmet>
                    <title>Dev Log | {filename}</title>
                    <meta name="google-site-verification" content="Vfqlx3gjgzF7VwfWKG3BDziWEL76_QpnF4LvF0bgj8I" />
                    <meta name="description" content={`Dev Log | ${filename} - 고등학교 1학년 재학생이 만든 코딩과 관련된 갖가지 정보들과 에러 해결 방법 등을 모아놓은 블로그입니다.`}></meta>
                </Helmet>
                <Header />
                <div className="middle">
                    <div className="left">
                        <MDXProvider components={components} >
                            <Postitem />
                        </MDXProvider>
                    </div>
                </div>
                <PostComment />
            </main>
        )
    }
}

export default Postimport;