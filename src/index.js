import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify'
import App from './App';
import store from './store'

import './index.css'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store = {store} >
    <React.StrictMode>
      <App />
      <ToastContainer autoClose={3000} hideProgressBar={true} newestOnTop={true} limit={1}/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
