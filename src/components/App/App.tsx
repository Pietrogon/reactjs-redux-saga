import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
