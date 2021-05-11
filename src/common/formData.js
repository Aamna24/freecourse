import React,{useState,useEffect} from 'react';
import { CButton,  CDataTable } from "@coreui/react";
import axios from 'axios'
import { PDFDocument } from 'pdf-lib'
import authService from '../services/authService';

const Formdata=(props,history)=>{
  const [form, setForm]=useState()

  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Cannot find any posts</p>;
  const arr = [];
  //converting post data into array
  const obj = Object.entries(posts.data);
  obj.forEach(([key, value]) => arr.push(value));
  
  // compute items
  
    const a= arr.map(item => {
      return { 
        ...item, 
        firstName: item.personalDetails.firstName, 
        lastName: item.personalDetails.lastName,
        email: item.personalDetails.email,
        appliedCourse: item.detailsFormData.appliedCourse,
        city: item.personalDetails.city,


       
      }
    })
  console.log("a is",a)
  ///
  const fields = [
    { key: "firstName"},"lastName","email",
    "appliedCourse","city","date",
    {
      key: "button2",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "fill_pdf",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "send_email",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    }
    
   
  ];
const HandlePDFChange=async(id)=>{
    const res= await authService.getTestForm(id)
  const formPdfBytes = await fetch('/form.pdf', {cache:'reload'}).then(res => res.arrayBuffer())
  const checkedMark = "\u2714";
  const pdfDoc = await PDFDocument.load(formPdfBytes)
  const form = pdfDoc.getForm()
 
  const emblemUrl = res.data.data.signature
  const emblemImageBytes = await fetch(emblemUrl).then(res => res.arrayBuffer())
  const emblemImage = await pdfDoc.embedPng(emblemImageBytes)

  const signImageField = form.getTextField('Text14')
  signImageField.setImage(emblemImage)


 
 //form.getTextField('Text57').setText(res.data.data.personalDetails.telephone)
  form.getTextField('Text1').setText(res.data.data.personalDetails.lastName)
  form.getTextField('Text2').setText(res.data.data.personalDetails.firstName)
  form.getTextField('Text3').setText(res.data.data.personalDetails.dob)
  form.getTextField('Text4').setText(res.data.data.personalDetails.age)
  form.getTextField('Text6').setText(res.data.data.personalDetails.addLine1)
  form.getTextField('Text9').setText(res.data.data.personalDetails.postcode)
  form.getTextField('Text10').setText(res.data.data.personalDetails.yearsAtAdd)
  form.getTextField('Text11').setText(res.data.data.personalDetails.email)
  form.getTextField('Text12').setText(res.data.data.personalDetails.emergencyContactName)
  form.getTextField('Text13').setText(res.data.data.personalDetails.emergencyTelephone)
  form.getTextField('Text21').setText(res.data.data.qualificationDetails.englishGrades)
  form.getTextField('Text20').setText(res.data.data.qualificationDetails.mathGrades)
  form.getTextField('Text22').setText(res.data.data.oppDetails.criminalConv)
  form.getTextField('Text15').setText(res.data.data.date)
  form.getTextField('Text16').setText(res.data.data.personalDetails.nationality)
  form.getTextField('Text19').setText(res.data.data.employmentDetails.hoursPerWeek)
  form.getTextField('Text17').setText(res.data.data.employmentDetails.employerName)
  form.getTextField('Text18').setText(res.data.data.employmentDetails.employerAdd)

  if(res.data.data.personalDetails.gender==="Female"){
    form.getCheckBox('Check Box51').check()
  }
  else{
    form.getCheckBox('Check Box50').check()
  }

  if(res.data.data.personalDetails.title==="Mr"){
    form.getCheckBox('Check Box45').check()
  }
  else if(res.data.data.personalDetails.title==="Mrs"){
    form.getCheckBox('Check Box46').check()
  }
  else if(res.data.data.personalDetails.title==="Ms"){
    form.getCheckBox('Check Box47').check()
  }
  else if(res.data.data.personalDetails.title==="Miss"){
    form.getCheckBox('Check Box48').check()
  }
  else{
    form.getCheckBox('Check Box49').check()
  }
  

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], {
      type: "application/pdf"
    });
    //Build a URL from the file
    const fileURL = URL.createObjectURL(file);
    //Open the URL on new Window
    window.open(fileURL);
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
      items={a}
      fields={fields}
      columnFilter
      tableFilter
      itemsPerPageSelect
      itemsPerPage={100}
      hover
      sorter
      pagination
     
      scopedSlots={{
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
        'fill_pdf': (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={()=>{HandlePDFChange(item._id)}}
              >
                Download PDF
              </CButton>
            </td>
          );
        },
        'send_email': (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={()=>{
                  window.location.href='/email/'+item.email
                }}
              >
                Send Email
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