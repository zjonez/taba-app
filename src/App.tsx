import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavTab from './components/NavTab';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Container from './components/Container';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AllReducers from './reducers';

const store = createStore(AllReducers);

function App() {
  return (
    <Provider store={store}>
      <Container>
        <NavTab />
        <Switch>
          <Route path="/" exact component={Tab1} />
          <Route path="/tab2" component={Tab2} />
        </Switch>
      </Container>
    </Provider>
  );
}

export default App;
