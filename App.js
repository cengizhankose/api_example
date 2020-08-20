import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Router from './src/Router';
import reducers from './src/reducers';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
