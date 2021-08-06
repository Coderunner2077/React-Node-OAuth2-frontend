import React from 'react';
import Homepage from './components/Homepage/Homepage';
import LoginPage from './components/LoginPage/LoginPage';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
