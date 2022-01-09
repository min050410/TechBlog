import { useEffect } from 'react';
import { navigate } from 'gatsby';

//github login
const login = () => {
    useEffect(() => {
        navigate('https://api.utteranc.es/authorize?redirect_uri=https%3A%2F%2Fdevlog.kro.kr%2F');
    }, [])
    return null;
}
export default login;