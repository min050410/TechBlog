import { useEffect, useCallback } from "react";
import { scroller } from "react-scroll";

export const useSmoothScroll = (sectionName: string) => {
    const handleScroll = useCallback(() => {}, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleSmoothScroll = useCallback(() => {
        scroller.scrollTo(sectionName, {
            duration: 500,
            smooth: true,
        });
    }, [sectionName]);

    return handleSmoothScroll;
};
