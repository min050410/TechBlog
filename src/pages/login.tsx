import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { GITHUB_OAUTH_REDIRECT_URL } from '../constant/constant';

//github login
const login = () => {
    useEffect(() => {
        navigate(GITHUB_OAUTH_REDIRECT_URL);
    }, [])
    return null;
}
export default login;