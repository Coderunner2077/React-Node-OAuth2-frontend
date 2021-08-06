import React from 'react';
import Homepage from './components/Homepage/Homepage';
import LoginPage from './components/LoginPage/LoginPage';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
