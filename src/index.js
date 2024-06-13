import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') );
function ref() {
  root.render(
    <div>
  <App c="green" t="22px"/>
  <App c="red" t="32px"/>
  </div>
  );
}

setInterval( ref,1000 );
