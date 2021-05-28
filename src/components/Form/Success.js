import React from 'react'
import { Container, Form} from 'react-bootstrap'

const Success = () => {
    return (
        <Container className="container text-center" style={{marginTop:"50px", marginBottom:"30px"}}>
           <Form.Label as="legend">
               Congratulations, you are almost there! You will be soon on your way to achieving
               a nationally recognised qualification.
           </Form.Label>
           <Form.Label>
               You will receive an email confirmation from us shortly and confirmation of your enrolment from the college
               within 7 working days.
           </Form.Label>
           <Form.Label>
               Thanks again for choosing My Free Course for your learning journey.
           </Form.Label>
        </Container>
    )
}

export default Success
