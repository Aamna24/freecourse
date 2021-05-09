import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {saveOppDetails} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'
const EqualOppurtunities = ({history}) => {

    
    const form = useSelector(state=> state.form)
    
    const {oppDetails} = form
    const [ethnicOrigin, setEthnicOrigin] = useState(oppDetails.ethnicOrigin) 
    const [disabilities, setDisablities] = useState(oppDetails.disabilities)
    const [wheelchair, setWheelchair] = useState(oppDetails.wheelchair)
    const [firstLang, setFirstLang] = useState(oppDetails.firstLang)
    const [resident, setResident] = useState(oppDetails.resident)
    const [nonEEACitizen, setNonEEACitizen] = useState(oppDetails.nonEEACitizen)
    //const [household, sethousehold] = useState(oppDetails.household)
    const [criminalConv, setCriminalConvictions] = useState(oppDetails.criminalConv)
    const [show, setShow] = useState(false)
  
   
   const dispatch = useDispatch()
   
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveOppDetails({
            ethnicOrigin, disabilities, wheelchair, firstLang, resident, nonEEACitizen, criminalConv
        }))
            history.push('/declaration')
    
    }
    const handleChange=(e)=>{
        setDisablities(e.target.value)
        if(e.target.value==="Yes"){
          setShow(true)
        }
        else{
          setShow(false)
        }
    }

    return (
        <FormContainer>
            <FormCompletetionSteps step1 step2 step3 step4 step5/>

            <h1>Step 5: Equal Oppurtunities</h1>
            
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='ethnicOrigin'>
                    <Form.Label>What is your Ethnic Origin?</Form.Label>
                    <Form.Control
                     as ="select"
                     
                      value={ethnicOrigin} 
                      onChange={(e)=> setEthnicOrigin(e.target.value)}>
                            <option value="[Please select one]">[Please select one]</option>
              <option value="English/Welsh/Scottish/Northern Irish/British">
                English/Welsh/Scottish/Northern Irish/British
              </option>
              <option value="Irish">Irish</option>
              <option value="Gypsy or Irish traveller">
                Gypsy or Irish traveller
              </option>
              <option value="Any other white background">
                Any other white background
              </option>
              <option value="White and Black Carribean">
                White and Black Carribean
              </option>
              <option value="White and Black African">
                White and Black African
              </option>
              <option value="White and Asian">White and Asian</option>
              <option value="Any other mixed/multiple ethnic background">
                Any other mixed/multiple ethnic background
              </option>
              <option value="Indian">Indian</option>
              <option value="Pakistani">Pakistani</option>
              <option value="Bangladeshi">Bangladeshi</option>
              <option value="Chinese">Chinese</option>
              <option value="Any other Asian background">
                Any other Asian background
              </option>
              <option value="African">African</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Any other Black/African/Caribbean">
                Any other Black/African/Caribbean
              </option>
              <option value="Arab">Arab</option>
              <option value="Any other ethnic group">
                Any other ethnic group
              </option>
              
                          </Form.Control>           
                </Form.Group>
                <Form.Group controlId='disabilities'>
                    <Form.Label>Do you have any disabilities or learning difficulties?</Form.Label>
                    <Form.Control
                     as='select' 
                      value={disabilities} 
                      onChange={handleChange}>
                          <option value="">[Please select one]</option>
              <option value="Yes">
                Yes
              </option>
              <option value="No">
                No
              </option>
                          </Form.Control>           
                </Form.Group>
                {show && (
                  <>
                  
                <Form.Group controlId=''>
                    <Form.Label >Select those which apply</Form.Label>
                    <br/>
                    
                    <Form.Check
                    type="checkbox"
                    label="Vision Impairment"
                    name='email'
                    value='email'
                   
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="Hearing Impairment"
                    name='both'
                    value='both'
                    
                    
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="Disability affecting mobility"
                    name='post'
                    value='post'
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Profound complex disabilities"
                    name='post'
                    value='post'
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Social and emotional difficulties"
                    name='post'
                    value='post'
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Mental Health Difficulties"
                    name='post'
                    value='post'
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Moderate Learning Difficulties"
                    name='post'
                    value='post'
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Severe Learning Difficulties"
                    name='post'
                    value='post'
                    className='mr-2'
                    >
                   </Form.Check>
                         
                </Form.Group>
                  </>
                ) }

                <Form.Group controlId='wheelchair'>
                    <Form.Label>Are you a wheelchair user? </Form.Label>
                    <Form.Control
                     as='select'
                      value={wheelchair} 
                      onChange={(e)=> setWheelchair(e.target.value)}>
                             <option value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>           
                </Form.Group>
                <Form.Group controlId='firstLang'>
                    <Form.Label>is english your first language? </Form.Label>
                    <Form.Control
                     as='select'
                      value={firstLang} 
                      onChange={(e)=> setFirstLang(e.target.value)}>
                             <option value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>           
                </Form.Group>
                <Form.Group controlId='resident'>
                    <Form.Label>Have you been resident in England, or elsewhere in the European Economic Area, for at least three years, excluding Wales, Scotland, and Northern Ireland?</Form.Label>
                    <Form.Control
                     as='select'
                      value={resident} 
                      onChange={(e)=> setResident(e.target.value)}>
                             <option value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>           
                </Form.Group>

                <Form.Group controlId='nonEEACitizen'>
                    <Form.Label>I am a non EEA citizen with permission from the UK government to live in the UK</Form.Label>
                    <Form.Control
                     as='select'
                      value={nonEEACitizen} 
                      onChange={(e)=> setNonEEACitizen(e.target.value)}>
                             <option value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>           
                </Form.Group>
                
                <Form.Group controlId='criminalConv'>
                    <Form.Label>Do you have any criminal convictions, cautions or pending prosecutions?</Form.Label>
                    <Form.Control
                     as='select'
                      value={criminalConv} 
                      onChange={(e)=> setCriminalConvictions(e.target.value)}>
                             <option value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>           
                </Form.Group>
                <Button onClick={e=>{
                    history.push('/qualification')
                }} variant="primary"
                className='mr-5'>Back</Button>
                
                <Button type="submit" variant="primary">Save Progress & Continue</Button>
                
            </Form>
            
        </FormContainer>
    )
}

export default EqualOppurtunities
