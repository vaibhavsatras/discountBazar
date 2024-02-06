import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {store,persistor} from './store';
import { app } from './firebase.config';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} app = {app}>
    <PersistGate loading={"Loading"} persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);


