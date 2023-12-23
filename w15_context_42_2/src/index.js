import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App_xx from './App_xx';
import { BlogContextProvider_42 } from './BlogContext_42';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_42>
      <App_xx />
    </BlogContextProvider_42>
    
  </React.StrictMode>
);
