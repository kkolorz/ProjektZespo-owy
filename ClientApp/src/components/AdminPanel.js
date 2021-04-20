import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'react-bootstrap';
export class AdminPanel extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Docelowy email</th>
                        <th>Tytuł</th>
                        <th>Tresc</th>
                        <th>Obrazki</th>
                        <th>Czas wysyłki</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>test@test.pl</td>
                        <td>Testowy</td>
                        <td>Testotwa tresc</td>
                        <td>test.png</td>
                        <td>12:00</td>
                    </tr>
                </tbody>
            </table>

            <form>

                <label>
                    Docelowy Email:
                    <input type="email" name="email" />
                    </label><br />

                <label>
                    Tytuł:
                    <input type="text" name="email" />
                        </label><br />
                <label>
                        Tresc:
                    <input type="text" name="email" />
                    </label><br />

                <label>
                    Obrazki:
                    <input type="file" name="email" />
                </label><br />

                <label>
                    Godzina:
                    <input type="time" name="email" />
                </label><br />

                <input type="submit" value="Wyślij" />
                </form>
            </div>

        );
    }
}
