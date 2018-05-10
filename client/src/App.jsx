import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='*' component={Home} />
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
