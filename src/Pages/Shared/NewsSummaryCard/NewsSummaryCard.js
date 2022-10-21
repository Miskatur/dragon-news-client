import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



const NewsSummaryCard = ({ news }) => {
    // console.log(news)
    const { details, title, image_url, author, rating, total_view, _id } = news
    const { img, name, published_date } = author
    const { number } = rating;
    return (
        <div className='mb-3'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={img} alt="" style={{ "height": "50px", "width": "50px" }} className={'rounded-circle d-flex  justify-content-center align-items-center'} />
                            </div>
                            <div className='ps-2 d-flex flex-column  justify-content-center'>
                                <h6 ><small>{name}</small></h6>
                                <h6 className=' text-secondary' style={{ "lineHeight": "0.5rem" }}><small>{published_date}</small></h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='me-2'>
                            <Link className='text-decoration-none text-dark' ><FaBookmark /></Link></span>
                        <Link className='text-decoration-none text-dark'><FaShareAlt /></Link>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <div className='pt-2'>
                        {
                            details?.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p> : <p>{details}</p>
                        }
                    </div>


                    <Card.Footer>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <span className='pe-1' style={{ "color": "#FFD700" }}><FaStar /></span> {number}
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <span className='pe-1'><FaEye /></span> {total_view ? total_view : "No view"}
                            </div>
                        </div>
                    </Card.Footer>

                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;