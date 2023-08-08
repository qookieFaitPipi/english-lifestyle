import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// react-router-dom
import {BrowserRouter} from 'react-router-dom';

// redux
import { Provider } from 'react-redux'
import { store } from './redux/store';

// redux-persist
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);