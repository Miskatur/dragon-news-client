import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';

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
                <Navbar.Brand ><Link to={'/'} className='text-decoration-none fw-semibold text-dark d-flex align-items-center '>Dragon News</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav><Link to={'/'} className='text-decoration-none  text-dark d-flex align-items-center'>All News</Link></Nav>
                        <Nav.Link href="#pricing">Categories</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user?.uid ?
                                    <>
                                        <span> {user?.displayName}</span>
                                        <Button variant="light" className='ms-2 border-0' onClick={handleLogOut}>Log Out</Button>
                                    </> :
                                    <>
                                        <Link to={'/login'} className="me-2 text-decoration-none text-dark">Login</Link>
                                        <Link to={'register'} className="me-2 text-decoration-none text-dark" >Register</Link>
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