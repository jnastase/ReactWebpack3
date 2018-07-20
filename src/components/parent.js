import React, { Component } from 'react';

export default class Parent extends Component {

    render() {
        return (
            <div>
                <h2>I am a parent component</h2>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}