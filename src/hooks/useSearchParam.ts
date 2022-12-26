import React from 'react';

export const useSearchParam = (param: string) => {

    const getValue = React.useCallback(() => {
        if (typeof location === "undefined") return;
        return new URLSearchParams(location?.search).get(param)
    }, [param]);

    const [value, setValue] = React.useState<string | null | undefined>(getValue);
    React.useEffect(() => {
        setValue(getValue());
    }, [location?.search]);

    return value;
};
