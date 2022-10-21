import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { details, title, image_url, author, rating, category_id } = news
    const { name, published_date } = author
    const { number } = rating;
    return (
        <div>
            <div>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Title className='text-center my-2'>{title}</Card.Title>

                        <div className='my-3'>
                            <div className='d-flex align-items-center justify-content-evenly my-2'>
                                <div>
                                    <h6>Author Name : {name}</h6>
                                </div>
                                <div>
                                    <h6> Published Date : {published_date}</h6>
                                </div>
                                <div>
                                    <h6 className='d-flex align-items-center justify-content-center'>
                                        <span className='text-warning'><FaStar /></span> {number}
                                    </h6>
                                </div>
                            </div>

                            <div>
                                {details}
                            </div>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <Link to={`/category/${category_id}`} >
                                <Button variant="info" className="mx-auto">All News Category</Button>
                            </Link>
                        </div>
                    </Card.Body>

                </Card>
            </div>
        </div>
    );
};

export default News;