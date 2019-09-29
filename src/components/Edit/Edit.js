import React, {Component} from "react";
import { connect } from 'react-redux';
import {Form, Row, Col, Input, Radio, Select} from 'antd';
import { NavLink } from "react-router-dom";
import { EditChange,MakeChange } from "../../Stores/Edit/action";
const { Option } = Select;

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            packageKind:props.UsersData.editableUser.packageKind,
            legal:props.UsersData.editableUser.legal,
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
    };
    render(){

        const { MakeChange,EditChange } = this.props;
        const { UsersData:{ editableUser } } = this.props;
        let content = <div className="registrationError"><span>Select the User for Edition</span> <NavLink className="goLink" to="/">Users</NavLink></div>;
        if (editableUser !== undefined){
           content = <Form  action="">
                   <Row className="userEditInfoSection">
                       <Col className="editInfo">
                             <span>
                                 Name
                             </span>
                           <Input type="text" name="name" placeholder="Name" value={ editableUser.name } className="editUserInfo" onChange={ EditChange }/>
                       </Col>
                       <Col className="editInfo">
                             <span>Surname
                             </span>
                           <Input type="text" name="lastName" placeholder="LastName" value={ editableUser.lastName } className="editUserInfo" onChange={ EditChange }/>
                       </Col>
                       <Col className="editInfo">
                            <span>
                                Country
                            </span>
                           <Input type="text" name="country" placeholder="Country" value={ editableUser.country } className="editUserInfo" onChange={ EditChange }/>
                       </Col>
                       <Col className="editInfo">
                            <span>
                                City
                            </span>
                           <Input type="text" name="city" placeholder="City" value={ editableUser.city } className="editUserInfo" onChange={ EditChange }/>
                       </Col>
                       <Col className="editInfo">
                           <span>
                              Address
                           </span>
                           <Input type="text" name="address" placeholder="Address" value={ editableUser.address } className="editUserInfo" onChange={ EditChange }/>
                       </Col>
                       <Col className="editInfo">
                           <span>
                              Address2
                           </span>
                           <Input type="text" name="address2" placeholder="Address" value={ editableUser.address2 }  onChange={ EditChange }/>
                       </Col>
                       <Col className="editInfo">
                           <Select defaultValue={ this.state.legal } onChange = { this.changeLegal }>
                               <Option value="Company">Company</Option>
                               <Option value="Individual">Individual</Option>
                           </Select>
                       </Col>
                       <Col className="editInfo">
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
                   </Row>
                    <Row className="usersButton">
                        <input className="goLink" type="submit" value="Save" packagekind = { this.state.packageKind } legal={ this.state.legal } onClick={ MakeChange }/>
                        <NavLink className="goLink" to="/">Users</NavLink>
                    </Row>
           </Form>
       }
        return(
            <div className="editUserContent"><div className="title">Edit User Profile</div>{content}</div>
        )
    }
}

export default connect (
    state => ({
        UsersData:state.Users,
    }),
    {
        EditChange,
        MakeChange
    }
)(Edit)
