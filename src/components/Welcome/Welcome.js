import React, {Component} from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import UserPage from "../Users/Users";
import NewUser from '../NewUser/NewUser'
import Edit from "../Edit/Edit"

class Welcome extends Component{

    render(){
        return (
            <Router>
                <Route path='/' exact component = { UserPage }/>
                <Route path='/NewUser' exact component = { NewUser }/>
                <Route path='/Edit' exact component = { Edit }/>
            </Router>
        )
    }
}

export default Welcome
