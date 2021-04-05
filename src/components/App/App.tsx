import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../Login/Login';
import { Screen, FlexRow } from './Styled';
import { Projects } from '../Projects/Projects';
import { Appointments } from '../Appointments/Appointments';

function App() {
  return (
    <Router>
      <FlexRow>
        <Screen>
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/appointments">
              <Appointments></Appointments>
            </Route>
          </Switch>
        </Screen>
      </FlexRow>
    </Router>
  );
}

export default App;
