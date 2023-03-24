import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";

const useSmoothScroll = (scrollHeight: number) => {
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
        const nextScrollY = scrollY + scrollHeight;
        animateScroll.scrollTo(nextScrollY, {
            duration: 500,
            smooth: true,
        });
    };

    return handleSmoothScroll;
};

export default useSmoothScroll;
