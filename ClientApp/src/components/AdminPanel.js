import React, { Component } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Row, Col, Grid } from 'react-bootstrap';
//import BootstrapTable from 'react-bootstrap-table';
//import TableHeaderColumn from 'react-bootstrap-table';

export class AdminPanel extends Component {
    displayName = AdminPanel.name

    constructor(props) {
        super(props);
        this.state = {
            responseStatus: 'X',
            file: null,
            emails: []
        };

        // function binding
        this.addEmail = this.addEmail.bind(this);
        this.setImage = this.setImage.bind(this);
        this.apiAddEmail = this.apiAddEmail.bind(this);
    }

    componentDidMount() {
        this.fetchEmailsList();
        this.timer = setInterval(() => this.fetchEmailsList(), 10000);
    }

    fetchEmailsList() {
        fetch('Emails/GetEmailss', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                console.log("POBRANO: " + JSON.stringify(data));
                this.setState({ emails: data });
            })
            .catch(err => {
                console.log("NIE POBRANO: " +err);
                // when data not fetched
            });
    }


    handleSubmit(event) {
        event.preventDefault();

    }

    apiAddEmail(image_base64, sourceEmail, destinationEmail, content, hour, minute) {

        fetch('Emails/Add', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    SenderEmail: sourceEmail,
                    ReceiverEmail: destinationEmail,
                    Content: content,
                    ImageData: image_base64,
                    MinuteToSend: minute,
                    HourToSend : hour
                })
        })
            .then(response => response.json())
            .then(data => {
                this.state.responseStatus = "OK: " + data.message;
            })
            .catch(err => {
                this.setState({ responseStatus: "NOT OK" +err.message });
            });
    }

    addEmail(event) {
        event.preventDefault();
        let form = event.target;

        var sourceEmail = form.sourceEmailInput.value;
        var destinationEmail = form.destinationEmailInput.value;
        var content = form.contentInput.value;
        var hour = form.timeHourInput.value;
        var minute = form.timeMinutInput.value;

        // convert image to byte array
        var formImage = this.state.file;

        // converting image to base64

        const reader = new FileReader();
        reader.onloadend = () => {
            this.apiAddEmail(reader.result, sourceEmail, destinationEmail, content, hour, minute);
        };

        reader.readAsDataURL(formImage);

    }


    setImage(e) {
        this.setState({ file: e.target.files[0] });
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                <Col sm={8}>
                    <BootstrapTable
                        data={this.state.emails}
                        striped
                        hover
                        condensed
                        fixed
                    >
                            <TableHeaderColumn dataField="id" isKey dataAlign="right" width="150"
                                tdStyle={{ whiteSpace: 'no-wrap', wordWrap: 'break-all' }}>#</TableHeaderColumn>
                            <TableHeaderColumn dataField="senderEmail" dataSort width="150"
                                tdStyle={{ whiteSpace: 'no-wrap', wordWrap: 'break-all' }}>Adres nadawcy</TableHeaderColumn>
                            <TableHeaderColumn dataField="receiverEmail" dataSort width="150"
                                tdStyle={{ whiteSpace: 'no-wrap', wordWrap: 'break-all' }}>Adres odbiorcy</TableHeaderColumn>
                            <TableHeaderColumn dataField="content" dataSort width="150"
                                tdStyle={{ whiteSpace: 'no-wrap', wordWrap: 'break-all' }}>Treść</TableHeaderColumn>
                            <TableHeaderColumn dataField="imageDatax" dataSort width="150"
                                tdStyle={{ whiteSpace: 'no-wrap', wordWrap: 'break-all' }}>Obraz</TableHeaderColumn>
                            <TableHeaderColumn dataField="hourToSend" dataSort width="150"
                                tdStyle={{ whiteSpace: 'no-wrap', wordWrap: 'break-all' }}>Godzina</TableHeaderColumn>
                            <TableHeaderColumn dataField="minuteToSend" dataSort width="150"
                                tdStyle={{ whiteSpace: 'no-wrap', wordWrap: 'break-all' }}>Minuta</TableHeaderColumn>
                    </BootstrapTable>
                </Col>
                    <Col sm={4}>
                        <p> Status: {this.state.responseStatus} </p>
                        <form onSubmit={this.addEmail} >
                            <div class="form-group">
                                <label>EMail źródłowy</label>
                                <input type="email" name="sourceEmailInput" class="form-control" aria-describedby="emailHelp" />
                            </div>

                            <div class="form-group">
                                <label>EMail docelowy</label>
                                <input type="email" name="destinationEmailInput" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="form-group">
                                <label>Treść</label>
                                <input type="text" name="contentInput" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="form-group">
                                <label>Obraz</label>
                                <input type="file" name="imageInput" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" accept="image/png, image/jpeg" onChange={e => this.setImage(e)} />
                            </div>

                            <div class="form-group">
                                <label>Godzina wysyłki</label>
                                <input type="number" name="timeHourInput" class="form-control" id="exampleInputPassword1" min="0" max="24" />
                            </div>

                            <div class="form-group">
                                <label>Minuta wysyłki</label>
                                <input type="number" name="timeMinutInput" class="form-control" id="exampleInputPassword1" min="0" max="60" />
                            </div>

                            <button type="submit" class="btn btn-primary">Dodaj</button>
                        </form>
                    </Col>
                </Row>
            </Grid>
            
        );
    }
}
