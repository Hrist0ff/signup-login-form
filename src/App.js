import React from 'react';
import './App.css';
import logo from './images/telebid.png'
import { Navbar,Nav,Container,NavbarBrand} from 'react-bootstrap';
import LoginForm from './components/loginform.js';
import SignupForm from './components/signupform.js';


function App() {
  const [SignUpShow, setSignUpShow] = React.useState(false);
  const [LogInShow, setLogInShow] = React.useState(false);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand> <img src={logo} alt = "Telebid Pro Logo" height = "50" width = "150"/></NavbarBrand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}> 
              <Nav.Link onClick={() => setLogInShow(true)}>Log in </Nav.Link>
              <LoginForm show = {LogInShow} onHide={() => setLogInShow(false)}/>
              <Nav.Link onClick={() => setSignUpShow(true)}>Sign up</Nav.Link>
              <SignupForm show={SignUpShow} onHide={() => setSignUpShow(false)}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img src="https://telebid-pro.com/wp-content/uploads/2021/08/careers-copy-1.png" alt="Background" width = '100%'/>
    </div>
  );
}

export default App;
