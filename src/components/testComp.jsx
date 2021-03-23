import React, { Component } from "react";

const TableData = () => {
  const [search, setSearch] = React.useState();

  onchange = (e) => {
    setSearch(e.target.value);
  };
  const lowercasedInput = search.toLowerCase();
  console.log(lowercasedInput);
  return (
    <div className="container">
      <input label="Search" icon="search" onChange={onchange} />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aamna</td>
            <td>Awareness of mental Health</td>
          </tr>
          <tr>
            <td>Hamza</td>
            <td>Introduction to Computer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
