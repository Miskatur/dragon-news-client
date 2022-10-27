import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import logo from '../../../assets/image.png'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'} className='text-decoration-none fw-bold text-dark d-flex align-items-center'> <Image src={logo} height={40} width={40} fluid></Image><span className='ms-2'> Dragon News</span></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav>
                            <Link to={'/'} className='text-decoration-none fw-bold  text-dark d-flex align-items-center mx-2'
                            >All News</Link></Nav>
                        <Nav>
                            <Link to={'/'} className='text-decoration-none fw-bold  text-dark d-flex align-items-center mx-2'>Today's Pick</Link></Nav>
                        <Nav>
                            <Link to={'/'} className='text-decoration-none fw-bold  text-dark d-flex align-items-center mx-2'>Editorial</Link></Nav>
                        <Nav>
                            <Link to={'/'} className='text-decoration-none fw-bold  text-dark d-flex align-items-center mx-2' >Contact</Link></Nav>


                    </Nav>
                    <Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user?.uid ?
                                    <>
                                        <span className='mx-2'> {user?.displayName}</span>
                                        <Button variant="light" className='me-2 border-0' onClick={handleLogOut}>Log Out</Button>
                                    </> :
                                    <>
                                        <Link to={'/login'} className="me-2 text-decoration-none text-dark"><Button variant="outline-primary">Login</Button></Link>
                                        <Link to={'register'} className="me-2 text-decoration-none text-dark" >
                                            <Button variant="outline-primary">Register</Button></Link>
                                    </>
                            }

                        </Nav>
                        <Link to={'/profile'} className='d-flex align-items-center'>
                            {
                                user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user.photoURL}>
                                    </Image> :
                                    <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>

                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className='d-lg-none'>
                        <RightSideNav></RightSideNav>
                    </div>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
};

export default Header;