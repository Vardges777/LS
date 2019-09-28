import React, {Component} from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { EditChange,MakeChange } from "../../Stores/Edit/action";
import { input } from "antd"

class Edit extends Component {
    render(){
        const { MakeChange,EditChange } = this.props;
        const { UsersData:{ editableUser } } = this.props;
        let content = <div>Select the User for Edition <NavLink className="goLink" to="/">Users</NavLink></div>;
       if (editableUser !== undefined){
           content = <form  action="">
                   <div className="userEditInfo">
                       <div className="editInfo">
                             <span>
                                 Name
                             </span>
                           <input type="text" name="name" placeholder="Name" value={ editableUser.name } className="editUserInfo" onChange={ EditChange }/>
                       </div>
                       <div className="editInfo">
                             <span>Surname
                             </span>
                           <input type="text" name="surname" placeholder="Surname" value={ editableUser.surname } className="editUserInfo" onChange={ EditChange }/>
                       </div>
                       <div className="editInfo">
                            <span>
                                Country
                            </span>
                           <input type="text" name="country" placeholder="Country" value={ editableUser.country } className="editUserInfo" onChange={ EditChange }/>
                       </div>
                       <div className="editInfo">
                            <span>
                                City
                            </span>
                           <input type="text" name="city" placeholder="City" value={ editableUser.city } className="editUserInfo" onChange={ EditChange }/>
                       </div>
                       <div className="editInfo">
                           <span>
                              Email
                           </span>
                           <input type="text" name="email" placeholder="Email" value={ editableUser.email } className="editUserInfo" onChange={ EditChange }/>
                       </div>
                       <div className="editInfo">
                           <span>
                              Phone
                           </span>
                           <input type="text" name="phone" placeholder="Phone" value={ editableUser.phone } className="editUserInfo" onChange={ EditChange }/>
                       </div>
                       <div className="editInfo">
                           <span>
                              Address
                           </span>
                           <input type="text" name="address" placeholder="Address" value={ editableUser.address } className="editUserInfo" onChange={ EditChange }/>
                       </div>
                       <div className="editInfo">
                           <span>
                              Address2
                           </span>
                           <input type="text" name="address" placeholder="Address" value={ editableUser.address2 }  onChange={ EditChange }/>
                       </div>
                       <div className="editInfo">
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
                       </div>
                       <div className="editInfo">
                           <span>Package</span>
                           <label htmlFor="">
                               <input
                                   type="radio"
                                   name="packageKind"
                                   value="Standard"
                                   onChange = { EditChange }
                                   checked = {editableUser.packageKind === "Standart"}
                               />
                               Standart Package
                           </label>
                           <label htmlFor="">
                               <input
                                   type="radio"
                                   name="packageKind"
                                   value="Premium"
                                   onChange = { EditChange }
                                   checked = {editableUser.packageKind === "Premium"}
                               />
                               Premium Package
                           </label>
                       </div>
                   </div>
                    <div className="usersButton">
                        <input className="goLink" type="submit" value="Save" onClick={ MakeChange }/>
                        <NavLink className="goLink" to="/">Users</NavLink>
                    </div>
           </form>
       }
        return(
            <div>{content}</div>
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
