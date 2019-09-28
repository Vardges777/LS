import React, { Component } from 'react';
import { Provider } from "react-redux";

//components
import Welcome from "./components/Welcome/Welcome";
import  store from "./store";
import "./assets/Stylesheets/style.scss"

class  App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <div className="App">
                    <Welcome/>
                </div>
            </Provider>
        );
    }
}

export default App
