import React from "react";
import recentPostsData from "../components/layout/recent/recentPostsData";

export const useTitle = (filename: any) => {
    const [title, setTitle] = React.useState<string>();

    React.useEffect(() => {
        const post = recentPostsData.find((post) => post.filename === filename);
        if (post) {
            setTitle(post.title);
        }
    }, [filename]);

    return title;
};
