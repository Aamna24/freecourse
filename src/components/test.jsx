import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import * as auth from "../services/authService";

function App() {
  const [forms, setForms] = React.useState([]);
  const getData = () => {
    auth
      .getForm()
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
  const mappedData = forms.data.map((d) => d.date);
  const result = [...new Set(mappedData)];
  console.log(result);
  var i = 0,
    j = 0,
    count = [],
    arr = [],
    monthlyArr = [];
  // count daily submissions
  for (i = 0; i < result.length; i++) {
    for (j = 0; j < forms.data.length; j++) {
      if (result[i] === forms.data[j].date) {
        count++;
      }
    }
    arr.push(count);
    count = 0;
  }

  //monthly submissions
  const months = ["January", "February", "March", "April"];
  for (i = 0; i < months.length; i++) {
    for (j = 0; j < forms.data.length; j++) {
      if (forms.data[j].date.includes(months[i])) {
        count++;
      }
    }
    monthlyArr.push(count);
    count = 0;
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const data = {
    labels: result,
    datasets: [
      {
        label: "Daily Form Submissions",
        backgroundColor: "rgba(63,142,191,1)",
        borderColor: "rgba(63,142,191,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(63,142,191,0.4)",
        hoverBorderColor: "rgba(63,142,191,1)",
        barPercentage: 0.5,
        barThickness: 50,
        maxBarThickness: 100,

        data: arr,
      },
    ],
  };

  const monthlydata = {
    labels: months,
    datasets: [
      {
        label: "Daily Submissions",
        backgroundColor: "rgba(123,191,61,1)",
        borderColor: "rgba(123,191,61,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(123,191,61,0.4)",
        hoverBorderColor: "rgba(123,191,61,1)",
        barPercentage: 0.5,
        barThickness: 50,
        maxBarThickness: 100,

        data: monthlyArr,
      },
    ],
  };

  return (
    <div>
      <h2>Daily Form Submissions</h2>
      <Bar data={data} width={80} height={30} options={options} />
      <br />
      <h2>Monthly Form Submissions</h2>
      <Bar data={monthlydata} width={80} height={30} options={options} />
    </div>
  );
}
export default App;
