import React, { Component } from 'react'
import { GetUsers, ChangeRole } from '../APIRequest'

export default class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        GetUsers().then((data) => {
            this.setState({ users: data });
        })
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Имя пользователя</td>
                            <td>Email</td>
                            <td>Роль</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users != null && this.state.users.map((user) =>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role.roleName}</td>
                                    <td><button onClick={() => {
                                        ChangeRole(user.id).then((data) => {
                                            this.setState({ users: data });
                                        })
                                    }}>Сменить роль</button></td>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
