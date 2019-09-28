import React, {Component} from "react";
import { connect } from 'react-redux';
import { Form, Row, Col, Input, Button, Icon,InputNumber  } from 'antd';
import { NavLink } from "react-router-dom";
import { EditChange,MakeChange } from "../../Stores/Edit/action";

class Edit extends Component {
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
                           <Input type="text" name="address" placeholder="Address" value={ editableUser.address2 }  onChange={ EditChange }/>
                       </Col>
                       <Col className="editInfo">
                            <span>
                                Legal
                            </span>
                           <select
                               name="legal"
                               value={editableUser.legal}
                               onChange={ EditChange }>
                               <option value="Company">Company</option>
                               <option value="Individual">Individual</option>
                           </select>
                       </Col>
                       <Col className="editInfo">
                           <span>Package</span>
                           <label htmlFor="">
                               <Input
                                   type="radio"
                                   name="packageKind"
                                   value="Standart"
                                   onChange = { EditChange }
                                   checked = {editableUser.packageKind === "Standart"}
                               />
                               Standart Package
                           </label>
                           <label htmlFor="">
                               <Input
                                   type="radio"
                                   name="packageKind"
                                   value="Premium"
                                   onChange = { EditChange }
                                   checked = {editableUser.packageKind === "Premium"}
                               />
                               Premium Package
                           </label>
                       </Col>
                   </Row>
                    <Row className="usersButton">
                        <input className="goLink" type="submit" value="Save" onClick={ MakeChange }/>
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
        UsersData:state.Users
    }),
    {
        EditChange,
        MakeChange
    }
    )(Edit)
