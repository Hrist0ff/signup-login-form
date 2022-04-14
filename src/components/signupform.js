import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';
import APIService from '../components/apiservice.js';
import '../index.css';


function SignupForm(props){
    const [password, setPassword] = useState(0);
    const [email, setEmail] = useState(0);

    
    const register = () => {
        console.log(email);
        console.log(password);
        

        const SignUp = () =>{
            APIService.SignUp(email,password)
            .catch(error => console.log('error',error))
        }

        const handleSubmit=(event)=>{
            SignUp();
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
                    Register
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="form-inputs" >
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
                window.alert("Succesful Register!");
            }}>
                Confirm
            </Button>
                
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignupForm;