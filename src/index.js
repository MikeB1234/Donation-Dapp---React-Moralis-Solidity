import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <>
    <MoralisProvider appId='KsxwVVcXp3IGnJ7jnbY62ZLBwoW5jSncZPHSJQOO' serverUrl='https://ad6jtuhonsmj.usemoralis.com:2053/server'>
      <App />
    </MoralisProvider>
  </>,
  document.getElementById('root')
);


