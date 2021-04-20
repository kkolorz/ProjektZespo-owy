import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

export class Counter extends Component {
  displayName = Counter.name

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
            <Container fluid>
                <Row>
                    <Col>1 of 1</Col>
                </Row>
            </Container>
      </div>
    );
  }
}
