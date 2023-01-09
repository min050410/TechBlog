import * as React from "react";
import loadable, { LoadableClassComponent } from '@loadable/component';
import { MDXProvider } from "@mdx-js/react";
import { Helmet } from 'react-helmet';

//hooks
import { useSearchParam, useTitle } from "../hooks";

//components
import CodeBlock from "../components/layout/codeblock";
import HeaderComponent from '../components/common/headerComponent/HeaderComponent';
import PostComment from '../components/layout/comment';
import SEOComponent from '../components/common/seoComponent/SEOComponet';

//styles
import "../styles/postitem.sass";
import '../styles/index.sass';

const PostItemPage = () => {
    const filename = useSearchParam('name');
    const pageTitle = useTitle(filename);

    const [PostItem, setPostItem] = React.useState<LoadableClassComponent<React.ComponentClass> | null>(null);
    React.useEffect(() => {
        const PostItem = loadable(() =>
            import(`../docs/${filename}.mdx`), {
                fallback: <div>로딩중..</div>
            }
        );
        setPostItem(PostItem);
    }, [filename])

    return (
        <main>
            <SEOComponent title={pageTitle} />
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="google-site-verification" content="Vfqlx3gjgzF7VwfWKG3BDziWEL76_QpnF4LvF0bgj8I" />
                <meta name="description" content={`Dev Log | ${filename} - 고등학교 1학년 재학생이 만든 코딩과 관련된 갖가지 정보들과 에러 해결 방법 등을 모아놓은 블로그입니다.`}></meta>
            </Helmet>
            <HeaderComponent />
            <div className="middle">
                <div className="left">
                    <MDXProvider components={{ code: CodeBlock }}>
                        {PostItem ? <PostItem /> : null}
                    </MDXProvider>
                </div>
            </div>
            <PostComment key={filename} filename={filename}/>
        </main>
    )
}

export default PostItemPage;

