import React, { useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import { AuthContext, SetAuthTokenToLocal } from '../AuthContext'
import Clipboard from 'react-clipboard.js';
import Toast from './Toast'

function RegisterTips() {
    return (
        <Fragment>
            <div className="alert alert-success" role="alert">
                注册成功!点击下文复制按钮复制登录口令,请妥善保存您的登录口令. <br />
                点登录按钮即可登录.
            </div>
            <div className="alert alert-danger" role="alert">
                注意:遗忘登录口令无法找回,即对应用户无法登录.
            </div>
        </Fragment>
    );
}

function LoginPage() {
    const [loginToken, setLoginToken] = useState('');
    const [showRegisterTips, setShowRegisterTips] = useState(false);
    const [loginTips, setLoginTips] = useState('');
    const history = useHistory();
    const { setAuthToken } = React.useContext(AuthContext);

    function register() {
        Axios.post('/api/users').then((resp) => {
            if (resp.data.data && resp.data.data.attributes && resp.data.data.attributes.uuid) {
                setLoginTips('');
                setShowRegisterTips(true);
                setLoginToken(resp.data.data.attributes.uuid);
            }
        }).catch((err) => {
            setLoginTips("注册异常");
        });
    }

    function login() {
        if (!loginToken || loginToken.length !== 36) {
            setLoginTips('登录口令无效');
            return;
        }

        Axios.post('/api/login', { uuid: loginToken }).then((resp) => {
            if (resp.data.data && resp.data.data.attributes && resp.data.data.attributes.uuid === loginToken) {
                setLoginTips('');
                setAuthToken(loginToken);
                SetAuthTokenToLocal(loginToken);
                history.push('/');
            } else {
                setLoginTips('登录异常');
            }
        }).catch((err) => {
            if (err.response && err.response.data && err.response.data.msg) {
                setLoginTips(err.response.data.msg);
            } else {
                setLoginTips('登录异常');
            }
        });


    }

    function handleInputChange(event) {
        setLoginToken(event.target.value);
    }

    const [showCopyTips, setShowCopyTips] = useState(false);
    function onCopySuccess() {
        setShowCopyTips(true);
        setTimeout(() => setShowCopyTips(false), 1000);
    }

    return (
        <div className="login-page bg-light">
            <div className="login-wrap">
                {showRegisterTips &&
                    <RegisterTips />
                }
                {!!loginTips &&
                    <div className="alert alert-warning">{loginTips}</div>
                }

                <input type="text" className="form-control" value={loginToken} onChange={handleInputChange} onKeyPress={e => { e.key === 'Enter' && login() }} placeholder="登录口令" />
                <button className="btn btn-secondary mt-2" onClick={register}>注册</button>
                <button className="btn btn-primary mt-2" onClick={login}>登录</button>
                {showRegisterTips &&
                    <Clipboard component="button" onSuccess={onCopySuccess} className="btn btn-warning mt-2" data-clipboard-text={loginToken}>复制登录口令</Clipboard>
                }
                <div className="alert alert-info mt-2" role="alert">
                    注册无需填写任何信息,点击注册即会随机生成登录口令并注册!
                </div>
            </div>
            {showCopyTips &&
                <Toast tips="复制登录口令成功!" />
            }
        </div>
    );
}

export default LoginPage;