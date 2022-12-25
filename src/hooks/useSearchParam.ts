import React from 'react';

export const useSearchParam = (param: string) => {

    const getValue = React.useCallback(() => 
        new URLSearchParams(location.search).get(param)
    , [param]);

    const [value, setValue] = React.useState(getValue);

    React.useEffect(() => {
        setValue(getValue());
    }, [location.search]);

    return value;
};
