import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/codeblock";
import NotFoundPage from "./404"
import Header from '../components/header'
import PostComment from '../components/comment'
import { useEffect } from 'react';
import { navigate } from 'gatsby';

//styles
import "../styles/postitem.sass"
import '../styles/index.sass';

const Postimport = ({ location }) => {
    if(window.location.href.indexOf("u")>-1){
        useEffect(() => {
            navigate('/');
        }, []);
        return null;
    }
    else if (location.state === undefined) {
        useEffect(() => {
            navigate('/');
        }, []);
        return ( <PostComment/> );
    }
    else if(location.state==null){
        useEffect(() => {
            navigate('/');
        }, []);
        return ( <PostComment/> );
    }
    else {  
        const Postitem = require(`../md/${location.state.myProp}.mdx`).default
        const components = {
            code: CodeBlock,
        };
        return (
            <main>
                <title>{location.state.myProp}</title>
                <Header/>
                <div className="middle">
                    <div className = "left">
                    <MDXProvider components={components} >
                        <Postitem/>
                    </MDXProvider>
                    </div>
                </div>
                <PostComment/>
            </main> 
        )
    }
}

export default Postimport;