import React from 'react';
import ReactDOM from 'react-dom';
//React 18: import { createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> , 
  document.getElementById('root')
);

/* React18:React Dom creates below new roots object class and this is what we used to render into our app,

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
 <React.StrictMode>
 <App />
 </React.StrictMode>
);   */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 