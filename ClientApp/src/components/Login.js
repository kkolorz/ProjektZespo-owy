import React, { Component } from 'react';

import { Form, Button, Label, Control, Check } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Login extends Component {
    displayName = Login.name

    constructor(props) {
        super(props);
        this.state = { UserName: '', Password: '', logs: '', responseStatus: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.setLogged = this.setLogged.bind(this);

    }

    handleUserNameChange(event) {
        this.setState({ UserName: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ Password: event.target.value });
    }

    setLogged() {
        sessionStorage.setItem('logged', 'true');
    }

    handleSubmit(event) {
        event.preventDefault();

        var registerData = { "UserName": this.state.UserName.value, "Password": this.state.Password.value };
        //console.log("TO SEND: " + JSON.parse(registerData));

        if (this.state.email != '' && this.state.email != '') {
            fetch('User/Login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ UserName: event.target.username.value, Password: event.target.password.value })
            })
                .then(response => response.json())
                .then(data => {
                    console.log("XD1");
                    console.log(data);
                    this.setState({ responseStatus: data.message });
                    if (data.message === "Logowanie pomyślne") {
                        this.setLogged();
                        const { history } = this.props;
                        history.push('/adminpanel');
                    }
                })
                .catch(err => {
                    console.log("XDerr");
                    this.setState({ responseStatus: err.message });
                });
        }
    }

    render() {
        return (
            <div>
                <h1>Logowanie</h1>
                <h2> Status: {this.state.responseStatus} </h2>

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
