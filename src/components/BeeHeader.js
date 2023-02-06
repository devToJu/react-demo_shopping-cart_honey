import React, { Component } from 'react'

import pic_honey from '../images/honey.png'
import pic_beeleft from '../images/beeleft.png'
import pic_beeright from '../images/beeright.png'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

export class BeeHeader extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <center>
                            <h1>Alles Honig?</h1>
                            <img alt='Blütenhonig' src={pic_honey} height={75} />
                        </center>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Stack direction="horizontal">
                        <img alt='BieneLinks' src={pic_beeleft} height={75} />
                        <img className="ms-auto" alt='BieneRechts' src={pic_beeright} height={75} />
                    </Stack>
                </Row>
            </ >
        )
    }
}

export default BeeHeader