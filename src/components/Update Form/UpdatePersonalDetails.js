import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ScrollToMount from '../../common/ScrollToMount'
import FormContainer from './FormContainer'
import { savePersonalDetails} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'

const UpdatePersonalDetails = ({history}) => {

    
    const form1 = useSelector(state=>state.userDetails)
    const {loading, error, formDetails} = form1
    

    const [title, setTitle] = useState( formDetails.data.personalDetails.title  ) 
    const [firstName, setFirstName] = useState(formDetails.data.personalDetails.firstName  )
    const [lastName, setLastName] = useState(formDetails.data.personalDetails.lastName )
    const [gender, setGender] = useState(formDetails.data.personalDetails.gender)
    const [dob, setDOB] = useState(formDetails.data.personalDetails.dob)
    const [addLine1, setAdd] = useState(formDetails.data.personalDetails.addLine1)
    const [age, setAge] = useState(formDetails.data.personalDetails.age)
    const [city, setCity] = useState(formDetails.data.personalDetails.city )
    const [county, setCounty] = useState(formDetails.data.personalDetails.county )
    const [postcode, setPostcode] = useState(formDetails.data.personalDetails.postcode )
    const [yearsAtAdd, setYears] = useState(formDetails.data.personalDetails.yearsAtAdd ) 
    const [telephone, setTel] = useState(formDetails.data.personalDetails.telephone )
    const [email, setEmail] = useState(formDetails.data.personalDetails.email  )
    const [nationalInsNo, setNIN] = useState(formDetails.data.personalDetails.nationalInsNo )
   
    
   
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
        dispatch(savePersonalDetails({title, firstName, lastName, gender, dob, addLine1,
            age,city, county, postcode, yearsAtAdd, telephone, email , nationalInsNo}))
           window.location.href="/update/emergencydetails"
    }
    

        setValidated(true);
        
    }

    return (
        <FormContainer>
            <ScrollToMount/>
            <FormCompletetionSteps step1 step2/>

            <h3>Step 2: Personal Details</h3>
            <Form.Label as="legend" className="text-center mt-5 mb-3" style={{backgroundColor:"beige",
        padding:"5px"}}>Congratulations, it looks like you could be eligible for government funding or eligible to have the course fees waived by the college. </Form.Label>
            <p className="text-center " style={{backgroundColor:"#e1e5ea", padding:"5px"}}>The next step is to complete your application.</p>
            <div className="text-center mb-5" style={{backgroundColor:"beige", padding:"5px"}}>
            <p>The information you provide will be used to confirm your eligibility to be fully funded by the governments Adult Education Budget (AEB) via the ESFA. So you will be exempt from all course fees.</p>
           <p>Where your course is not eligible to be fully funded, one of our college partners can waive all course fees. So you can still do the course for FREE.</p>
           
           </div>
            <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Group controlId='title'>
                    <Form.Label>Title </Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={title} 
                      onChange={(e)=> setTitle(e.target.value)}>
                          <option selected disabled value="">[Please select one]</option>
                          <option value="Mr">Mr</option>
                          <option value="Miss">Miss</option>
                          <option value="Mrs">Mrs</option>
                          <option value="other">Other</option>
                          
                          </Form.Control>  
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>            
                </Form.Group>
                <Form.Group controlId='firstName'>
                    <Form.Label>First Name </Form.Label>
                    <Form.Control
                    required
                     type='text' 
                     placeholder='Enter First Name'
                      value={firstName} 
                      onChange={(e)=> setFirstName(e.target.value)}></Form.Control> 
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
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
               Please fill the required field.
          </Form.Control.Feedback>             
                </Form.Group>
                <Form.Group controlId='gender'>
                    <Form.Label>Gender </Form.Label>
                    <Form.Control
                     as='select'
                     
                      value={gender} 
                      onChange={(e)=> setGender(e.target.value)}>
                          <option>[Please select one]</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          
                          </Form.Control>           
                </Form.Group>

                <Form.Group controlId='dob'>
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                     type='date' 
                     required
                      value={dob} 
                      onChange={(e)=> setDOB(e.target.value)}></Form.Control> 
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>             
                </Form.Group>
                <Form.Group controlId='addLine1'>
                    <Form.Label>Address Line</Form.Label>
                    <Form.Control
                     type='text' 
                    required
                      value={addLine1} 
                      onChange={(e)=> setAdd(e.target.value)}></Form.Control> 
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>             
                </Form.Group>
                <Form.Group controlId='age'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                     type='number' 
                    required
                      value={age} 
                      onChange={(e)=> setAge(e.target.value)}></Form.Control>  
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>            
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                     type='text' 
                      required
                      value={city} 
                      onChange={(e)=> setCity(e.target.value)}></Form.Control>  
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>            
                </Form.Group>

                <Form.Group controlId='county'>
                    <Form.Label>County</Form.Label>
                    <Form.Control
                     type='text' 
                     required
                      value={county} 
                      onChange={(e)=> setCounty(e.target.value)}></Form.Control>
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>              
                </Form.Group>

                <Form.Group controlId='postcode'>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control
                     type='text' 
                     required
                      value={postcode} 
                      onChange={(e)=> setPostcode(e.target.value)}></Form.Control>      
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>        
                </Form.Group>
                <Form.Group controlId='yearsAtAdd'>
                    <Form.Label>Years at Address</Form.Label>
                    <Form.Control
                     type='text' 
                    required
                      value={yearsAtAdd} 
                      onChange={(e)=> setYears(e.target.value)}></Form.Control> 
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>             
                </Form.Group>
                <Form.Group controlId='telephone'>
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control
                     type='number' 
                    required
                      value={telephone} 
                      onChange={(e)=> setTel(e.target.value)}></Form.Control>       
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>       
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                     type='text' 
                     required
                      value={email} 
                      onChange={(e)=> setEmail(e.target.value)}></Form.Control> 
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>             
                </Form.Group>


                <Form.Group controlId='nationalInsNo'>
                    <Form.Label>National Insurance Number</Form.Label>
                    <Form.Control
                     type='text' 
                     required
                      value={nationalInsNo} 
                      onChange={(e)=> setNIN(e.target.value)}></Form.Control>  
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>            
                </Form.Group>

               
                
                

                <Button type="submit" variant="primary">Save Progress & Continue</Button>
                
            </Form>
            
        </FormContainer>
    )
}

export default UpdatePersonalDetails
