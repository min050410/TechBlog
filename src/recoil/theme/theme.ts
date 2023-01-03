import { atom } from 'recoil';

const getInitialColorMode = () => {

    const isClient = typeof window !== "undefined"

    if (isClient) {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        if (persistedColorPreference) {
            return persistedColorPreference;
        }
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
        if (systemPreference.matches) {
            return 'dark';
        }
        return 'light';
    }

}

const themeColorState = atom({
    key: 'initialColorMode',
    default: getInitialColorMode(),
});

export { themeColorState };