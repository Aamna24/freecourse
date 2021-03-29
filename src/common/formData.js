import React from 'react';
import { CButton,  CDataTable } from "@coreui/react";
import axios from 'axios'
const Formdata=(props)=>{
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Cannot find any posts</p>;
  const arr = [];
  //converting post data into array
  const obj = Object.entries(posts.data);
  obj.forEach(([key, value]) => arr.push(value));
  console.log(arr)
  
  const fields = [
    { key: "firstName", _style: { width: "20%" } },
    "appliedCourse","city","date",

    {
      key: "fill_pdf",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "button1",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "button2",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  const handlePDFChange=(e)=>{
    const apiUrl = process.env.REACT_APP_API_URL + "/form/print/"+e;
      
    axios(apiUrl, {
     method: "GET",
     responseType: "blob"
     //Force to receive data in a Blob Format
   })
     .then(response => {
       //Create a Blob from the PDF Stream
       const file = new Blob([response.data], {
         type: "application/pdf"
       });
       //Build a URL from the file
       const fileURL = URL.createObjectURL(file);
       //Open the URL on new Window
       window.open(fileURL);
     })
     .catch(error => {
       console.log(error);
     });    
  }

  
 const handleSignChange=(e)=>{
  const apiUrl = process.env.REACT_APP_API_URL + "/form/watermark/"+e
  axios(apiUrl, {
      method: "GET",
      responseType: "blob",
      mode: 'no-cors' 
      //Force to receive data in a Blob Format
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
   }
   return(
    <div className="container">
    <CDataTable
      items={arr}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        'fill_pdf': (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={()=>{handlePDFChange(item._id)}}
              >
                Fill PDF
              </CButton>
            </td>
          );
        },
        'button1': (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={()=>{handleSignChange(item._id)}}
              >
                Sign PDF
              </CButton>
            </td>
          );
        },
        'button2': (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={e=>{
                  window.location.href="/show-data?id="+item._id}}
              >
                Show Data
              </CButton>
            </td>
          );
        },
      
      }}
    />
  </div>
   )
       
      
    
}

export default Formdata;