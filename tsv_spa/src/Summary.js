/**
 * Created by jakim on 11/19/17.
 */
import React, { Component } from "react";

class Summary extends React.Component {
    render() {
        return (
            <div>
                <h2>Total Population</h2>
                <ul>
                    <li>% Male</li>
                    <li>% Female</li>
                </ul>
                <h2>Total Households</h2>
                <ul>
                    <li>Average Income</li>
                    <li>Median Income</li>
                </ul>
            </div>
        );
    }
}

export default Summary