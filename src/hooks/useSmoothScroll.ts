import { useState, useEffect } from "react";
import { animateScroll, scroller } from "react-scroll";

const useSmoothScroll = (sectionName: string) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSmoothScroll = () => {
        scroller.scrollTo(sectionName, {
            duration: 500,
            smooth: true,
        });
    };

    return handleSmoothScroll;
};

export default useSmoothScroll;
