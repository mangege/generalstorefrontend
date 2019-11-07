import React from 'react';
import Axios from 'axios';

const tokenKey = "AuthToken";

export function SetAuthTokenToLocal(aToken) {
    Axios.defaults.headers.common['X-Token'] = aToken;
    localStorage.setItem(tokenKey, aToken);
}

export function GetAuthTokenByLocal() {
    return localStorage.getItem(tokenKey) || '';
}

export const AuthContext = React.createContext({
    authToken: '', setAuthToken: () => { }
});

export default AuthContext;