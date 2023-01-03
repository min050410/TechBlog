import * as React from "react";
import { useRecoilState } from "recoil";
import { themeColorState } from "../../../recoil/theme/theme";

// style
import '../../../styles/header.sass';

const DarkModeSwichComponent = () => {
    const [colorMode, setColorMode] = useRecoilState(themeColorState);

    const darkModeHandling = () => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
    }

    React.useEffect(() => {
        document.documentElement.setAttribute('theme', colorMode);
        window.localStorage.setItem('color-mode', colorMode);
        document.documentElement.removeAttribute('style');
    }, [colorMode])

    // colorMode가 바뀌었을 때 rendering
    const SwitchEl = React.useMemo(() => 
        <div
            className={colorMode === 'dark' ? 'mod-dark' : 'mod-white'}
            onClick={darkModeHandling}>
            <div className="circle"></div>
        </div>
    , [colorMode])

    return (
        <div>
            { SwitchEl }
        </div>
    )
}

export default DarkModeSwichComponent;




