import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/BrandImages/Brand1.png'
import Brand2 from '../../../assets/BrandImages/Brand2.png'


const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={Brand1}
                        alt="First slide"
                        style={{ "height": "11em", "width": "19em" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={Brand2}
                        alt="Second slide"
                        style={{ "height": "11em", "width": "19em" }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;