import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaReddit, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div className='text-lg-center'>
            <ButtonGroup vertical>
                <Button variant="outline-primary" className='px-5 mb-2 d-flex align-items-center justify-content-center' > <span className='px-2 d-flex align-items-center'><FaGoogle /> </span> Sign In With Google </Button>{' '}
                <Button variant="outline-dark" className='px-5 d-flex align-items-center justify-content-center'> <span className='px-2 d-flex align-items-center'><FaGithub /></span> Sign In With Github </Button>{' '}
            </ButtonGroup>
            <div>
                <h5 className='my-3'>Find Us on</h5>
                <div>
                    <ButtonGroup vertical>
                        <Button variant="outline-primary" className='px-5 mb-2 d-flex align-items-center justify-content-evenly' ><span className='px-2 d-flex align-items-center'><FaFacebook></FaFacebook></span> Facebook</Button>

                        <Button variant="outline-primary" className='px-5 mb-2 d-flex align-items-center justify-content-evenly'><span className='px-2 d-flex align-items-center'><FaTwitter></FaTwitter></span> Twitter </Button>

                        <Button variant="outline-dark" className='px-5 mb-2 d-flex align-items-center justify-content-evenly'><span className='px-2 d-flex align-items-center'><FaTelegram></FaTelegram></span>  Telegram</Button>

                        <Button variant="outline-dark" className='px-5 mb-2 d-flex align-items-center justify-content-evenly'><span className='px-2 d-flex align-items-center'><FaGithub></FaGithub></span> Github</Button>

                        <Button variant="outline-success" className='px-5 mb-2 d-flex align-items-center justify-content-evenly'><span className='px-2 d-flex align-items-center'><FaWhatsapp></FaWhatsapp></span> WhatsApp</Button>

                        <Button variant="outline-dark" className='px-5 mb-2 d-flex align-items-center justify-content-evenly'><span className='px-2 d-flex align-items-center'><FaReddit></FaReddit></span> Reddit</Button>

                    </ButtonGroup>

                </div>
            </div>

            <div className='my-5'>
                <h5>Brand Advertisement </h5>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;    