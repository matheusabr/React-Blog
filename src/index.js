import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hi extends React.Component {
  render() {
    return <div>Hi!!!</div>
  }
}

class Bye extends React.Component {
  render() {
    return <div>Bye!!!</div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h2>Header</h2>
        <Route path="/hi" component={Hi} />
        <Route path="/bye" component={Bye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
