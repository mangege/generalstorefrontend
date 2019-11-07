import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Axios from 'axios';

import { AuthContext, GetAuthTokenByLocal } from './AuthContext'
import './App.css';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'


Axios.defaults.baseURL = 'http://192.168.2.181:3000';

function App() {
  const [authToken, setAuthToken] = React.useState('');

  let aToken = GetAuthTokenByLocal();
  if (aToken !== '' && aToken !== authToken) {
    Axios.defaults.headers.common['X-Token'] = aToken;
    setAuthToken(aToken);
  }
  React.useEffect(() => {

  }, [authToken]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
