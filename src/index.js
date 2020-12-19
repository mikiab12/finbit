import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './routes/navigator';
import { Provider } from 'react-redux';
import { createBrowserHistory, BrowserHistoryBuildOptions } from 'history';
import { configureStore } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router';

import reportWebVitals from './reportWebVitals';

export const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
                   <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
