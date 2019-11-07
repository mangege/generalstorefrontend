import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AuthContext, GetAuthTokenByLocal } from './AuthContext'
import './App.css';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

function App() {
  const [authToken, setAuthToken] = React.useState('');

  let aToken = GetAuthTokenByLocal();
  if (aToken !== '' && aToken !== authToken) {
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
