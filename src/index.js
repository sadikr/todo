import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import './assets/css/index.css';
import registerServiceWorker from './workers/';

const rootEl = document.getElementById('root');
let store = createStore(todoApp);
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
  registerServiceWorker()
);
