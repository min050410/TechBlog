import React from "react";
import recentPostsData, {
    recentPostDataType,
    recentPostsDataType,
} from "../components/layout/recent/recentPostsData";

export const useSearch = (searchValue: string) => {
    const [searchedPosts, setSearchedPosts] =
        React.useState<recentPostsDataType>([]);

    // search functions
    React.useEffect(() => {
        const filteredPosts = recentPostsData.filter(
            (data: recentPostDataType) =>
                data.title.toUpperCase().includes(searchValue.toUpperCase()) &&
                searchValue.length
        );
        setSearchedPosts(filteredPosts);
    }, [searchValue]);

    return searchedPosts;
};
