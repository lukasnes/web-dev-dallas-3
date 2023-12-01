import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import axios from 'axios'
import './index.css';

axios.get('/api/invoice').then(({ data }) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App initialInvoiceList={data}/>
    </React.StrictMode>,
  );
})
