import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavbarComp'
import AboutMe from './components/AboutMeComp'
import Project from './components/ProjectComp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollableAnchor from 'react-scrollable-anchor'
function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      var node = ReactDOM.findDOMNode(this.refs[])
      <ScrollableAnchor id={'about'}>
        <div>
          <AboutMe/>
        </div>
      </ScrollableAnchor>
      
      <ScrollableAnchor id={'projects'}>
        <Container>
          <Row>
            <Col> <Project/> </Col>
            <Col> <Project/> </Col>
            <Col> <Project/> </Col>
          </Row>
        </Container>
      </ScrollableAnchor>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
