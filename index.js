import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import App from './App'
import About from './components/about';
import Contact from './components/contact';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  
  <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path='/home' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='contact' component={Contact}></Route>
      </Route>

      {/*<Route path='/components' Component={Home}></Route>*/}



    </Router>,
 
  document.getElementById('root')
);
