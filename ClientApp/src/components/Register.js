import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'react-bootstrap';
export class Register extends Component {


    constructor(props) {
        super(props);

    }

    render() {
    return (
            <div>
                <h1>Rejestracja</h1>

            <p>Podaj swoje dane</p>
            <form>
                <label>
                   Email:
                    <input type="email" name="email" />
                </label><br/>
                <label>
                    Hasło:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Wyślij" />
            </form>

            </div>
        );
    }
}
