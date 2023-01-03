import { atom } from 'recoil';

const getInitialColorMode = () => {
    const persistedColorPreference = window.localStorage.getItem('color-mode');

    if (persistedColorPreference) {
        return persistedColorPreference;
    }

    return 'dark';
}

const themeColorState = atom({
    key: 'initialColorMode',
    default: getInitialColorMode(),
});

export { themeColorState };