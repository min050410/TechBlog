import React from 'react';

export const usePath = () => {

    const getPath = React.useCallback(() => {
        if (typeof location === "undefined") return;
        return location?.pathname
    }, []);

    const [path, setPath] = React.useState<string | null | undefined>(getPath);
    React.useEffect(() => {
        setPath(getPath());
    }, [typeof location !== 'undefined' ? location.search : null]);

    return path;
};
