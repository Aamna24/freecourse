import React from "react";
import StudentFormData from "../common/StudentFormData";
import axios from "axios";

const GetCities = () => {
  const [products, setProducts] = React.useState([]);

  const getData = () => {
    axios
      .get("https://consulting-backend.herokuapp.com/form/getCitiesName/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return products;
  };
  //getData();
  React.useEffect(getData, []);
};

export default GetCities;
