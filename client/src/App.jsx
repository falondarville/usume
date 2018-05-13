import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Navbar from './components/CustomNavbar';
import LoggedIn from './components/loggedin';
import Logout from './components/logout';

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
          <Route path='/loggedin' component={LoggedIn} />
          <Route path='/logout' component={Logout} />;
          <Route path='*' component={Home} />
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
