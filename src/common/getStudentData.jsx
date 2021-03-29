import React from "react";
import StudentFormData from "../common/StudentFormData";
import axios from "axios";

const GetStudentData = () => {
  let a = window.location.search;
  let b = new URLSearchParams(a).get("id");
  console.log(b);
  const [products, setProducts] = React.useState([]);

  const getData = () => {
    axios
      .get("http://localhost:61500/form/")
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
        <div>
          {products.data
            .filter((x) => x._id === b)
            .map((product, index) => (
              <div>
                <StudentFormData key={index} product={product} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default GetStudentData;
