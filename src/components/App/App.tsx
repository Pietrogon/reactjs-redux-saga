import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from '../Login/Login';
import Projects from '../Projects/Projects';
import Menu from '../Menu/Menu';
import { Screen, FlexRow } from './Styled';

function App() {
  return (
    <Router>
      <FlexRow>
        <Menu>
          <Link to="/">Login</Link>
        </Menu>
        <Screen>
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>
            <Route path="/Projects">
              <Projects></Projects>
            </Route>
          </Switch>
        </Screen>
      </FlexRow>
    </Router>
  );
}

export default App;
