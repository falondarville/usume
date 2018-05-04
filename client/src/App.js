import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { users: [] }

  // this will be forwarded to the express server
  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.username}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
