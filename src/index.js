import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') );
function ref() {
  root.render(
    <div>
  <App c="green" t="18px"/>
  <App c="black" t="18px"/>
  </div>
  );
}

setInterval( ref,1000 ) ;
