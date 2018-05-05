import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Navbar from './components/CustomNavbar';

class App extends Component {

  render() {
    return (

    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </div>
    </Router>

    );
  }
}

export default App;
