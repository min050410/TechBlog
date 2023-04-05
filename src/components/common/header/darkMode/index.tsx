import * as React from "react";
import { useRecoilState } from "recoil";
import { themeColorState } from "../../../../recoil/theme";

const DarkModeSwitchComponent = () => {
    const [colorMode, setColorMode] = useRecoilState(themeColorState);

    const darkModeHandling = () => {
        setColorMode(colorMode === "dark" ? "light" : "dark");
    };

    const [switchEl, setSwitchEl] = React.useState<JSX.Element>();
    React.useEffect(() => {
        document.documentElement.setAttribute("theme", colorMode);
        window.localStorage.setItem("color-mode", colorMode);
        document.documentElement.removeAttribute("style");
        setSwitchEl(
            <div
                className={colorMode === "dark" ? "mod-dark" : "mod-white"}
                onClick={darkModeHandling}
            >
                <div className="circle"></div>
            </div>
        );
    }, [colorMode]);

    return <div>{switchEl}</div>;
};

export default DarkModeSwitchComponent;
