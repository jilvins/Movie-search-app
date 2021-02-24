import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from './App/pageContext.js'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App/index.js';


ReactDOM.render(
  <ContextProvider>
    <Router>
    <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);

