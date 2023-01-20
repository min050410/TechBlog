import React from 'react';

export const useScroll = () => {

    const [scrollPosition, setScrollPosition] = React.useState({
        x: 0,
        y: 0
    });

     // update scroll
    React.useEffect(() => {
        const updateScroll = () => {
            setScrollPosition({
                x: window.screenX || document.documentElement.scrollLeft,
                y: window.scrollY || document.documentElement.scrollTop
            });
        }
        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return scrollPosition;
};