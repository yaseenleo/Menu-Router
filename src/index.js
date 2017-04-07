import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import App from './App'
import About from './components/about';
import Contact from './components/contact';
import  {Router, Route ,browserHistory} from 'react-router'

ReactDOM.render(
  <div>
  <App/>,
  <Router history={browserHistory}>
    <Route path='/about' component={About}></Route>
    <Route path='contact' component={Contact}></Route>
    <Route path="/" component={Home} > </Route>
    
    {/*<Route path='/components' Component={Home}></Route>*/}
        
    

  </Router>,
  </div>,
  document.getElementById('root')
);
