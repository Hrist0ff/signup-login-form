import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';
import '../index.css';


function SignupForm(props){
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);
    const [email, setEmail] = useState(0);

    const register = () => {
        //console.log(email);
        //console.log(password);
        

        const requestOptions = {
            method: 'POST', headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify({username: username ,email: email, password: password}),
            mode : 'cors'
        };     
        console.log(requestOptions);
        fetch('http://localhost:5000/pythonlogin/register', requestOptions)         
        .then(response => {
			if(!response.ok) throw new Error(response.status)
    
        else{
			response.text().then(data => {
				window.alert(data);
			// do something with your data
			});
            props.onHide();
        }
        });

    }
   
    
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Register
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="form-inputs" >
            <label htmlFor="username" className='form-label'>
                    Username:    
                </label>
                <input
                    id = 'username'
                    type='username'
                    name='username'
                    className="form-input"
                    placeholder="Enter username"
                    onChange={e => setUsername(e.target.value)}
                />
                <p />
                <label htmlFor="email" className='form-label'>
                    Email:    
                </label>
                <input
                    id = 'email'
                    type='email'
                    name='email'
                    className="form-input"
                    placeholder="Enter email"
                    onChange={e => setEmail(e.target.value)}
                />
                <p />
                <label htmlFor="password" className='form-label'>
                    Password:   
                </label>
                <input
                    id = 'password'
                    type='password'
                    name='password'
                    className="form-input"
                    placeholder="Enter password"
                    onChange={e => setPassword(e.target.value)}
                />
            </ModalBody>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit' onClick={() => {
                register();
                props.onHide();
            }}>
                Confirm
            </Button>
                
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        
    )
}

export default SignupForm;