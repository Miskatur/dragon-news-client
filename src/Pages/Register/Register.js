import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';


const Register = () => {

    // context API hook
    const { createUser, updateUserData, loading, verifyEmail } = useContext(AuthContext)

    // Show Password
    const [passwordShown, setPasswordShown] = useState(false);

    // Show Error Message
    const [errorMessage, setErrorMessage] = useState(null)

    // Terms check box and utton disable enable state
    const [accepted, setAccepted] = useState(false)

    // Loader
    if (loading) {
        console.log("spinner loaded")
        return <Spinner animation="border" className='text-center' />
    }

    // Password Show handler
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }


    //submit button handler
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                handleUpdateUserData(name, photoURL)
                handleEmailVerify()
                toast.success('Please Verify Your Email Address. Check your spam message too.')
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                console.error(error)
            })
    }

    const handleUpdateUserData = (name, photoURL) => {
        updateUserData(name, photoURL)
            .then(() => { })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                console.error(error)
            })
    }

    const handleEmailVerify = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                console.error(error)
            })
    }

    // terms accepted handler
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter Your Email" required />


            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Your Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type={passwordShown ? "text" : "password"} placeholder="Enter Your Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicShowPassword">
                <Form.Check type="checkbox" label="Show Password" onClick={togglePassword} />

                <Form.Text className="text-danger">
                    {errorMessage}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccepted}
                    type="checkbox"
                    label={<>Accept <Link to={'/terms'}>Terms & Conditions</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>

        </Form>
    );
};

export default Register;