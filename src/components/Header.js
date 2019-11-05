import React from 'react';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand" href="#">解忧南杂店</a>
                    <button type="button" className="btn btn-outline-secondary">登录</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;