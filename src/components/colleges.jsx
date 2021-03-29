import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "@material-ui/core/Button";

const Colleges = () => {
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
  console.log(products);

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
                Total Forms Submitted: {products.data.length}
              </Card.Subtitle>
              <Card.Subtitle>Add Limit: </Card.Subtitle>
              <Button color="primary" variant="contained">
                Add
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Colleges;
