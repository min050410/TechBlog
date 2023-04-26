import * as React from "react";
import loadable, { LoadableClassComponent } from "@loadable/component";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";

//hooks
import { useNearestPost, useSearchParam, useTitle } from "../../hooks";

//components
import CodeBlock from "../../components/layout/codeblock";
import HeaderComponent from "../../components/common/header";
import PostComment from "../../components/layout/comment";
import SEOComponent from "../../components/common/seo";

//styles
import "../../styles/postitem.sass";
import "../../styles/index.sass";

const PostItemPage = () => {
    const filename = useSearchParam("name");
    const pageTitle = useTitle(filename);
    const { nextPost, previousPost } = useNearestPost(filename);

    const [PostItem, setPostItem] =
        React.useState<LoadableClassComponent<React.ComponentClass> | null>(
            null
        );

    React.useEffect(() => {
        const PostItem = loadable(() => import(`../../docs/${filename}.mdx`), {
            fallback: <div>로딩중..</div>,
        });
        setPostItem(PostItem);
    }, [filename]);

    return (
        <main>
            <SEOComponent title={pageTitle} />
            <HeaderComponent />
            <div className="middle">
                <div className="left">
                    <MDXProvider
                        components={{
                            // @ts-ignore
                            code: CodeBlock,
                        }}
                    >
                        {PostItem && <PostItem />}
                    </MDXProvider>
                </div>
            </div>
            <div>
                <div>
                    다음 페이지:
                    <Link
                        to={`/postitem/?name=${nextPost?.filename}`}
                        key={nextPost?.id}
                    >
                        <span>{nextPost?.title}</span>
                    </Link>
                </div>
                <div>
                    이전 페이지:
                    <Link
                        to={`/postitem/?name=${previousPost?.filename}`}
                        key={previousPost?.id}
                    >
                        <span>{previousPost?.title}</span>
                    </Link>
                </div>
            </div>
            <PostComment key={filename} filename={filename} />
        </main>
    );
};

export default PostItemPage;
