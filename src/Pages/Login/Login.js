import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../Hooks/useSetTitle';



const Login = () => {

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    useSetTitle('Login')

    // navigation hook
    const navigate = useNavigate()
    // error message state 
    const [errorMessage, setErrorMessage] = useState(null)

    // show password state 
    const [passwordShown, setPasswordShown] = useState(false);

    const { userSignIn, setLoading } = useContext(AuthContext)

    // password handler 
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }

    // form handler
    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('You need to verify your email before Log In. (Check spam messages if needed.)')
                }
            })
            .catch(error => {
                const errorMessage = "Wrong Password. Input the valid Password. ";
                setErrorMessage(errorMessage)
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <Form onSubmit={handleForm}>

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


                {/* error text  */}

                <Form.Text className="text-danger">
                    {errorMessage}
                </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit">
                Login
            </Button>

        </Form>
    );
};

export default Login;