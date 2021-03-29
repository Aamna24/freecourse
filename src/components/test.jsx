import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function App() {
  const [forms, setForms] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:61500/form/")
      .then((res) => {
        setForms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);
  if (!forms || forms.length === 0) return <p>Cannot find any posts</p>;
  const d = forms.data.map((d) => d.date);
  console.log(d.length);
  const data = {
    labels: forms.data.map((d) => d.date),
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [d.length],
      },
    ],
  };

  return (
    <div>
      <h2>Daily Form Submission</h2>
      <Bar data={data} width={100} height={30} />
    </div>
  );
}
export default App;
