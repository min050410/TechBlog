import { atom } from 'recoil';

const getInitialColorMode = () => {
    const persistedColorPreference = window.localStorage.getItem('color-mode');

    if (persistedColorPreference) {
        return persistedColorPreference;
    }

    return 'dark';
}

const initialColorMode = atom({
    key: 'initialColorMode',
    default: getInitialColorMode(),
});

export { initialColorMode };