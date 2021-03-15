import React from "react";

import axios from "axios";
import Card from "react-bootstrap/Card";

const Colleges = () => {
  const [products, setProducts] = React.useState([]);

  const getData = () => {
    axios
      .get("https://consulting-backend.herokuapp.com/form/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);
  console.log(products);
  //var filtered = products.data.filter((x) => x.firstName == "Aamna").length;

  return (
    <div className="container">
      {products.length == 0 ? (
        <p>There are no Products</p>
      ) : (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Nottinghamshire College</Card.Title>
              <Card.Subtitle>
                Total Forms Submitted: {products.length}
              </Card.Subtitle>
              <Card.Subtitle>Add Limit</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Colleges;
