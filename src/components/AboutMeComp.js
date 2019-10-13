import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import picture from  '../images/site_profile.jpg'
export default class AboutMeComponent extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={picture} />
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
        )
    }
}