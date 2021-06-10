import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {saveDetailsForm} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'

const DetailsForm = ({history}) => {

    const form = useSelector(state=> state.form)
  
    const {detailsFormData} = form

    const [firstName, setFirstName] = useState(detailsFormData.firstName) 

    const [lastName, setLastName] = useState(detailsFormData.lastName)
    const [email, setEmail] = useState(detailsFormData.email) 
    const [mobile, setMobile] = useState(detailsFormData.mobile)
    const [appliedCourse, setCourse] = useState(detailsFormData.appliedCourse)
    const [residencyStatus, setResStatus] = useState(detailsFormData.residencyStatus)
    const [ans, setAns]=useState(detailsFormData.ans)
    const [validated, setValidated] = useState(false);

   const dispatch = useDispatch()

    const submitHandler=(e)=>{
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
       
      }
      else{
        e.preventDefault()
        dispatch(saveDetailsForm({firstName,lastName,email,mobile,appliedCourse,ans}))
        if(ans==="No"|| ans===""){

          alert('Sorry, You didnot qualitfy')
          window.location.reload('/details')
        }
        else{
         
         history.push("/personal")
        }
      }
      setValidated(true)
        
        
    }

    return (
        <FormContainer>
          <FormCompletetionSteps step1 />
          
            <h1>Step 1: Eligibility Check</h1>
            <p>
The courses are funded by the governments Adult Education Budget (AEB) via the ESFA. So if you qualify you will be exempt from all course fees.
</p>
            <p>To see if you qualify please answer the following questions.</p>
            <Form noValidate validated={validated} onSubmit={submitHandler}>
              
           
          
                <Form.Group controlId='appliedCourse'>
                    <Form.Label>Which course are you applying for? </Form.Label>
                    <Form.Control
                     as="select" 
                     required
                      value={appliedCourse} 
                      onChange={(e)=> setCourse(e.target.value)}>
                          <option selected disabled value="">[Please Select One]</option>
                          <option value="Awareness of Mental Health">
                Awareness of Mental Health
              </option>
              <option value="Children and Young's People Mental Health">
                Children and Young's People Mental Health
              </option>
              <option value="Customer and Service">Customer and Service</option>
              <option value="Equality and Diversity">
                Equality and Diversity
              </option>
              <option value="Caring for the Elderly">
                Caring for the Elderly
              </option>
              <option value="Behavior that challenges in Children">
                Behavior that challenges in Children
              </option>
              <option value="Preparing to work in Adult Social Care">
                Preparing to work in Adult Social Care
              </option>
              <option value="Individuals with learning disabilities">
                Individuals with learning disabilities
              </option>
              <option value="Bullying in Children and Young Children">
                Bullying in Children and Young Children
              </option>
              <option value="Learn Organization Managemnt Techniques">
                Learn Organization Managemnt Techniques
              </option>
              <option value="Principles of Warehousing">
                Principles of Warehousing
              </option>
              <option value="IT User Skills">IT User Skills</option>
              <option value="Understanding Retail Operations">
                Understanding Retail Operations
              </option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Behavior that Challenges in Children">
                Behavior that Challenges in Children
              </option>
              <option value="Information, Advice and Guidance">
                Information, Advice and Guidance
              </option>
              <option value="Understanding Autism">Understanding Autism</option>
              <option value="Dignity and safeguarding and adult safeguarding">
                Dignity and safeguarding and adult safeguarding
              </option>
              <option value="Retail operations">Retail operations</option>
              <option value="Digital skills in employment">
                Digital skills in employment
              </option>
              <option value="End Of Life Care">End Of Life Care</option>
              <option value="Principles of Team Leading">
                Principles of Team Leading
              </option>
              <option value="Principles of Dementia Care">
                Principles of Dementia Care
              </option>
              <option value="Falls Prevention Awareness">
                Falls Prevention Awareness
              </option>
                          </Form.Control>  
                          <Form.Control.Feedback type="invalid">
            Please fill in this required field.
          </Form.Control.Feedback>         
                </Form.Group>
                
                <Form.Group controlId='residencyStatus'>
                    <Form.Label>What is your residency status? </Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={residencyStatus} 
                      onChange={(e)=> setResStatus(e.target.value)}>
                       <option selected disabled value="">[Please Select One]</option>
              <option value="British Citizen">British Citizen</option>
              <option value="Citizen of a Country within the EEA">
                Citizen of a Country within the EEA
              </option>
              <option value="Non-EU Citizen with indefinite leave to remain">
                Non-EU Citizen with indefinite leave to remain
              </option>
              <option value="Non-EU Citizen with Discretionary leave to remain">
                Non-EU Citizen with Discretionary leave to remain
              </option>
              <option value="Non-EU Citizen with Exceptional leave to remain">
                Non-EU Citizen with Exceptional leave to remain
              </option>
              <option value="Non-EU Citizen with indefinite leave to remain">
                Non-EU Citizen with indefinite leave to remain
              </option>
              <option value="Refugee Status">Refugee Status</option>
              <option value="Asylum Seeker">Asylum Seeker</option>
              <option value="Husband, Wife, Civil Partner or Child of an eligible person">
                Husband, Wife, Civil Partner or Child of an eligible person
              </option>
              <option value="Other (details and evidence in learner file)">
                Other (details and evidence in learner file)
              </option>
                        </Form.Control> 
                        <Form.Control.Feedback type="invalid">
            Please fill in this required field.
          </Form.Control.Feedback>           
                </Form.Group>
               
                <Form.Group controlId='ans'>
                    <Form.Label>Can you answer yes to the below? </Form.Label>
                    <p>Please note: to be eligible for funding you must choose yes to confirm you meet the following criteria</p>
                    <ol>
                    <li>I currently live in England or Scotland </li>
                    <li>I have lived in the European Union for the last 3 years.</li>
                    <li>I am aged 24 or older</li>
                    <li>I have not studied the course I am applying for before</li>
                      </ol>
                    <Form.Control
                     as='select'
                     required
                      value={ans} 
                      onChange={(e)=> setAns(e.target.value)}>
                        <option selected disabled value="">[Please select one]</option>
                        <option value='yes'>Yes</option>
                        <option value='No'> No</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
            Please fill in this required field.
          </Form.Control.Feedback>            
                </Form.Group>
                <Form.Group controlId='firstName'>
                    <Form.Label>First Name </Form.Label>
                    <Form.Control
                     type='text' 
                     required
                     placeholder='Enter First Name'
                      value={firstName} 
                      onChange={(e)=> setFirstName(e.target.value)}></Form.Control> 
                      <Form.Control.Feedback type="invalid">
            Please fill in this required field.
          </Form.Control.Feedback>           
                </Form.Group>

                <Form.Group controlId='lastName'>
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control
                     type='text' 
                     required
                     placeholder='Enter Last Name'
                      value={lastName} 
                      onChange={(e)=> setLastName(e.target.value)}></Form.Control> 
                      <Form.Control.Feedback type="invalid">
            Please fill in this required field.
          </Form.Control.Feedback>           
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                     type='email' 
                     required
                     placeholder='Enter Email'
                      value={email} 
                      onChange={(e)=> setEmail(e.target.value)}></Form.Control>  
                      <Form.Control.Feedback type="invalid">
            Please fill in this required field.
          </Form.Control.Feedback>          
                </Form.Group>
                <Form.Group controlId='mobile'>
                    <Form.Label>Mobile </Form.Label>
                    <Form.Control
                    required
                     type='number' 
                     placeholder='Enter Mobile No'
                      value={mobile} 
                      onChange={(e)=> setMobile(e.target.value)}></Form.Control>   
                      <Form.Control.Feedback type="invalid">
            Please fill in this required field.
          </Form.Control.Feedback>         
                </Form.Group>


                <Button type="submit" variant="primary" style={{backgroundColor:'green',borderColor:'green'}}>Submit</Button>
            </Form>
            
        </FormContainer>
    )
}

export default DetailsForm
