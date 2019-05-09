import React from 'react'
import axios from 'axios'

import requiresAuth from './auth/requiresAuth'

class Users extends React.Component {
    state = {
        users: []
    }

    render() {

        return (
            <>
                <h2>Our Users</h2>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.username}<br />
                            {user.department}
                        </li>
                    ))}
                </ul>
            </>
        )

    }

    componentDidMount() {
        const endpoint = '/users'

        axios
            .get(endpoint)
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(err => console.log(err))
    }
}

export default requiresAuth(Users)