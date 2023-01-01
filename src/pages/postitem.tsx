import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import { Helmet } from 'react-helmet'

//components
import CodeBlock from "../components/layout/codeblock"
import HeaderComponent from '../components/common/headerComponent/HeaderComponent'
import PostComment from '../components/layout/comment'
import SEOComponent from '../components/common/seoComponent/SEOComponet'

//styles
import "../styles/postitem.sass"
import '../styles/index.sass';
import { useTitle } from "../hooks/useTitle";
import { useSearchParam } from "../hooks";

const PostItemPage = () => {
    const filename = useSearchParam('name');
    const pageTitle = useTitle(filename);

    const [PostItem, setPostItem] = React.useState<React.LazyExoticComponent<React.ComponentType<any>>>(React.lazy(() =>
        import(`../docs/${"Cors"}.mdx`)
    ))

    React.useEffect(() => {
        const PostItem = React.lazy(() =>
            import(`../docs/${filename}.mdx`)
        );
        setPostItem(PostItem);
    }, [filename]);

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
                    <React.Suspense fallback={<div>loading...</div>}>
                        <MDXProvider components={{ code: CodeBlock }}>
                            <PostItem />
                        </MDXProvider>
                    </React.Suspense>
                </div>
            </div>
            <PostComment key={filename}/>
        </main>
    )
}

export default PostItemPage;

