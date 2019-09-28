import React, { Component } from "react"
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom"
import { ShowUser,Delete } from "../../Stores/Users/action"
class UserPage extends Component {

    render() {
        const { UsersData:{ users } } = this.props;
        const { ShowUser,Delete } = this.props;
        console.log(users);
        return (
            <div className="users">
                {users.map((user,index) => (
                    <div key={index} className="individualUser">
                        <div className="userInfoList">
                            <div className="userInfo">Name: &nbsp;&nbsp; <span>{ user.name }</span></div>
                            <div className="userInfo">Last Name: &nbsp;&nbsp;  <span>{ user.surname }</span></div>
                            <div className="userInfo">Country: &nbsp;&nbsp;  <span>{ user.country }</span></div>
                            <div className="userInfo">City: &nbsp;&nbsp;  <span>{ user.city }</span></div>
                            <div className="userInfo">Address: &nbsp;&nbsp;  <span>{ user.address }</span></div>
                            <div className="userInfo">Email: &nbsp;&nbsp; <span>{ user.email }</span></div>
                            <div className="userInfo">Legal: &nbsp;&nbsp; <span>{ user.legal }</span></div>
                            <div className="userInfo">Package: &nbsp;&nbsp; <span>{ user.packageKind }</span></div>
                        </div>
                        <div className="usersButton">
                            <NavLink className="goLink" to="/Edit" id ={ index } onClick = { ShowUser }>Edit Profile</NavLink>
                            <span className="delete" id = { index } onClick={ Delete }>Delete User</span>
                        </div>
                    </div>
                ))}
                <NavLink to="/NewUser" className="goLink">Add New User</NavLink>
            </div>
        )
    }
}

export default connect(
    state => ({
        UsersData:state.Users
    }),
    {
        ShowUser,
        Delete
    }
)(UserPage)
