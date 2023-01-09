import React from 'react';

export const useScroll = () => {

    const [scrollPosition, setScrollPosition] = React.useState<number>(0);

     // update scroll
    React.useEffect(() => {
        const updateScroll = () => {
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        }
        window.addEventListener('scroll', updateScroll);
    }, []);

    return scrollPosition;
};
