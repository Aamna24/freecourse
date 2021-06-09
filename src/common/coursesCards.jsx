import React from "react";
import Courses from "../components/Courses";

const CoursesCards = () => {
  return (
    <div>
      <div
        className="col-md-12 "
        style={{ padding: "50px", marginTop: "30px" }}
      >
        <h2 style={{ textAlign: "center" }}>Course Listing</h2>
       
      </div>
      <Courses />
    </div>
  );
};

export default CoursesCards;
