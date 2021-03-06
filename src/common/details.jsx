import React from "react";
import DetailedCourse from "../common/DetailedCourse";
import axios from "axios";

const Details = () => {
  let a = window.location.search;
  console.log(a);
  let b = new URLSearchParams(a).get("id");
  console.log("b", b);
  //let em=a.slice(7,)

  const [products, setProducts] = React.useState([]);

  const getData = () => {
    axios
      .get("/course/")
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
      <div></div>

      {products.length == 0 ? (
        <p>There are no Products</p>
      ) : (
        <div style={{ margin: "150px", color: "white" }}>
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
