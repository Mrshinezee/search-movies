import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import Search from './containers/Search/Search'


const App = () => (
  <Provider store={store}>
     <Search/>
  </Provider>
);

export default App;
