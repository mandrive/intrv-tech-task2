import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { QueueSubmit } from './QueueSubmit';
import { QueueStatus } from './QueueStatus';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
        <Switch>
          <Route exact path='/' component={QueueSubmit}/>
          <Route path='/status' component={QueueStatus}/>
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
