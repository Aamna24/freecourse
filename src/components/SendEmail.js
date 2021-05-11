import React,{useState} from 'react'
import {Row, Col, Container, Form, Button} from 'react-bootstrap'
import * as auth from '../services/adminService'
import {toast} from 'react-toastify'
toast.configure()
const SendEmail = ({match}) => {

    const [subject, setSubject]=useState('')
    const [message, setMsg] = useState('')
    const email=match.params.email

const handleEmail=async(e)=>{
    e.preventDefault()
    const res= await auth.sendEmail(email,subject,message)
    if(res.status===200){
        toast.success("Email sent successfully")
    }
    
}

    return (
        <Container>
            <h4>Send EMAIL </h4>
           <Form >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Enter subject" onChange={(e)=>{
        setSubject(e.target.value)
    }}/>
  </Form.Group>

  <Form.Group controlId="formBasictext">
    <Form.Label>Text</Form.Label>
    <Form.Control as="textarea" rows={6} onChange={(e)=>{
        setMsg(e.target.value)
    }}/>
  </Form.Group>
 
</Form>
 
<Button variant="primary"  onClick={handleEmail}>
    Submit
  </Button>
        </Container>
    )
}

export default SendEmail
