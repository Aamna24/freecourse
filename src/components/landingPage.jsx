import React, { Component } from 'react';
import CarouselSlider from '../common/carousel'
import About from '../common/aboutsus'
import CoursesCards from '../common/coursesCards'
import VideoSlider from '../common/videoSlider'

const LandingPage = () => {
    return (<div>
        <div className="jumbotron">
            <div className="jumbotron-text">
            <h1>FREE GOVERNMENT FUNDED COURSES</h1>
            <br/>
            <div>
                <p>The UK government has allocated 1.5 billion for people to use on professional training courses.</p>
                
                <p>
                    The training is FREE and you gain a nationally recognised qualification.
                </p>
                
                <p>
                    To Qualify you need to:
                </p>
                
                <p>
                    Have Lived in UK/EU for 3+years 
                    <br/>
                    Be aged 19+
                    <br/>
                    Have NOT studies the course previously
                </p>
            </div>
            </div>
              
        </div>
       
        <CoursesCards />
    </div>
    );
}

export default LandingPage;