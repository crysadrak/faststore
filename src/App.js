import React, { Component } from 'react';
import './App.css';
import firebase from './config/firebase.js';

class App extends Component {
  /* ================================================================================== */
  constructor() {
    super();

    this.state = {
      appStatus: 'init',
      username: '',
      users: []
    }

    this._firebaseAuth = firebase.auth().signInAnonymously().catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('signInAnonymously failed', errorCode, errorMessage);
    });

    this._firebaseDatabase = firebase.database();

    this._firebaseCallback = null;
  }
    /* ================================================================================== */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Faststore</h1>
        </header>
      </div>
    );
  }
}

export default App;
