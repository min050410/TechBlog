const React = require('react');
const { RecoilRoot } = require('recoil');

const HtmlAttributes = {
    lang: "en"
}

const SetColorModeBeforeRendering = () => {
    let codeToRunOnClient = `
    (function() {
        function getInitialColorMode() {
        const isClient = typeof window !== 'undefined';
        if (isClient) {
            const persistedColorPreference = window.localStorage.getItem('color-mode');
    
            if (persistedColorPreference) {
            return persistedColorPreference;
            }
            
            return 'dark';
            // const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
            // if (systemPreference.matches) {
            //   return 'dark';
            // }
            // return 'light';
        }
        }
        const colorMode = getInitialColorMode();
        document.documentElement.style.setProperty(
        'background-color',
        colorMode === 'light' ? '#FFFFFF' : '#1C1C1e'
        );
    })()`;
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};


exports.onRenderBody = ({
    setHtmlAttributes,
    setPreBodyComponents
}, pluginOptions) => {
    setHtmlAttributes(HtmlAttributes);
    setPreBodyComponents(
        <SetColorModeBeforeRendering key="SetColorModeBeforeRendering" />
    );
}

exports.wrapRootElement = ({ element }) => {
    return (
        <RecoilRoot>{element}</RecoilRoot>
    )
}