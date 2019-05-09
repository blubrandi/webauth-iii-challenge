import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'

import Users from './components/Users'

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
      </main>
    </div>
  );
}

export default withRouter(App)
