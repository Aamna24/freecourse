import React from 'react';

const VideoJumbotron = () => {
    return ( 
        <div>
            <section className="jumbotron text-center videosect">
  <video id="video-background" preload="true" muted={true} autoPlay={true} loop={true}>
    <source src="http://james-allen.ca/brap.mp4" type="video/mp4"/>
  </video>
  <div className="container">
    <h1 className="jumbotron-heading" style={{padding:"90px"}}>Video Tutorial for Campus</h1>
    
    
  </div>
</section>
        </div>

     );
}
 
export default VideoJumbotron;