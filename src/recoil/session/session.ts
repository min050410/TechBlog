import { atom, RecoilState, selector } from 'recoil';

const getInitialSessionState = () => {

    const isClient = typeof window !== "undefined"
    if (isClient) {
        const sessionState = window.localStorage.getItem('utterances-session');
        if (sessionState) {
            return sessionState;
        }
        return null
    }
    return null

}

const sessionState: RecoilState<string | null> = atom({
    key: 'initialSessionState',
    default: getInitialSessionState(),
});

export { sessionState };