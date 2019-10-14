import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Image, Container } from 'react-bootstrap/'
import github from '../images/icons8-github-50.svg'
import linkedin from '../images/icons8-linkedin-50.svg'
import icons8 from '../images/icons8-50.svg'
export default class NavbarComp extends Component {
    render() {
        return (
            // <Navbar id="navbar" bg="dark"  sticky variant="dark">
            //     <Navbar.Brand href="#home">Chris Meyering</Navbar.Brand>
            //     <Nav className="mr-auto">
            //         <Nav.Link href="#about">About</Nav.Link>
            //         <Nav.Link href="#education">Education</Nav.Link>
            //         <Nav.Link href="#projects">Projects</Nav.Link>
            //     </Nav>
            //     <Nav className="justify-content-end">
            //         <Navbar.Brand href="https://www.github.com/ChrisMeyering">
            //             <img
            //                 alt=""
            //                 src={github}
            //                 width="30"
            //                 height="30"
            //                 className="d-inline-block align-top"
            //             />
            //         </Navbar.Brand>
            //         <Navbar.Brand href="https://www.linkedin.com/in/chris-meyering/">
            //             <img
            //                 alt=""
            //                 src={linkedin}
            //                 width="30"
            //                 height="30"
            //                 className="d-inline-block align-top"
            //             />
            //         </Navbar.Brand>
            //         <Navbar.Brand href="https://www.icons8.com/icons">
            //             <img
            //                 alt=""
            //                 src={icons8}
            //                 width="30"
            //                 height="30"
            //                 className="d-inline-block align-top"
            //             />
            //         </Navbar.Brand>
            //     </Nav>
            // </Navbar>
            <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#about">Chris Meyering</Navbar.Brand>
    <Nav >
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav>
    {/* <Navbar.Collapse style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}> */}
        <Nav style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Navbar.Brand href="https://www.github.com/ChrisMeyering">
                <Image style={{marginLeft: "16px"}} src={github} fluid roundedCircle />                
            </Navbar.Brand>
            <Navbar.Brand href="https://www.linkedin.com/in/chris-meyering/">
                <Image style={{marginLeft: "16px"}} src={linkedin} fluid roundedCircle />
            </Navbar.Brand>
            <Navbar.Brand href="https://www.icons8.com/icons">
                <Image style={{marginLeft: "16px"}} src={icons8} fluid roundedCircle />
            </Navbar.Brand>
        </Nav>
    {/* </Navbar.Collapse> */}
  </Navbar>
</>
        )
    }
}