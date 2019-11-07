import React from 'react';
import { Link } from "react-router-dom";

import { AuthContext, SetAuthTokenToLocal } from '../AuthContext'

function Header() {
    const { authToken, setAuthToken } = React.useContext(AuthContext);

    function logout() {
        setAuthToken('');
        SetAuthTokenToLocal('');
    }
    
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container d-flex justify-content-between">
                    <Link className="navbar-brand" to="/">解忧南杂店</Link>
                    {authToken === '' &&
                        <Link className="btn btn-outline-secondary" to="/login">登录</Link>
                    }
                    {authToken !== '' &&
                        <button className="btn btn-outline-secondary" onClick={logout}>注销</button>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;