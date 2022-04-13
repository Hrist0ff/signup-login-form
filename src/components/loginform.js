import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';
import APIService from '../components/apiservice.js';

function LoginForm(props){
    const [password, setPassword] = useState(0);
    const [email, setEmail] = useState(0);

    

    const register = () => {
        console.log(email);
        console.log(password);
        

        const insertAccount = () =>{
            APIService.InsertAccount({email,password})
            .catch(error => console.log('error',error))
        }

        const handleSubmit=(event)=>{
            insertAccount();
            setEmail('')
            setPassword('')
            
        }

        handleSubmit();

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
                />
            </ModalBody>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit' onClick={() => {
                props.onHide();
                register();
                window.alert("Succesful Login!");
            }}>
                Confirm
            </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginForm;