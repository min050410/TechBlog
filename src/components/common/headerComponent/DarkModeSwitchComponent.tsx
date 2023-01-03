import * as React from "react";
import { useRecoilState } from "recoil";
import { initialColorMode } from "../../../recoil/theme/theme";

// style
import '../../../styles/header.sass';

const DarkModeSwichComponent = () => {
    const [colorMode, setColorMode] = useRecoilState(initialColorMode);

    const darkModeHandling = () => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
    }

    React.useEffect(() => {
        document.documentElement.setAttribute('theme', colorMode);
        window.localStorage.setItem('color-mode', colorMode);
        document.documentElement.removeAttribute('style');
    }, [colorMode])

    return (
        <div className={colorMode === 'dark' ? 'mod-dark' : 'mod-white'}
            onClick={darkModeHandling}>
            <div className="circle"></div>
        </div>
    )
}

export default DarkModeSwichComponent;




