import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Component/redux/store';
import './App.css';
import Homescreen from './Component/route/Homescreen';
import Card from './Component/route/Homecard';
import Add from './Component/route/Homeadd'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route path="/Dashboard" component={Homescreen} />
      <Route path="/Add" component={Add} />
      <Route path="/home" component={Card} />
    </Router>
    </Provider>
  );
}

export default App;