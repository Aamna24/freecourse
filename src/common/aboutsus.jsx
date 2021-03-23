import React, { Component } from "react";

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-md-6 aboutText" style={{ padding: "50px" }}>
          <h2>About Us</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            veritatis quae, in voluptatem expedita illum repellendus sapiente
            voluptas nostrum molestias unde sint et itaque ducimus similique
            consectetur ipsum iure labore! Laborum, obcaecati. Fugit qui, illo
            temporibus libero deleniti voluptatibus officiis excepturi rerum
            voluptates, doloribus sed animi, laboriosam minima eaque. Suscipit
            inventore placeat accusamus labore voluptate. Inventore suscipit
            possimus aliquam distinctio.
          </p>
        </div>
        <div className="col-md-6" style={{ float: "right" }}>
          <img src="./pictures/img4.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
