import React, { Component } from 'react';

import { Form, Button, Label, Control, Check } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Login extends Component {
    displayName = Register.name

    constructor(props) {
        super(props);
        this.state = { UserName: '', Password: '', logs: '', responseStatus: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUserNameChange(event) {
        this.setState({ UserName: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ Password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        var registerData = { "UserName": this.state.UserName.value, "Password": this.state.Password.value };
        //console.log("TO SEND: " + JSON.parse(registerData));

        if (this.state.email != '' && this.state.email != '') {
            fetch('User/Login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ UserName: this.state.UserName, Password: this.state.Password })
            })
                .then(response => response.json())
                .then(data => {
                    this.state.responseStatus = data.message;
                    console.log("DATA: " + data.message);
                })
                .catch(err => {
                    this.state.responseStatus = "Pojawił się błąd";
                });
        }
    }

    render() {
        return (
            <div>
                <h1>Logowanie</h1>
                <p> Status: {this.state.responseStatus} </p>
                <p>Podaj swoje dane</p>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Nazwa użytkownika:
                    <input type="text" name="username" value={this.state.UserName} onChange={this.handleUserNameChange} />
                    </label><br />
                    <label>
                        Hasło:
                    <input type="password" name="password" value={this.state.Password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>

            </div>
        );
    }
}
