import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {savePersonalDetails} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'
const SecondForm = ({history}) => {

    
    const form = useSelector(state=> state.form)
    
    
    const {personalDetails} = form
    

    const [title, setAddress] = useState(personalDetails.title) 
    const [firstName, setFirstName] = useState(personalDetails.firstName)
    const [lastName, setLastName] = useState(personalDetails.lastName)
    const [gender, setGender] = useState(personalDetails.gender)
    const [dob, setDOB] = useState(personalDetails.dob)
    const [addLine1, setAdd] = useState(personalDetails.addLine1)
    const [age, setAge] = useState(personalDetails.age)
    const [city, setCity] = useState(personalDetails.city)
    const [county, setCounty] = useState(personalDetails.county)
    const [postcode, setPostcode] = useState(personalDetails.postcode)
    const [yearsAtAdd, setYears] = useState(personalDetails.yearsAtAdd) 
    const [telephone, setTel] = useState(personalDetails.telephone)
    const [email, setEmail] = useState(personalDetails.email)
    const [emergencyContactName, setEmerCon] = useState(personalDetails.emergencyContactName)
    const [emergencyTelephone, setEmerTel] = useState(personalDetails.emergencyTelephone)
    const [nationalInsNo, setNIN] = useState(personalDetails.nationalInsNo)
   
   const dispatch = useDispatch()
   
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(savePersonalDetails({title, firstName, lastName, gender, dob, addLine1,
        age,city, county, postcode, yearsAtAdd, telephone, email , emergencyContactName, emergencyTelephone, nationalInsNo}))
        //history.push('/employment')
        window.location.href="/employment"
    
    }

    return (
        <FormContainer>
            <FormCompletetionSteps step1 step2/>

            <h3>Step 2: Personal Details</h3>
            <Form.Label as="legend" className="text-center mt-5 mb-3" style={{backgroundColor:"beige",
        padding:"5px"}}>Congratulations, it looks like you could be eligible for government funding or eligible to have the course fees waived by the college. </Form.Label>
            <p className="text-center " style={{backgroundColor:"#e1e5ea", padding:"5px"}}>The next step is to complete your application.</p>
            <div className="text-center mb-5" style={{backgroundColor:"beige", padding:"5px"}}>
            <p>The information you provide will be used to confirm your eligibility to be fully funded by the governments Adult Education Budget (AEB) via the ESFA. So you will be exempt from all course fees.</p>
           <p>Where your course is not eligible to be fully funded, one of our college partners can waive all course fees. So you can still do the course for FREE.</p>
           
           <p>Please ensure you have ID proofs to hand to confirm your identity as you will be asked this at the end of the application. This is to make sure the funding goes to genuine UK or EU citizens that qualify for free/funded training. Acceptable ID proofs include a current passport, drivers licence or recent utility bill.</p>
           <p>As a condition of funding the college is required to gather certain data and carry out identity/eligibility checks. This is to make sure the funding goes to genuine UK or EU citizens that qualify for free/funded training.</p>
           </div>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
                    <Form.Label>Title </Form.Label>
                    <Form.Control
                     type='text' 
                     placeholder='Enter title'
                      value={title} 
                      onChange={(e)=> setAddress(e.target.value)}></Form.Control>           
                </Form.Group>
                <Form.Group controlId='firstName'>
                    <Form.Label>First Name </Form.Label>
                    <Form.Control
                     type='text' 
                     placeholder='Enter First Name'
                      value={firstName} 
                      onChange={(e)=> setFirstName(e.target.value)}></Form.Control>           
                </Form.Group>
                <Form.Group controlId='lastName'>
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control
                     type='text' 
                     placeholder='Enter Last Name'
                      value={lastName} 
                      onChange={(e)=> setLastName(e.target.value)}></Form.Control>           
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
                    
                      value={dob} 
                      onChange={(e)=> setDOB(e.target.value)}></Form.Control>           
                </Form.Group>
                <Form.Group controlId='addLine1'>
                    <Form.Label>Address Line</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={addLine1} 
                      onChange={(e)=> setAdd(e.target.value)}></Form.Control>           
                </Form.Group>
                <Form.Group controlId='age'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={age} 
                      onChange={(e)=> setAge(e.target.value)}></Form.Control>           
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={city} 
                      onChange={(e)=> setCity(e.target.value)}></Form.Control>           
                </Form.Group>

                <Form.Group controlId='county'>
                    <Form.Label>County</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={county} 
                      onChange={(e)=> setCounty(e.target.value)}></Form.Control>           
                </Form.Group>

                <Form.Group controlId='postcode'>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={postcode} 
                      onChange={(e)=> setPostcode(e.target.value)}></Form.Control>           
                </Form.Group>
                <Form.Group controlId='yearsAtAdd'>
                    <Form.Label>Years at Address</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={yearsAtAdd} 
                      onChange={(e)=> setYears(e.target.value)}></Form.Control>           
                </Form.Group>
                <Form.Group controlId='telephone'>
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control
                     type='number' 
                    
                      value={telephone} 
                      onChange={(e)=> setTel(e.target.value)}></Form.Control>           
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={email} 
                      onChange={(e)=> setEmail(e.target.value)}></Form.Control>           
                </Form.Group>

                <Form.Group controlId='emergencyContactName'>
                    <Form.Label>Emergency Contact Name</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={emergencyContactName} 
                      onChange={(e)=> setEmerCon(e.target.value)}></Form.Control>           
                </Form.Group>
                <Form.Group controlId='emergencyTelephone'>
                    <Form.Label>Emergency Telephone</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={emergencyTelephone} 
                      onChange={(e)=> setEmerTel(e.target.value)}></Form.Control>           
                </Form.Group>

                <Form.Group controlId='nationalInsNo'>
                    <Form.Label>National Insurance Number</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={nationalInsNo} 
                      onChange={(e)=> setNIN(e.target.value)}></Form.Control>           
                </Form.Group>

               
                <Button onClick={e=>{
                    window.location.href="/form"
                }} variant="primary"

                className='mr-5'
                
                >Back</Button>
                

                <Button type="submit" variant="primary">Save Progress & Continue</Button>
                
            </Form>
            
        </FormContainer>
    )
}

export default SecondForm
