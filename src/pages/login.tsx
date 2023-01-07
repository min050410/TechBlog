import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { GITHUB_OAUTH_REDIRECT_URL } from '../constant/constant';
import { useResetRecoilState } from 'recoil';
import { sessionState } from '../recoil/session/session';

//github login
const login = () => {
    const resetToken = useResetRecoilState(sessionState);
    useEffect(() => {
        navigate(GITHUB_OAUTH_REDIRECT_URL);
        resetToken();
    }, [])
    return null;
}
export default login;