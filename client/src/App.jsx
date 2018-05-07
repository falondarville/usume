import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Navbar from './components/CustomNavbar';

class App extends Component {
  // state = {
  //   response: ''
  // };

  // componentDidMount(){
  //   this.CallApi()
  //   .then(res => this.setState({ response: res.express }))
  //   .catch(err => console.log(err));
  // }

  // callApi = async() => {
  //   const response = await fetch('/users');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // }

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
