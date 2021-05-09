import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {saveEmploymentDetails} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'
const EmployemntForm = ({history}) => {

    
    const form = useSelector(state=> state.form)
    
    const {employmentDetails} = form
    

    const [employementStatus, setEmpStatus] = useState(employmentDetails.employementStatus) 
    const [hoursPerWeek, setHours] = useState(employmentDetails.hoursPerWeek)
    const [length, setLength] = useState(employmentDetails.length)
    const [employerName, setName] = useState(employmentDetails.employerName)
    const [employerAdd, setAdd] = useState(employmentDetails.employerAdd)
    const [postcode, setPostcode] = useState(employmentDetails.postcode)
    const [ph, setPh] = useState(employmentDetails.ph)
    
  const [show, setShow]=useState(false)
   
   const dispatch = useDispatch()
   
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveEmploymentDetails({employementStatus, hoursPerWeek, length, employerName, employerAdd,
        postcode,
    ph}))
            history.push('/qualification')
    
    }

    const handleChange=(e)=>{
      setEmpStatus(e.target.value)
      if(e.target.value==="Unemployed, looking for work"){
        setShow(true)
      }
      else{
        setShow(false)
      }
    }

    return (
        <FormContainer>
            <FormCompletetionSteps step1 step2 step3/>

            <h1>Step 3: Employment Details</h1>
            
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='employementStatus'>
                    <Form.Label>employmentStatus </Form.Label>
                    <Form.Control
                     as ="select"
                     
                      value={employementStatus} 
                      onChange={handleChange}>
                           <option value="">[Please select one]</option>
              <option value="In paid employment (or self employed)">
                In paid employment (or self employed)
              </option>
              <option value="Unemployed, looking for work">
                Unemployed, looking for work
              </option>
              <option value="Employed but on less than £17,004 per year">
                Employed but on less than £17,004 per year
              </option>
                          </Form.Control>           
                </Form.Group>

                {!show && (
                  <>
                  <Form.Group controlId='hoursPerWeek'>
                    <Form.Label>If employed, please select how many hours you work per week?</Form.Label>
                    <Form.Control
                     as='select' 
                      value={hoursPerWeek} 
                      onChange={(e)=> setHours(e.target.value)}>
                          <option value="">[Please select one]</option>
              <option value="0 to 10 hours per week">
                0 to 10 hours per week
              </option>
              <option value="11 to 20 hours per week">
                11 to 20 hours per week
              </option>
              <option value="21 to 30 hours per week">
                21 to 30 hours per week
              </option>
              <option value="30+ hours per week">30+ hours per week</option>
                          </Form.Control>           
                </Form.Group>
                <Form.Group controlId='length'>
                    <Form.Label>If employed, please select length of employment (months) </Form.Label>
                    <Form.Control
                     as='select'
                      value={length} 
                      onChange={(e)=> setLength(e.target.value)}>
                             <option value="">[Please select one]</option>
              <option value="Up to 3">Up to 3</option>
              <option value="4-6">4-6</option>
              <option value="7-12">7-12</option>
              <option value="12+">12+</option>
                          </Form.Control>           
                </Form.Group>
                <Form.Group controlId='employerName'>
                    <Form.Label>If Employed, please enter the name of your Employer </Form.Label>
                    <Form.Control
                     type="text"
                     
                      value={employerName} 
                      onChange={(e)=> setName(e.target.value)}>
                          
                          
                          </Form.Control>           
                </Form.Group>

                <Form.Group controlId='employerAdd'>
                    <Form.Label>Employer Address</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={employerAdd} 
                      onChange={(e)=> setAdd(e.target.value)}></Form.Control>           
                </Form.Group>
               

                <Form.Group controlId='postcode'>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={postcode} 
                      onChange={(e)=> setPostcode(e.target.value)}></Form.Control>           
                </Form.Group>

                <Form.Group controlId='ph'>
                    <Form.Label>ph</Form.Label>
                    <Form.Control
                     type='text' 
                    
                      value={ph} 
                      onChange={(e)=> setPh(e.target.value)}></Form.Control>           
                </Form.Group>
                </>
                )}

                {show && (
                  <>
                  <h1>Step 3.5: UNEMPLOYED/LOW INCOME </h1>
                  <Form.Group controlId='ph'>
                    <Form.Label>If Unemployed, please select how long you have been unemployed?</Form.Label>
                    <Form.Control
                     as="select"
                    
                      value={ph} 
                      onChange={(e)=> setPh(e.target.value)}>
                        <option value="">[Please select one]</option>
              <option value="0-5 months">0-5 months</option>
              <option value="6-11 months">6-11 months</option>
              <option value="12-23 months">12-23 months</option>
              <option value="24-35 months">24-35 months</option>
              <option value="Over 36 months">Over 36 months</option>
                        
                        </Form.Control>           
                </Form.Group>

                <Form.Group controlId='ph'>
                    <Form.Label>Are you in reciepts of benefits?</Form.Label>
                    <Form.Control
                     as="select"
                    
                      value={ph} 
                      onChange={(e)=> setPh(e.target.value)}>
                        <option value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                        
                        </Form.Control>           
                </Form.Group>

                  </>
                )}
                

                <Button onClick={e=>{
                    history.push('/personal')
                }} variant="primary"
                className='mr-5'>Back</Button>
                
                <Button type="submit" variant="primary">Save Progress & Continue</Button>
                
            </Form>
            
        </FormContainer>
    )
}

export default EmployemntForm
