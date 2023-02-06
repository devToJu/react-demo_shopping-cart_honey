import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';

export class DisplayPurchases extends Component {
    render() {
        const { honeyCounter, price } = this.props;

        return (
            <Row>
                <span>
                    Anzahl Honige: {honeyCounter}<br />
                    Gesamtsumme: {price} €
                </span>
            </Row>
        )
    }
}

export default DisplayPurchases