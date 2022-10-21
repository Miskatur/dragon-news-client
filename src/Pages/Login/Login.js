import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';




const Login = () => {
    const navigate = useNavigate()

    const [passwordShown, setPasswordShown] = useState(false);

    const { userSignIn } = useContext(AuthContext)

    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }

    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <Form onSubmit={handleForm}>
            <Form.Text className="text-danger">

            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type={passwordShown ? "text" : "password"} placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Show Password" onClick={togglePassword} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>

        </Form>
    );
};

export default Login;