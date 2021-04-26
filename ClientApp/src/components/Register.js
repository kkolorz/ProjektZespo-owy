import React, { Component } from 'react';

import { Form, Button, Label, Control, Check } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Register extends Component {
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
        console.log(this.state.UserName);

        var form = event.target;
        console.log(form.username.value);

        if (this.state.email != '' && this.state.email != '') {
            fetch('User/Register', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ UserName: event.target.username.value, Password: event.target.password.value })
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ responseStatus: data.message });
            })
                .catch(err => {
                    this.setState({ responseStatus: err.message });
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Rejestracja</h1>

                <p> Status: {this.state.responseStatus} </p>
                <form onSubmit={this.handleSubmit} >
                    <div class="form-group">
                        <label>Nazwa użytkownika</label>
                        <input type="text" name="username" class="form-control" aria-describedby="emailHelp" />
                    </div>

                    <div class="form-group">
                        <label>Hasło</label>
                        <input type="password" name="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" class="btn btn-primary">Potwierdź</button>
                </form>


            </div>
        );
    }
}
