import * as React from "react";
import { useReducer } from "react";
import { MDXProvider } from "@mdx-js/react"
import { Helmet } from 'react-helmet'

//components
import CodeBlock from "../components/codeblock"
import Header from '../components/header'
import PostComment from '../components/comment'
import SEO from '../components/SEO'

//data
import recent from '../md/recent'

//styles
import "../styles/postitem.sass"
import '../styles/index.sass';

const Postimport = () => {
    if (location.search === undefined) {
        return (null)
    }
    else if (location.search == null) {
        return (null)
    }
    else {
        const params = new URLSearchParams(location.search);
        const filename: string | null = params.get("name");

        if (filename == null) {
            return (null)
        }

        const [, forceUpdate] = useReducer(x => x + 1, 0);
        let pageTitle: string | null = null;

        //filename으로 title을 찾아주는 함수
        const findTitle = (filename: string) => {
            for (let i = 0; i < recent.length; i++) {
                if (recent[i].filename == filename) {
                    pageTitle = recent[i].title;
                }
            }
        }
        findTitle(filename);    

        // search시 rerendering
        function componentDidMount() {
            const reloadCount: string | null = sessionStorage.getItem('reloadCount');
            //최초 1번만
            if(Number(reloadCount) < 1) {
              sessionStorage.setItem('reloadCount', String(reloadCount + 1));
              //rerendering
              forceUpdate()
            } else {
              sessionStorage.removeItem('reloadCount');
            }
        }
        componentDidMount()

        //postitem dynamic import
        const Postitem = require(`../md/${filename}.mdx`).default

        const components = {
            code: CodeBlock,
        };    

        let key: number;
        if(location.state==null){
            key = Math.random();
        }
        else{
            key = location.state.key
        }
        
    
        return (
            <main>
                <SEO title={pageTitle}/>
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
                <PostComment key={key}/>
            </main>
        )
    }

}

export default Postimport;

