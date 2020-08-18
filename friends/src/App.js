import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Components
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
