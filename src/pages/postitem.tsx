import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/codeblock";
import Header from '../components/header'
import PostComment from '../components/comment'
import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Link } from 'gatsby';


//styles
import "../styles/postitem.sass"
import '../styles/index.sass';

const Postimport = ({ location }) => {
    if (location.state === undefined) {
        return (
        <div className="middle">
            <div className="left">
                <h3>Github 로그인이 완료되었습니다</h3>
                <Link to="/login"><h3 color="#58A6FF">home으로 이동하기</h3></Link>
            </div>
        </div>     
        );
    }
    else if (location.state == null) {
        useEffect(() => {
            navigate(-3);
        }, []);
        return (<PostComment />)
    }
    else {
        const Postitem = require(`../md/${location.state.myProp}.mdx`).default
        const components = {
            code: CodeBlock,
        };
        return (
            <main>
                <title>{location.state.myProp}</title>
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