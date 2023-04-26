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
import NearestPostComponent from "../../components/layout/nearestPost";

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
            <NearestPostComponent
                nextPost={nextPost}
                previousPost={previousPost}
            />
            <PostComment key={filename} filename={filename} />
        </main>
    );
};

export default PostItemPage;
