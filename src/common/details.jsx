import React from "react";
import DetailedCourse from "../common/DetailedCourse";
import axios from "axios";

const Details = () => {
  let a = window.location.search;
  let b = new URLSearchParams(a).get("id");

  const [products, setProducts] = React.useState([]);

  const getData = () => {
    axios
      .get("http://localhost:61500/course/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);

  return (
    <div>
      {products.length == 0 ? (
        <p>There are no Products</p>
      ) : (
        <div style={{ color: "white" }}>
          {products.data
            .filter((x) => x.courseTitle === b)
            .map((product, index) => (
              <div>
                <DetailedCourse key={index} product={product} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Details;
