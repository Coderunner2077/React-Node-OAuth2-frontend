import React, { useContext} from 'react';
import Homepage from './components/Homepage/Homepage';
import LoginPage from './components/LoginPage/LoginPage';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import "./GlobalStyles.css";
import { myContext } from './AuthContext';

function App() {
  const currentUser = useContext(myContext);
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
