import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavTab from './components/NavTab';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Container from './components/Container';
import Row from './components/Row';

function App() {
  return (
    <Container>
      <Row>
        <NavTab />
        <Switch>
          <Route path="/" exact component={Tab1} />
          <Route path="/tab2" component={Tab2} />
        </Switch>
      </Row>
    </Container>
  );
}

export default App;
