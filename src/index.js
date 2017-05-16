import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import Basic from './Basic.js';
import Basicget from './Basicget.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



ReactDOM.render(
 <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/basic" component={Basic}/>
        <Route path="/basicget" component={Basicget}/>
 
      </div>
  </Router>,
  
  document.getElementById('root')
);
