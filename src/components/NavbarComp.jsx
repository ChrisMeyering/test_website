import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap/'
import github from '../images/icons8-github-50.svg'
import linkedin from '../images/icons8-linkedin-50.svg'
import icons8 from '../images/icons8-50.svg'
export default class NavbarComp extends Component {
    render() {
        return (
            <Navbar bg="dark" fluid variant="dark">
                <Navbar.Brand href="#home">Chris Meyering</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Navbar.Brand href="https://www.github.com/ChrisMeyering">
                        <img
                            alt=""
                            src={github}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://www.linkedin.com/in/chris-meyering/">
                        <img
                            alt=""
                            src={linkedin}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://www.icons8.com/icons">
                        <img
                            alt=""
                            src={icons8}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Nav>
            </Navbar>
        )
    }
}