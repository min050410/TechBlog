import React from "react";
import recentPostsData from "../components/layout/recent/recentPostsData";

type postStateType = {
    id: number;
    title: string;
    filename: string;
} | null;

export const useNearestPost = (filename: string | null | undefined) => {
    const [nextPost, setNextPost] = React.useState<postStateType>(null);
    const [previousPost, setPreviousPost] = React.useState<postStateType>(null);

    React.useEffect(() => {
        setNextPost(null);
        setPreviousPost(null);
        const nowPost = recentPostsData.find(
            (post) => post.filename === filename
        );
        const nextPost = recentPostsData.find(
            (post) => post.id === (nowPost !== undefined && nowPost.id + 1)
        );
        const previousPost = recentPostsData.find(
            (post) => post.id === (nowPost !== undefined && nowPost.id - 1)
        );
        if (nextPost) {
            setNextPost({
                id: nextPost.id,
                title: nextPost.title,
                filename: nextPost.filename,
            });
        }
        if (previousPost) {
            setPreviousPost({
                id: previousPost.id,
                title: previousPost.title,
                filename: previousPost.filename,
            });
        }
    }, [filename]);

    return {
        nextPost: nextPost,
        previousPost: previousPost,
    };
};
