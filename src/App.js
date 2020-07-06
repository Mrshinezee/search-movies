import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Search from './containers/Search'


const App = () => (
  <Provider store={store}>
     <Search/>
  </Provider>
);

export default App;
