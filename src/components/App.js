import React, { Component } from 'react'
import BeeHeader from './BeeHeader'
import HoneyCard from './HoneyCard'
import DisplayPurchases from './DisplayPurchases'
import SendPurchases from './SendPurchases'

import { honeyDatas } from '../data/honeyData'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'


export class App extends Component {
    constructor(props) {
        super(props);

        this.handleAddHoney = this.handleAddHoney.bind(this);
        this.handleRemoveHoney = this.handleRemoveHoney.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            honeyCounterTotal: 0,
            priceTotal: 0,
            datas: honeyDatas
        };
    }

    handleAddHoney(id) {
        honeyDatas[id - 1].counter++;

        this.setState((prevState) => ({
            honeyCounterTotal: prevState.honeyCounterTotal + 1,
            priceTotal: prevState.priceTotal + honeyDatas[id - 1].price
        }));
    }

    handleRemoveHoney(id) {
        honeyDatas[id - 1].counter--;

        this.setState((prevState) => ({
            honeyCounterTotal: prevState.honeyCounterTotal - 1,
            priceTotal: prevState.priceTotal - honeyDatas[id - 1].price
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Gesamtanzahl: " + this.state.honeyCounterTotal + "\nGesamtpreis: " + this.state.priceTotal);
        honeyDatas.forEach((data) => data.counter = 0);

        this.setState(() => ({
            honeyCounterTotal: 0,
            priceTotal: 0
        }));
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <br />
                <Container style={{ border: '2px solid gray', maxWidth: 500 }}>
                    <BeeHeader />
                    <hr />
                    <Row>
                        {
                            honeyDatas.map((honey) => (
                                <HoneyCard key={honey.id} data={honey} addHoney={this.handleAddHoney} removeHoney={this.handleRemoveHoney} />
                            ))
                        }
                    </Row>
                    <hr />
                    <DisplayPurchases honeyCounter={this.state.honeyCounterTotal} price={this.state.priceTotal} />
                    <SendPurchases honeyCounter={this.state.honeyCounterTotal} />
                </Container>
            </Form>
        )
    }
}

export default App