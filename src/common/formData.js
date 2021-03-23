import React from 'react';
import { CButton,  CDataTable } from "@coreui/react";

const Formdata=(props)=>{
  const { posts } = props;
  const arr = [];
  //converting post data into array
  const obj = Object.entries(posts.data);
  obj.forEach(([key, value]) => arr.push(value));
  console.log(arr);
  
   
    if(!posts || posts.length===0) return <p>Cannot find any posts</p>;
    const fields = [
      { key: "name", _style: { width: "40%" } },
      "courseTitle",
      {
        key: "buttons",
        label: "",
        _style: { width: "1%" },
        sorter: false,
        filter: false,
      },
      {
        key: "button1",
        label: "",
        _style: { width: "1%" },
        sorter: false,
        filter: false,
      },
    ];
  
     
    
    
    
    const handleChange=(e)=>{
       const apiUrl =  "https://consulting-backend.herokuapp.com/form/print/"+e;
      
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
    const apiUrl = "https://consulting-backend.herokuapp.com/form/watermark/"+e
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
    
     return (
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
          buttons: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    this.handleChange(item._id);
                  }}
                >
                  Fill PDF
                </CButton>
              </td>
            );
          },
          button1: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Sign
                </CButton>
              </td>
            );
          },
        }}
      />
    );


     
       
      
    
}

export default Formdata;