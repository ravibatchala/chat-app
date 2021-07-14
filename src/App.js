import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Switch } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './styles/main.scss';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// import { Button } from 'rsuite';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
