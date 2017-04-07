import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              
              <li><Link to = "home">Home</Link></li>
              <li><Link to = "about">About</Link></li>
              <li><Link to = "contact">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
