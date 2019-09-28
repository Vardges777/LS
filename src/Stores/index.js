import { combineReducers } from "redux";
import Users from "./Users/reducer";
import NewUser from "./NewUser/reducer";


export default combineReducers({
    Users,
    NewUser,
})
