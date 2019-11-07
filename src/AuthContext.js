import React from 'react';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://192.168.2.181:3000';

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