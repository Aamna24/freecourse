import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import * as auth from "../services/authService";
import * as admin from "../services/adminService";
import moment from "moment";

function App() {
  const [forms, setForms] = React.useState([]);
  const [incForms, setIncForms] = React.useState([]);
  const [revenue, setRevenue] = React.useState();

  const todayDate = moment().format("LL");
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
  const getIncData = () => {
    auth
      .getIncompleteForms()
      .then((res) => {
        setIncForms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getIncData, []);

  if (!forms || forms.length === 0) return <p>Cannot find any posts</p>;
  if (!incForms || incForms.length === 0) return <p>Cannot find any posts</p>;

  //get total count of todays form submission
  const todaysFormData = forms.data.filter((x) => x.date === todayDate);
  // getting distinct dates of completed forms
  const mappedData = forms.data.map((d) => d.date);
  const result = [...new Set(mappedData)];

  // getting distinct dates for incomplete forms
  const incMappedData = incForms.data.map((d) => d.dateCreated);
  const incFormResult = [...new Set(incMappedData)];

  var i = 0,
    j = 0,
    count = 0,
    arr = [],
    monthlyArr = [],
    array = [],
    incCount = 0;

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

  // count daily incompete submissions
  for (i = 0; i < incFormResult.length; i++) {
    for (j = 0; j < incForms.data.length; j++) {
      if (incFormResult[i] === incForms.data[j].dateCreated) {
        incCount++;
      }
    }
    array.push(incCount);
    incCount = 0;
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

  // daily submission data
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

  //monthly submission graph
  const monthlydata = {
    labels: months,
    datasets: [
      {
        label: "Monthly Submissions",
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

  // incomplete forms data
  const incompleteFormData = {
    labels: incFormResult,
    datasets: [
      {
        label: "Incomplete Submissions",
        backgroundColor: "rgba(171,35,70,1)",
        borderColor: "rgba(171,35,70,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(171,35,70,0.4)",
        hoverBorderColor: "rgba(171,35,70,1)",
        barPercentage: 0.5,
        barThickness: 50,
        maxBarThickness: 100,

        data: array,
      },
    ],
  };

  return (
    <div className="container">
      <div>
        <h4>Daily Form Submissions</h4>
        <Bar data={data} width={80} height={30} options={options} />
      </div>
      <br />
      <br />
      <div>Today's Form submissions: {todaysFormData.length}</div>
      <br />
      <div>
        <h4>Monthly Form Submissions</h4>
        <Bar data={monthlydata} width={80} height={30} options={options} />
      </div>
      <br />
      <br />
      <div>
        <h4>Incomplete Form Submissions</h4>
        <Bar
          data={incompleteFormData}
          width={80}
          height={30}
          options={options}
        />
      </div>
    </div>
  );
}
export default App;
