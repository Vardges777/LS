import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col, } from 'antd'
import { NavLink } from "react-router-dom";
import { ShowUser,Delete } from "../../Stores/Users/action";
class UserPage extends Component {

    render() {
        const { UsersData:{ users } } = this.props;
        const { ShowUser,Delete } = this.props;
        return (
            <Row className="users">
                <Row className="title">Users List</Row>
                {users.map((user,index) => (
                    <Row key={index} className="individualUser">
                        <Row className="userInfoList">
                            <Col xs = {24} sm = {24} md = {5} lg = {4} xl = {3} className="userInfo">Name: &nbsp;&nbsp; <span>{ user.name }</span></Col>
                            <Col xs = {24} sm = {24} md = {5} lg = {4} xl = {3} className="userInfo">Last Name: &nbsp;&nbsp;  <span>{ user.lastName }</span></Col>
                            <Col xs = {24} sm = {24} md = {5} lg = {4} xl = {3} className="userInfo">Country: &nbsp;&nbsp;  <span>{ user.country }</span></Col>
                            <Col xs = {24} sm = {24} md = {5} lg = {4} xl = {3} className="userInfo">City: &nbsp;&nbsp;  <span>{ user.city }</span></Col>
                            <Col xs = {24} sm = {24} md = {5} lg = {4} xl = {3} className="userInfo">Address: &nbsp;&nbsp;  <span>{ user.address }</span></Col>
                            <Col xs = {24} sm = {24} md = {5} lg = {4} xl = {3} className="userInfo">Legal: &nbsp;&nbsp; <span>{ user.legal }</span></Col>
                            <Col xs = {24} sm = {24} md = {5} lg = {4} xl = {3} className="userInfo">Package: &nbsp;&nbsp; <span>{ user.packageKind }</span></Col>
                        </Row>
                        <Row className="usersButton">
                            <NavLink className="goLink" to="/Edit" id ={ index } onClick = { ShowUser }>Edit Profile</NavLink>
                            <span className="delete" id = { index } onClick={ Delete }>Delete User</span>
                        </Row>
                    </Row>
                ))}
                <NavLink to="/NewUser" className="goLink">Add New User</NavLink>
            </Row>
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
