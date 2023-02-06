import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export class SendPurchases extends Component {
    render() {
        const { honeyCounter } = this.props;

        return (
            <div className="d-flex flex-row-reverse" style={{ margin: '15px 0px' }}>
                <Button type='submit' variant="success" disabled={honeyCounter < 5}>
                    Bezahlen
                </Button>
            </div>
        )
    }
}

export default SendPurchases