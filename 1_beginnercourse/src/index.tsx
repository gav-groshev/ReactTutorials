import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

 //TODO: react strict mode. Read: https://unetway.com/tutorial/reactjs-strogij-rezim-strict-mode
 //TODO: react JSX. Read: https://ru.legacy.reactjs.org/docs/introducing-jsx.html
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

