import React, {Component} from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom"
import { HandleChange,SubmitForm } from "../../Stores/NewUser/action";

class NewUser extends Component{
    render(){
        const { HandleChange,SubmitForm } = this.props;
        return(
            <form action="">
                <div className="title">Registration</div>
                    <div className="userAddInfo">
                        <div className="addUserInfo">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Name" className="newUserInfo"  onChange={ HandleChange } />
                        </div>
                        <div className="addUserInfo">
                            <span>LastName</span>
                            <input type="text" name="lastName" placeholder="LastName" className="newUserInfo"  onChange={ HandleChange }/>
                        </div>
                        <div className="addUserInfo">
                            <span>Country</span>
                            <input type="text" name="country" placeholder="Country" className="newUserInfo"  onChange={ HandleChange }/>
                        </div>
                        <div className="addUserInfo">
                            <span>City</span>
                            <input type="text" name="city" placeholder="City" className="newUserInfo"  onChange={ HandleChange }/>
                        </div>
                        <div className="addUserInfo">
                            <span>Name</span>
                            <input type="text" name="email" placeholder="Email" className="newUserInfo"  onChange={ HandleChange }/>
                        </div>
                        <div className="addUserInfo">
                            <span>Phone</span>
                            <input type="number" name="phone" placeholder="Phone" className="newUserInfo"  onChange={ HandleChange }/>
                        </div>
                        <div className="addUserInfo">
                            <span>Address</span>
                            <input type="text" name="address" placeholder="Address" className="newUserInfo"  onChange={ HandleChange }/>
                        </div>
                       <div className="addUserInfo">
                           <span>Address2</span>
                           <input type="text" name="address2" placeholder="Address2"  onChange={ HandleChange }/>
                       </div>
                        <div className="addUserInfo">
                            <span>Package</span>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="packageKind"
                                    value="Standart"
                                    onChange = { HandleChange }
                                    checked
                                />
                                Standart Package
                            </label>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="packageKind"
                                    value="Premium"
                                    onChange = { HandleChange }
                                />
                                Premium Package
                            </label>
                        </div>
                        <div className="addUserInfo">
                        <span>
                            Legal
                        </span>
                        <select name="legal" onClick = { HandleChange }>
                            <option value="Company" selected>Company</option>
                            <option value="Individual">Individual</option>
                        </select>
                        </div>
                    </div>
                <div className="usersButton">
                    <input className="goLink" type="submit" value="Submit" onClick={ SubmitForm }/>
                    <NavLink className="goLink" to="/">Users</NavLink>
                </div>
            </form>
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

