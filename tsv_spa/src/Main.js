/**
 * Created by jakim on 11/19/17.
 */
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Summary from "./Summary";
import Demographics from "./Demographics";
import Generation from "./Generation";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Summary</NavLink></li>
                        <li><NavLink to="/demographics">Demographics</NavLink></li>
                        <li><NavLink to="/generation">Generation</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Summary}/>
                        <Route path="/demographics" component={Demographics}/>
                        <Route path="/generation" component={Generation}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
