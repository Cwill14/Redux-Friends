import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/list" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
