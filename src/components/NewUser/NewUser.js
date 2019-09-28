import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom"
import { HandleChange,SubmitForm } from "../../Stores/NewUser/action";
import { Form, Row, Col, Input, Radio, Select } from 'antd'
const { Option } = Select;
class NewUser extends Component{
    constructor(){
        super();
        this.state = {
            packageKind:"Standart",
            legal:"Company"
        }
    }
     onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        });
     };
    changeLegal = e => {
        this.setState({
            legal:e
        })
    }

    render(){
        const { HandleChange,SubmitForm } = this.props;
        return(
            <Form action="">
                <Row className="title">Registration</Row>
                    <Row className="userAddInfo">
                        <Col className="addUserInfo">
                            <span>Name</span>
                            <Input type="text" name="name" placeholder="Name" className="newUserInfo"  onChange={ HandleChange } />
                        </Col>
                        <Col className="addUserInfo">
                            <span>LastName</span>
                            <Input type="text" name="lastName" placeholder="LastName" className="newUserInfo"  onChange={ HandleChange }/>
                        </Col>
                        <Col className="addUserInfo">
                            <span>Country</span>
                            <Input type="text" name="country" placeholder="Country" className="newUserInfo"  onChange={ HandleChange }/>
                        </Col>
                        <Col className="addUserInfo">
                            <span>City</span>
                            <Input type="text" name="city" placeholder="City" className="newUserInfo"  onChange={ HandleChange }/>
                        </Col>

                        <Col className="addUserInfo">
                            <span>Address</span>
                            <Input type="text" name="address" placeholder="Address" className="newUserInfo"  onChange = { HandleChange }/>
                        </Col>
                       <Col className="addUserInfo">
                           <span>Address2</span>
                           <Input type="text" name="address2" placeholder="Address2"  onChange = { HandleChange }/>
                       </Col>
                        <Col className="addUserInfo">
                            <span>Package</span>
                            <Radio.Group name="packageKind" onChange = { this.onChange } value={this.state.packageKind}>
                                <Radio  type="radio"
                                        name="packageKind"
                                        value="Standart"
                                        className="userPackage"
                                >  Standart Package</Radio>
                                <Radio  type="radio"
                                        name="packageKind"
                                        value="Premium"
                                        className="userPackage">
                                    Premium Package
                                </Radio>
                            </Radio.Group >
                        </Col>
                        <Col className="addUserInfo">
                           <Select defaultValue={this.state.legal} onChange = { this.changeLegal }>
                               <Option value="Company">Company</Option>
                               <Option value="Individual">Individual</Option>
                           </Select>
                        </Col>
                    </Row>
                <Row className="usersButton">
                    <input className="goLink" type="submit" value="Submit" packagekind={ this.state.packageKind } legal={ this.state.legal } onClick={ SubmitForm }/>
                    <NavLink className="goLink" to="/">Users</NavLink>
                </Row>
            </Form>
        )
    }
}

export default connect(
   null,
    {
        HandleChange,
        SubmitForm
    }
    )(NewUser)

