
import React, { Component } from 'react';
export class QueueSubmit extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            lastname: '',
            birthdate: ''
        }
    }

    handleChange = (event) => {
        var change = {}
        if (event.target.name == "name") {
            change = {name: event.target.value};
        } else if (event.target.name == "lastname") {
            change = {lastname: event.target.value};
        } else {
            change = {birthdate: event.target.value};
        }

        this.setState(change);
    }

    submit = () => {
        console.log(this.state);
    }

    render() { return (
        <div>
            <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label>
            <label>LastName: <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} /></label>
            <label>birthdate: <input type="date" name="birthdate" value={this.state.birthdate} onChange={this.handleChange}/></label>
            <button type="button" onClick={this.submit}>SUBMIT</button>
        </div>
    );
    }
}