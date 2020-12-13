import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavTab from './components/NavTab';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Container from './components/Container';

function App() {
  return (
    <Container>
      <NavTab />
      <Switch>
        <Route path="/" exact component={Tab1} />
        <Route path="/tab2" component={Tab2} />
      </Switch>
    </Container>
  );
}

export default App;
