import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'

import Users from './components/Users'
import Login from './components/auth/Login'

// import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to='/login'>Login</NavLink> |
      <NavLink to='/users'>Users</NavLink>
      </header>
      <h1>Hey there from React app!</h1>
      <main>
        <Route path='/users' component={Users} />
        <Route path='/login' component={Login} />
      </main>
    </div>
  );
}

export default withRouter(App)
