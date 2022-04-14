import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';
import '../index.css';
import user from '../images/user-solid.svg'
import pass from '../images/lock-solid.svg'
import emai from '../images/at-solid.svg'



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
            size="m"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Register
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="register">
                <img src={user} alt='User' className='img'></img>
                <input
                    id = 'username'
                    type='username'
                    name='username'
                    className="text-inp"
                    placeholder="Enter username"
                    onChange={e => setUsername(e.target.value)}
                />
                <p />
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
                <img src={pass} alt='Password' className='img'></img>
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
                register();
                props.onHide();
            }}>
                Confirm
            </Button>
                
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        
    )
}

export default SignupForm;