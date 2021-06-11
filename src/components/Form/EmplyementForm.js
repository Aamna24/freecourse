import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ScrollToMount from '../../common/ScrollToMount'

import FormContainer from './FormContainer'
import {saveEmploymentDetails, saveIdProof} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'
const EmployemntForm = ({history}) => {

    
    const form = useSelector(state=> state.form)
    
    const {employmentDetails, personalDetails} = form
    

    const [employementStatus, setEmpStatus] = useState(employmentDetails.employementStatus) 
    const [hoursPerWeek, setHours] = useState(employmentDetails.hoursPerWeek )
    const [length, setLength] = useState(employmentDetails.length )
    const [employerName, setName] = useState(employmentDetails.employerName )
    const [employerAdd, setAdd] = useState(employmentDetails.employerAdd )
    const [postcode, setPostcode] = useState(employmentDetails.postcode )
    const [ph, setPh] = useState(employmentDetails.ph)
    const [unemployedLength, setUnEmpLength] = useState(employmentDetails.unemployedLength )
    const [dValue1, setValue1]= useState('')
    const [dValue2, setValue2]= useState('')
    const [dValue3, setValue3]= useState('')
    const [dValue5, setValue5]= useState('')
    const [dValue6, setValue6]= useState('')
    const [dValue7, setValue7]= useState('')
    const [dValue8, setValue8]= useState('')
    const [dValue9, setValue9]= useState('')
    const [areYou, setAreYou]=useState()
    const [evidence, setEvidence]=useState(null)
    const [evidence1, setEvidence1]=useState(null)
    const [evidence2, setEvidence2]=useState(null)

    
  const [show, setShow]=useState(false)
  const [show1, setShow1]=useState(false)
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
        if(employementStatus==="Unemployed, looking for work"){
         
          dispatch(saveEmploymentDetails({employementStatus, unemployedLength, dValue1,dValue2,dValue3,
          dValue5,dValue6,dValue7,dValue8,dValue9, areYou}))
               // history.push('/qualification')
               window.location.href="/qualification"
          
         
        }
        else{
          if(employementStatus==="Employed but on less than £17,374.50 per year"){
            const data = new FormData();
     data.append("idPic", evidence)
     data.append("idPic", evidence1)
     data.append("idPic", evidence2)
     data.append("nationalInsNo",personalDetails.nationalInsNo)
     dispatch(saveIdProof(data))
     dispatch(saveEmploymentDetails({employementStatus, hoursPerWeek, length, employerName, employerAdd,
      postcode,
  ph}))
          history.push("/qualification")
          }else{
          dispatch(saveEmploymentDetails({employementStatus, hoursPerWeek, length, employerName, employerAdd,
            postcode,
        ph}))
                //history.push('/qualification')
                window.location.href="/qualification"
          }
        }
        
        }
        
        setValidated(true)
    }

    const handleChange=(e)=>{
      setEmpStatus(e.target.value)
      if(e.target.value==="Unemployed, looking for work"){
        setShow(true)
      }
     
      else if(e.target.value==="Employed but on less than £17,374.50 per year"){
        setShow1(true)
        setShow(false)
      }
      else{
        setShow1(false)
        setShow(false)
      }
     
    }
    
   
    return (
      <>
         <div className="form-jumbotron">
          <h3>LEARNER APPLICATION FORM</h3>
</div>
        <FormContainer>
          <ScrollToMount/>
            <FormCompletetionSteps step1 step2 step3 step4/>

            <h1>Step 3: Employment Details</h1>
           
            <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Group controlId='employementStatus'>
                    <Form.Label>Please select your Employment Status </Form.Label>
                    <Form.Control
                     as ="select"
                     required
                      value={employementStatus} 
                      onChange={handleChange}>
                           <option disabled selected value="">[Please select one]</option>
              <option value="In paid employment (or self employed)">
                In paid employment (or self employed)
              </option>
              <option value="Unemployed, looking for work">
                Unemployed, looking for work
              </option>
              <option value="Employed but on less than £17,374.50 per year">
                Employed but on less than £17,374.50 per year
              </option>
                          </Form.Control> 
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>           
                </Form.Group>

                {!show && !show1 && (
                  <>
                  <Form.Group controlId='hoursPerWeek'>
                    <Form.Label>If employed, please select how many hours you work per week?</Form.Label>
                    <Form.Control
                     as='select' 
                     required
                      value={hoursPerWeek} 
                      onChange={(e)=> setHours(e.target.value)}>
                          <option selected disabled value="">[Please select one]</option>
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
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>         
                </Form.Group>
                <Form.Group controlId='length'>
                    <Form.Label>If employed, please select length of employment (months) </Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={length} 
                      onChange={(e)=> setLength(e.target.value)}>
                             <option selected disabled value="">[Please select one]</option>
              <option value="Up to 3">Up to 3</option>
              <option value="4-6">4-6</option>
              <option value="7-12">7-12</option>
              <option value="12+">12+</option>
                          </Form.Control> 
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>           
                </Form.Group>
                <Form.Group controlId='employerName'>
                    <Form.Label>If Employed, please enter the name of your Employer </Form.Label>
                    <Form.Control
                     type="text"
                     required
                      value={employerName} 
                      onChange={(e)=> setName(e.target.value)}>
                          
                          
                          </Form.Control> 
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>           
                </Form.Group>

                <Form.Group controlId='employerAdd'>
                    <Form.Label>Employer Address</Form.Label>
                    <Form.Control
                     type='text' 
                     required
                      value={employerAdd} 
                      onChange={(e)=> setAdd(e.target.value)}></Form.Control> 
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

                <Form.Group controlId='ph'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                     type='number' 
                     required
                      value={ph} 
                      onChange={(e)=> setPh(e.target.value)}></Form.Control> 
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>           
                </Form.Group>
                </>
                )}

                {show && (
                  <>
                  <h3>Step 3.5: UNEMPLOYED/LOW INCOME </h3>
                  <Form.Group controlId='unemployedLength'>
                    <Form.Label>If Unemployed, please select how long you have been unemployed?</Form.Label>
                    <Form.Control
                     as="select"
                     required
                      value={unemployedLength} 
                      onChange={(e)=> setUnEmpLength(e.target.value)}>
                        <option selected disabled value="">[Please select one]</option>
              <option value="0-5 months">0-5 months</option>
              <option value="6-11 months">6-11 months</option>
              <option value="12-23 months">12-23 months</option>
              <option value="24-35 months">24-35 months</option>
              <option value="Over 36 months">Over 36 months</option>
                        
                        </Form.Control> 
                        <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>   
                </Form.Group>
                <Form.Group controlId='areYou'>
                    <Form.Label>Are you: 19-23 (on first day of learning) and enrolling onto qualifications up to and including Level 2?
</Form.Label>
                    <Form.Control
                     as="select"
                     required
                    onChange={(e)=>setAreYou(e.target.value)}
                      value={areYou} 
                      >
                        <option selected disabled value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                        
                        </Form.Control> 
                        <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>            
                </Form.Group>
                <Form.Group controlId='dec'>
                    <Form.Label>Which benefit do you claim if any?</Form.Label>
                           
                </Form.Group>
                    
                    <Form.Check
                    type="checkbox"
                    label="JSA"
                    name='dValue1'
                    value='dValue1'
                    onChange={(e)=>{
                      setValue1(e.target.value)
                    }}
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Income Support"
                    name='dValue2'
                    value='dValue2'
                    onChange={(e)=>{
                      setValue2(e.target.value)
                    }}
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Council Tax Benefit"
                    name='dValue3'
                    value='dValue3'
                    onChange={(e)=>{
                      setValue3(e.target.value)
                    }}
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="ESA (Any)"
                    name='dValue5'
                    value='dValue5'
                    onChange={(e)=>{
                      setValue5(e.target.value)
                    }}
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Incapacity Benefit"
                    name='dValue6'
                    value='dValue6'
                    onChange={(e)=>{
                      setValue6(e.target.value)
                    }}
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Housing Benefit"
                    name='dValue7'
                    value='dValue7'
                    onChange={(e)=>{
                      setValue7(e.target.value)
                    }}
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Universal Credit"
                    name='dValue8'
                    value='dValue8'
                    onChange={(e)=>{
                      setValue8(e.target.value)
                    }}
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Employed but on low wage"
                    name='dValue9'
                    value='dValue9'
                    onChange={(e)=>{
                      setValue9(e.target.value)
                    }}
                    className='mr-2'
                    >
                   </Form.Check>

                   <Form.Label style={{backgroundColor:"beige", padding:"15px", marginTop:"15px"}}>Additional government funding is available to support the provision of qualifications to people who are on particular benefits. Please provide evidence of you receipt of benefits.
<br/><br/>
Acceptable documents include: Benefits letter or bank statement showing credit and benefit type.
</Form.Label>
<Form.Group controlId='evidence'>

<Form.Label>Evidence</Form.Label>
<Form.Control
 type='file'   
  onChange={(e)=> setEvidence1(e.target.files[0])}
  required
  >
  </Form.Control>  
  <Form.Control.Feedback type="invalid">
               Please upload required file.
          </Form.Control.Feedback>            
</Form.Group>

               </>
                )}

                <>
                {!show && show1 &&(
                      <>
                        <Form.Group controlId='hoursPerWeek'>
                    <Form.Label>If employed, please select how many hours you work per week?</Form.Label>
                    <Form.Control
                     as='select' 
                     required
                      value={hoursPerWeek} 
                      onChange={(e)=> setHours(e.target.value)}>
                          <option selected disabled value="">[Please select one]</option>
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
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>             
                </Form.Group>
                <Form.Group controlId='length'>
                    <Form.Label>If employed, please select length of employment (months) </Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={length} 
                      onChange={(e)=> setLength(e.target.value)}>
                             <option selected disabled value="">[Please select one]</option>
              <option value="Up to 3">Up to 3</option>
              <option value="4-6">4-6</option>
              <option value="7-12">7-12</option>
              <option value="12+">12+</option>
                          </Form.Control>    
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>         
                </Form.Group>
                <Form.Group controlId='employerName'>
                    <Form.Label>If Employed, please enter the name of your Employer </Form.Label>
                    <Form.Control
                     type="text"
                     required
                      value={employerName} 
                      onChange={(e)=> setName(e.target.value)}>
                          
                          
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>             
                </Form.Group>

                <Form.Group controlId='employerAdd'>
                    <Form.Label>Employer Address</Form.Label>
                    <Form.Control
                     type='text' 
                     required
                      value={employerAdd} 
                      onChange={(e)=> setAdd(e.target.value)}></Form.Control> 
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

                <Form.Group controlId='ph'>
                    <Form.Label>ph</Form.Label>
                    <Form.Control
                     type='number' 
                     required
                      value={ph} 
                      onChange={(e)=> setPh(e.target.value)}></Form.Control>  
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>           
                </Form.Group>
                      <Form.Label style={{backgroundColor:"beige", padding:"15px"}}>
                        Additional government funding is available to support the provision of qualifications to people who are in work but are earning below this amount. </Form.Label>
                      <p style={{backgroundColor:"#e1e5ea", padding:"15px"}}>Acceptable documents include: Payslip within the last 3 months or contract with employer stating your income.</p>
                      
                      <Form.Group controlId='evidence'>

              <Form.Control
               type='file' 
              required
                
                onChange={(e)=>setEvidence(e.target.files[0])}
               
                >
                </Form.Control>  
                <Form.Control.Feedback type="invalid">
               Please upload required file.
          </Form.Control.Feedback>           
          </Form.Group>
          <Form.Group controlId='evidence'>

<Form.Label>Additional Evidence</Form.Label>
<Form.Control
 type='file'   
  onChange={(e)=> setEvidence1(e.target.files[0])}
 required
  >
  </Form.Control>  
  <Form.Control.Feedback type="invalid">
               Please upload required file.
          </Form.Control.Feedback>           
</Form.Group>
<Form.Group controlId='evidence'>

<Form.Label>Additional Evidence</Form.Label>
<Form.Control
 type='file'   
  onChange={(e)=> setEvidence2(e.target.files[0])}
 required
  >
  </Form.Control>    
  <Form.Control.Feedback type="invalid">
               Please upload required file.
          </Form.Control.Feedback>         
</Form.Group>
                      </>
                    )}
                </>
                

                <Button onClick={e=>{
                    history.push('/emergencydetails')
                }} variant="primary"
                className='mr-5'>Back</Button>
                
                <Button type="submit" variant="primary" style={{backgroundColor:'green',borderColor:'green'}}>Save Progress & Continue</Button>
                
            </Form>
            
        </FormContainer>
        </>
    )
}

export default EmployemntForm
