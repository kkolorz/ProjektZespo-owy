import React, { Component } from 'react';

import { Form, Button, Label, Control, Check } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Logout extends Component {
    displayName = Logout.name

    constructor(props) {
        super(props);
        this.performLogout = this.performLogout.bind(this);
        this.setLogout = this.setLogout.bind(this);

    }

    componentDidMount() {
        this.performLogout();
    }

    performLogout() {
        console.log("PERFORMING LOGOUT");
        fetch('User/Logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setLogout();
                const { history } = this.props;
                history.push('/');
            })
            .catch(err => {
                this.setState({ responseStatus: err.message });
            });
    }

    setLogout() {
        sessionStorage.setItem('logged', 'false');
    }

    render() {
        return (
            <div>
                XD
                
            </div>);
    }
}
