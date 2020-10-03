import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './tailwindcss/dist/tailwind.css';
import './tailwindcss/dist/tailwind.min.css';
import './tailwindcss/dist/tailwind-experimental.css';
import './tailwindcss/dist/tailwind-experimental.min.css';
import './tailwindcss/dist/base.css';
import './tailwindcss/dist/base.min.css';
import './tailwindcss/dist/components.css';
import './tailwindcss/dist/components.min.css';
import './tailwindcss/dist/utilities.css';
import './tailwindcss/dist/utilities.min.css';
import Reducer from './component/Reducer';

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);