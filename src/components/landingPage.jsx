import React, { Component } from 'react';
import CarouselSlider from '../common/carousel'
import About from '../common/aboutsus'
import CoursesCards from '../common/coursesCards'
import VideoSlider from '../common/videoSlider'

const LandingPage = () => {
    return (<div>
        <CarouselSlider />
        <About />
        <VideoSlider />
        <CoursesCards />
    </div>
    );
}

export default LandingPage;