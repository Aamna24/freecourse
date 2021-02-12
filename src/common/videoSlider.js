import React, { Component } from 'react';

const VideoJumbotron = () => {
    return ( 
        <div>
            <section class="jumbotron text-center">
  <video id="video-background" preload="true" muted="true" autoplay="true" loop="true">
    <source src="http://james-allen.ca/brap.mp4" type="video/mp4"/>
  </video>
  <div class="container">
    <h1 class="jumbotron-heading">Video Tutorial for Campus</h1>
    
    
  </div>
</section>
        </div>

     );
}
 
export default VideoJumbotron;