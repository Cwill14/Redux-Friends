import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import PrivateRoute from './PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Login} />
      <PrivateRoute path="/list" component={FriendsList} />
    </div>
  );
}

export default App;
