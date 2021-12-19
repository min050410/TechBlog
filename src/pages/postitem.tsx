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
    if (location.state === undefined) {
        useEffect(() => {
            console.log('now')
            navigate('/');
        }, []);
        return (<NotFoundPage />)
    }
    else if(location.state == null){
        useEffect(() => {
            navigate('/');
        }, []);
        return( <PostComment/> )
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