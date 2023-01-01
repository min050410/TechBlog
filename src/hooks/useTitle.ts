import React from 'react';
import recentPostsData from '../components/layout/recentComponent/recentPostsData';

export const useTitle = (filename: any) => {

    const [title, setTitle] = React.useState<string>();

    React.useEffect(() => {
        for (let i = 0; i < recentPostsData.length; i++) {
            if (recentPostsData[i].filename == filename) {
                setTitle(recentPostsData[i].title);
            }
        }
    }, [filename])

    return title;
};
