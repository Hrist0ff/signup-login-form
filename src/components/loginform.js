import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';

function LoginForm(props){
    const [password, setPassword] = useState(0);
    const [email, setEmail] = useState(0);

    

    const register = () => {   

        
        const requestOptions = {
            method: 'POST', headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify({email: email, password: password}),
            mode : 'cors'
        };
        console.log(requestOptions);
        fetch('http://localhost:5000/pythonlogin/', requestOptions)         
        .then(response => {if(!response.ok) throw new Error(response.status)
        else{
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
                    Login
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="form-inputs">
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
                props.onHide();
                register();
            }}>
                Confirm
            </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginForm;