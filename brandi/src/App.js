import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'

import Users from './components/Users'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

// import './App.css';

function App(props) {

  function logout() {
    localStorage.removeItem('jwt')
    props.history.push('/login')
  }

  return (
    <div className="App">
      <header>
        <NavLink to='/login'> Login</NavLink> |
      <NavLink to='/users'> Users</NavLink> |
      <NavLink to='/register'> Register</NavLink> |
        <div onClick={logout}> Logout</div>
      </header>
      <h1>Hey there from React app!</h1>
      <main>
        <Route path='/users' component={Users} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </main>
    </div>
  );
}

export default withRouter(App)
