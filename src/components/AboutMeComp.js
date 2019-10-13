import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import backdrop from '../images/sf_landscape.jpg'
import portrait from '../images/portrait.jpg'
import { Container } from 'react-bootstrap'
export default class AboutMeComponent extends Component {
    render() {
        return (
            <Card className="bg-dark">
                <Card.Img src={backdrop} alt="San Francisco's Golden Gate Bridge" />
                <Card.ImgOverlay>
                    <Container className="float-right" style={{ width: '54rem', height: '18rem', margin: '2rem' }}>
                        <Row>
                            <Col xs={12} md={8}>
                                <Card style={{ width: '36rem' }}>
                                    <Card.Body>
                                        <Card.Title>About Me</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Computer Science &#9679; Android Developer</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <Card.Link href="https://www.github.com/ChrisMeyering">Github</Card.Link>
                                        <Card.Link href="https://www.linkedin.com/in/chris-meyering/">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={portrait} width="180px" height="180px" roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        )
    }
}