import React from "react";
import { toast } from "react-toastify";
import Card from "react-bootstrap/Card";
import Button from "@material-ui/core/Button";
import * as auth from "../services/authService";
import * as admin from "../services/adminService";
toast.configure();
const Colleges = () => {
  const [products, setProducts] = React.useState([]);
  const [college, setCollege] = React.useState([]);

  const [show, setShowFields] = React.useState();

  const sign = "\u00A3";
  const getData = () => {
    auth
      .getForm()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);

  const getCollegeData = () => {
    admin
      .getCollegeCount()
      .then((res) => {
        setCollege(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getCollegeData();
  React.useEffect(getCollegeData, []);

  const handleChange = () => {
    setShowFields(true);
  };

  if (!college || college.length === 0) return <p>No College</p>;
  if (!products || products.length === 0) return <p>No College</p>;

  return (
    <div className="container">
      {products.length == 0 ? (
        <p>There are no Products</p>
      ) : (
        <div>
          {college.data.map((post) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{post.collegeName}</Card.Title>

                  <br />
                  <Card.Subtitle>
                    Contract Amount : {post.contractAmount}
                  </Card.Subtitle>
                  <br />
                  <Card.Subtitle>
                    Price Per Application: {sign} {post.pricePerApp}
                  </Card.Subtitle>
                  <br />
                  <Card.Subtitle>
                    Contract Value: {sign}
                    {post.contractValue}
                  </Card.Subtitle>
                  <br />
                  <br />
                  <Card.Subtitle>
                    Forms Delievered:{post.formsDelievered}
                  </Card.Subtitle>
                  <br />
                  <Card.Subtitle>Remaining:{post.remainingForms}</Card.Subtitle>
                  <br />
                  <Card.Subtitle>
                    Revenue: {sign}
                    {post.revenue}
                  </Card.Subtitle>
                  <br />

                  <Button
                    color="primary"
                    variant="contained"
                    onClick={(e) => {
                      window.location.href = "/edit/?id=" + post._id;
                    }}
                  >
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Colleges;
