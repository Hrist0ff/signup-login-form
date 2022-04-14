import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';
import '../index.css'
import pass from '../images/lock-solid.svg'
import emai from '../images/at-solid.svg'

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
        .then(response => {
            if(!response.ok) throw new Error(response.status)
        
            else{
            response.text().then(data => {
                window.alert(data);
            });
            props.onHide();
        }
        });

    }

    return (
        <Modal
            {...props}
            size="m"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Login
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="login">
                <img src={emai} alt='Email' className='img'></img>
                <input
                    id = 'email'
                    type='email'
                    name='email'
                    className="text-inp"
                    placeholder="Enter email"
                    onChange={e => setEmail(e.target.value)}
                />
                <p />
                <img src={pass} alt='Password' className='img' ></img>
                <input
                    id = 'password'
                    type='password'
                    name='password'
                    className="text-inp"
                    placeholder="Enter password"
                    onChange={e => setPassword(e.target.value)}
                />
            </ModalBody>
            <Modal.Footer>
            <Button variant="success" type='submit' onClick={() => {
                props.onHide();
                register();
            }}>
                Confirm
            </Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginForm;