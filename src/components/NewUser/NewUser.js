import React, {Component} from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom"
import { HandleChange,SubmitForm } from "../../Stores/NewUser/action";

class NewUser extends Component{
    render(){
        const { HandleChange,SubmitForm } = this.props;
        return(
            <form action="">
                    <div className="userAddInfo">
                        <input type="text" name="name" placeholder="Name" className="newUserInfo"  onChange={ HandleChange } />
                        <input type="text" name="lastName" placeholder="LastName" className="newUserInfo"  onChange={ HandleChange }/>
                        <input type="text" name="country" placeholder="Country" className="newUserInfo"  onChange={ HandleChange }/>
                        <input type="text" name="city" placeholder="City" className="newUserInfo"  onChange={ HandleChange }/>
                        <input type="text" name="email" placeholder="Email" className="newUserInfo"  onChange={ HandleChange }/>
                        <input type="text" name="phone" placeholder="Phone" className="newUserInfo"  onChange={ HandleChange }/>
                        <input type="text" name="address" placeholder="Address" className="newUserInfo"  onChange={ HandleChange }/>
                        <input type="text" name="address2" placeholder="Address2"  onChange={ HandleChange }/>
                        <div>
                            <span>Package</span>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="packageKind"
                                    value="Standard"
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
                        <div>
                        <span>
                            Legal
                        </span>
                        <select name="legal" value="Company"   onChange={ HandleChange }>

                            <option value="Company">Company</option>
                            <option value="Individual ">Individual</option>
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

