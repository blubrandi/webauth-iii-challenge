import React from 'react'
import axios from 'axios'

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
}

export default Users