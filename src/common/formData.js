import React,{useState,useEffect} from 'react';
import { CButton,  CDataTable } from "@coreui/react";
import { PDFDocument } from 'pdf-lib'
import authService from '../services/authService';
import {getUserDetails} from '../actions/formActions'
import {useDispatch, useSelector} from 'react-redux'

const Formdata=(props,history)=>{
  const dispatch = useDispatch()

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
      key: "fill_pdf1",
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
    },
    {
      key: "edit",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    }
    
   
  ];
const HandlePDFChange=async(id)=>{
    const res= await authService.getTestForm(id)
      const formPdfBytes = await fetch('/form1.pdf', {cache:'reload'}).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      const form = pdfDoc.getForm()
      const emblemUrl = res.data.data.signature
  const emblemImageBytes = await fetch(emblemUrl).then(res => res.arrayBuffer())
  const emblemImage = await pdfDoc.embedPng(emblemImageBytes)

      const signImageField = form.getTextField('Text43')
      signImageField.setImage(emblemImage)

      const signImageField1 = form.getTextField('Text66')
      signImageField1.setImage(emblemImage)

      



      if(res.data.data.employmentDetails.unemployedLength==="0-5 months"){
        form.getCheckBox('Check Box44').check()
      }
      else if(res.data.data.employmentDetails.unemployedLength==="6-11 months"){
        form.getCheckBox('Check Box46').check()
      }
      else if(res.data.data.employmentDetails.unemployedLength==="12-23 months"){
        form.getCheckBox('Check Box48').check()
      }
      else if(res.data.data.employmentDetails.unemployedLength==="24-35 months"){
        form.getCheckBox('Check Box45').check()
      }
      else{
        form.getCheckBox('Check Box47').check()
      }
      if(res.data.data.employmentDetails.areYou==="Yes"){
        form.getCheckBox('Check Box56').check()
      }

      form.getTextField('Text67').setText(res.data.data.date)
      form.getTextField('Text17').setText(res.data.data.date)
      form.getTextField('Text10').setText(res.data.data.date)
      form.getTextField('Text28').setText(res.data.data.date)

      form.getTextField('Text3').setText('ZZ999ZZ')
      form.getTextField('Text14').setText('ZZ999ZZ')
      form.getTextField('Text25').setText('ZZ999ZZ')

      if(res.data.data.employmentDetails.dValue1){
        form.getCheckBox('Check Box53').check()
      }
      if(res.data.data.employmentDetails.dValue2){
        form.getCheckBox('Check Box51').check()
      }
      if(res.data.data.employmentDetails.dValue3){
        form.getCheckBox('Check Box50').check()
      }
      if(res.data.data.employmentDetails.dValue5){
        form.getCheckBox('Check Box54').check()
      }
      if(res.data.data.employmentDetails.dValue6){
        form.getCheckBox('Check Box52').check()
      }
      if(res.data.data.employmentDetails.dValue7){
        form.getCheckBox('Check Box49').check()
      }
      if(res.data.data.employmentDetails.dValue8){
        form.getCheckBox('Check Box55').check()
      }
      if(res.data.data.employmentDetails.dValue9){
        form.getCheckBox('Check Box1').check()
      }
      else{
        form.getCheckBox('Check Box55').check()
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

   const HandlePDFChange1=async(id)=>{
    const res= await authService.getTestForm(id)
    const formPdfBytes = await fetch('/form12.pdf', {cache:'reload'}).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const form = pdfDoc.getForm()
    const emblemUrl = res.data.data.signature
    const emblemImageBytes = await fetch(emblemUrl).then(res => res.arrayBuffer())
    const emblemImage = await pdfDoc.embedPng(emblemImageBytes)
    const signImageField = form.getTextField('Text14')
    signImageField.setImage(emblemImage)
  
    const ins = res.data.data.personalDetails.nationalInsNo
    const first = ins.substr(0,2)
    const sec = ins.substr(2,2)
    const third = ins.substr(4,2)
    const fourth = ins.substr(6,3)

    form.getTextField('Text53').setText(first)
    form.getTextField('Text54').setText(sec)
    form.getTextField('Text55').setText(third)
    form.getTextField('Text56').setText(fourth)

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
  
    // ethnic origin
    if(res.data.data.oppDetails.ethnicOrigin==="English/Welsh/Scottish/Northern Irish/British"){
      form.getCheckBox('Check Box92').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Irish"){
      form.getCheckBox('Check Box93').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Gypsy or Irish traveller"){
      form.getCheckBox('Check Box94').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Any other white background"){
      form.getCheckBox('Check Box87').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="White and Black Carribean"){
      form.getCheckBox('Check Box84').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="White and Black African"){
      form.getCheckBox('Check Box83').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="White and Asian"){
      form.getCheckBox('Check Box82').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Any other mixed/multiple ethnic background"){
      form.getCheckBox('Check Box80').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Indian"){
      form.getCheckBox('Check Box77').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Pakistani"){
      form.getCheckBox('Check Box91').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Bangladeshi"){
      form.getCheckBox('Check Box90').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Chinese"){
      form.getCheckBox('Check Box89').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Any other Asian background"){
      form.getCheckBox('Check Box88').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="African"){
      form.getCheckBox('Check Box86').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Caribbean"){
      form.getCheckBox('Check Box85').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Any other Black/African/Caribbean"){
      form.getCheckBox('Check Box81').check()
    }
    else if(res.data.data.oppDetails.ethnicOrigin==="Arab"){
      form.getCheckBox('Check Box79').check()
    }
    else {
      form.getCheckBox('Check Box78').check()
    }
  
    if(res.data.data.oppDetails.firstLang==="Yes"){
      form.getCheckBox('Check Box75').check()
    }
    else{
      form.getCheckBox('Check Box76').check()
    }
  
    if(res.data.data.oppDetails.resident==="Yes"){
      form.getCheckBox('Check Box73').check()
    }
    else{
      form.getCheckBox('Check Box74').check()
    }
    if(res.data.data.oppDetails.nonEEACitizen==="Yes"){
      form.getCheckBox('Check Box71').check()
    }
    else{
      form.getCheckBox('Check Box72').check()
    }
    if(res.data.data.oppDetails.wheelchair==="Yes"){
      form.getCheckBox('Check Box114').check()
    }
    else{
      form.getCheckBox('Check Box113').check()
    }
    if(res.data.data.qualificationDetails.level==="Entry Level"){
      form.getCheckBox('Check Box123').check()
    }
    else if(res.data.data.qualificationDetails.level==="None"){
      form.getCheckBox('Check Box115').check()
    }
    else if(res.data.data.qualificationDetails.level==="Level 1"){
      form.getCheckBox('Check Box116').check()
    }
    else if(res.data.data.qualificationDetails.level==="Level 2"){
      form.getCheckBox('Check Box117').check()
    }
    else if(res.data.data.qualificationDetails.level==="Level 3"){
      form.getCheckBox('Check Box118').check()
    }
    else if(res.data.data.qualificationDetails.level==="Level 4"){
      form.getCheckBox('Check Box119').check()
    }
    else if(res.data.data.qualificationDetails.level==="Level 5"){
      form.getCheckBox('Check Box120').check()
    }
    else if(res.data.data.qualificationDetails.level==="Level 6"){
      form.getCheckBox('Check Box121').check()
    }
    else{
      form.getCheckBox('Check Box122').check()
  
    }
  
    if(res.data.data.oppDetails.disabilities==="Yes"){
      if(res.data.data.oppDetails.dValue1){
        form.getCheckBox('Check Box95').check()
      }
       if(res.data.data.oppDetails.dValue2){
        form.getCheckBox('Check Box96').check()
      }
       if(res.data.data.oppDetails.dValue3){
        form.getCheckBox('Check Box97').check()
      }
       if(res.data.data.oppDetails.dValue4){
        form.getCheckBox('Check Box98').check()
      }
       if(res.data.data.oppDetails.dValue5){
        form.getCheckBox('Check Box99').check()
      }
       if(res.data.data.oppDetails.dValue6){
        form.getCheckBox('Check Box100').check()
      }
       if(res.data.data.oppDetails.dValue7){
        form.getCheckBox('Check Box101').check()
      }
       if(res.data.data.oppDetails.dValue8){
        form.getCheckBox('Check Box102').check()
      }
       if(res.data.data.oppDetails.dValue9){
        form.getCheckBox('Check Box103').check()
      }
       if(res.data.data.oppDetails.dValue10){
        form.getCheckBox('Check Box104').check()
      }
       if(res.data.data.oppDetails.dValue11){
        form.getCheckBox('Check Box105').check()
      }
       if(res.data.data.oppDetails.dValue12){
        form.getCheckBox('Check Box106').check()
      }
       if(res.data.data.oppDetails.dValue13){
        form.getCheckBox('Check Box107').check()
      }
       if(res.data.data.oppDetails.dValue14){
        form.getCheckBox('Check Box108').check()
      }
       if(res.data.data.oppDetails.dValue15){
        form.getCheckBox('Check Box109').check()
      }
       if(res.data.data.oppDetails.dValue16){
        form.getCheckBox('Check Box110').check()
      }
       if(res.data.data.oppDetails.dValue17){
        form.getCheckBox('Check Box111').check()
      }
      if(res.data.data.oppDetails.dValue18){
        form.getCheckBox('Check Box112').check()
      }
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
   return(
    <div >
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
        'edit': (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={e=>{
                  e.preventDefault()
                  localStorage.setItem('formid',item._id)
                  dispatch(getUserDetails(item._id))
                  //window.location.href="/personal"
                }
                }
              >
                Edit
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
        'fill_pdf1': (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={()=>{HandlePDFChange1(item._id)}}
              >
                Download PDF 2
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