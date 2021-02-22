import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const CarouselSlider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="./pictures/img1.jpg"
                    alt="First slide"
                style={{"height":"600px"}}/>
                <Carousel.Caption id="carouselCap">
                    <h3>Found Your perfect University</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="./pictures/img2.jpg"
                    alt="Third slide"
                    style={{"height":"600px"}}/>
                <Carousel.Caption id="carouselCap">
                    <h3>Paving a way to education</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./pictures/img3.jpg"
                    alt="Third slide"
                    style={{"height":"600px"}}/>
                <Carousel.Caption id="carouselCap">
                    <h3>Learn More about Univerisites</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlider;