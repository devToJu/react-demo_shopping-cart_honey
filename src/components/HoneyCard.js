import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class HoneyCard extends Component {
    render() {
        const { id, name, picturePath, price, counter } = this.props.data;
        const { addHoney, removeHoney } = this.props;


        return (
            <div>
                <h5>{name}</h5>
                <Container style={{ margin: '15px 0px' }}>
                    <center>
                        <Row>
                            <Col>
                                <p>{price} €</p>
                            </Col>

                            <Col>
                                <img alt='Honigtyp' src={picturePath} height={75} />
                            </Col>

                            <Col>
                                <p style={{ fontSize: '25px' }}>{counter}</p>
                            </Col>

                            <Col>
                                <Button onClick={() => removeHoney(id)} disabled={counter < 1} variant="primary" style={{ width: 40 }} >-</Button>
                            </Col>

                            <Col>
                                <Button onClick={() => addHoney(id)} variant="primary" style={{ width: 40 }}>+</Button>
                            </Col>
                        </Row>
                    </center>
                </Container>
            </div>
        )
    }
}

export default HoneyCard