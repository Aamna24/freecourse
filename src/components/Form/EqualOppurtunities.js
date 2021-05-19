import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ScrollToMount from '../../common/ScrollToMount'
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
    const [dValue1, setValue] = useState(oppDetails.dValue1)
    const [dValue2, setValue2] = useState(oppDetails.dValue2)
    const [dValue3, setValue3] = useState(oppDetails.dValue3)
    const [dValue4, setValue4] = useState(oppDetails.dValue4)
    const [dValue5, setValue5] = useState(oppDetails.dValue5)
    const [dValue6, setValue6] = useState(oppDetails.dValue6)
    const [dValue7, setValue7] = useState(oppDetails.dValue7)
    const [dValue8, setValue8] = useState(oppDetails.dValue8)
    const [dValue9, setValue9] = useState(oppDetails.dValue9)
    const [dValue10, setValue10] = useState(oppDetails.dValue10)
    const [dValue11, setValue11] = useState(oppDetails.dValue11)
    const [dValue12, setValue12] = useState(oppDetails.dValue12)
    const [dValue13, setValue13] = useState(oppDetails.dValue13)
    const [dValue14, setValue14] = useState(oppDetails.dValue14)
    const [dValue15, setValue15] = useState(oppDetails.dValue15)
    const [dValue16, setValue16] = useState(oppDetails.dValue16)
    const [dValue17, setValue17] = useState(oppDetails.dValue17)
    const [dValue18, setValue18] = useState(oppDetails.dValue18)

    const [criminalConv, setCriminalConvictions] = useState(oppDetails.criminalConv)
    const [show, setShow] = useState(false)
    const [showFileUpload, setFileUpload]=useState(false)
    const [validated, setValidated] = useState(false);

   
   const dispatch = useDispatch()
   
    const submitHandler=(e)=>{
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
       
      } else{
        e.preventDefault()
        if(disabilities==="Yes"){
          dispatch(saveOppDetails({
            ethnicOrigin, disabilities, wheelchair, firstLang, resident, nonEEACitizen, criminalConv, dValue1,
            dValue2, dValue3, dValue4, dValue5, dValue6, dValue7, dValue8,
            dValue9, dValue10, dValue11, dValue12, dValue13, dValue14, dValue15,dValue16,dValue17, dValue18
        }))
        //history.push('/declaration')
        window.location.href="/declaration"

        }
        else{
          dispatch(saveOppDetails({
            ethnicOrigin, disabilities, wheelchair, firstLang, resident, nonEEACitizen, criminalConv
        }))
            //history.push('/declaration')
            window.location.href="/declaration"

        }
      }
      setValidated(true)
    
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
    const handleChange1=(e)=>{
        setNonEEACitizen(e.target.value)
        if(e.target.value==="Yes"){
          showFileUpload(true)
        }
        else{
          showFileUpload(false)
        }
    }

    return (
        <FormContainer>
          <ScrollToMount/>
            <FormCompletetionSteps step1 step2 step3 step4 step5 step6/>

            <h1>Step 5: Equal Oppurtunities</h1>
            
            <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Group controlId='ethnicOrigin'>
                    <Form.Label>What is your Ethnic Origin?</Form.Label>
                    <Form.Control
                     as ="select"
                     required
                      value={ethnicOrigin} 
                      onChange={(e)=> setEthnicOrigin(e.target.value)}>
                            <option disabled selected value="">[Please select one]</option>
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
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>          
                </Form.Group>
                <Form.Group controlId='disabilities'>
                    <Form.Label>Do you have any disabilities or learning difficulties?</Form.Label>
                    <Form.Control
                     as='select' 
                     required
                      value={disabilities} 
                      onChange={handleChange}>
                          <option disabled selected value="">[Please select one]</option>
              <option value="Yes">
                Yes
              </option>
              <option value="No">
                No
              </option>
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>            
                </Form.Group>
                {show && (
                  <>
                  
                <Form.Group controlId=''>
                    <Form.Label >Select those which apply</Form.Label>
                    <br/>
                    
                    <Form.Check
                    type="checkbox"
                    label="Visual Impairment"
                    name='dValue1'
                    value='dValue1'
                    onChange={(e)=>{
                      setValue(e.target.value)
                    }}
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="Hearing Impairment"
                    name='dValue2'
                    value='dValue2'
                    onChange={(e)=>setValue2(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="Disability affecting mobility"
                    name='dValue3'
                    value='dValue3'
                    onChange={(e)=>setValue3(e.target.value)}
                    className='mr-2'
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Profound complex disabilities"
                    name='dValue4'
                    value='dValue4'
                    className='mr-2'
                    onChange={(e)=>setValue4(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Social and emotional difficulties"
                    name='dValue5'
                    value='dValue5'
                    className='mr-2'
                    onChange={(e)=>setValue5(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Mental Health Difficulties"
                    name='dValue6'
                    value='dValue6'
                    className='mr-2'
                    onChange={(e)=>setValue6(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Moderate Learning Difficulties"
                    name='dValue7'
                    value='dValue7'
                    className='mr-2'
                    onChange={(e)=>setValue7(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Severe Learning Difficulties"
                    name='dValue8'
                    value='dValue8'
                    className='mr-2'
                    onChange={(e)=>setValue8(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Dyslexia"
                    name='dValue9'
                    value='dValue9'
                    className='mr-2'
                    onChange={(e)=>setValue9(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Dyscalculia"
                    name='dValue10'
                    value='dValue10'
                    className='mr-2'
                    onChange={(e)=>setValue10(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Autism Spectrum Disorder"
                    name='dValue11'
                    value='dValue11'
                    className='mr-2'
                    onChange={(e)=>setValue11(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Asperger's Syndrome"
                    name='dValue12'
                    value='dValue12'
                    className='mr-2'
                    onChange={(e)=>setValue12(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Temporary disability after illness or accident"
                    name='dValue13'
                    value='dValue13'
                    className='mr-2'
                    onChange={(e)=>setValue13(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Speech, language and communication needs "
                    name='dValue14'
                    value='dValue14'
                    className='mr-2'
                    onChange={(e)=>setValue14(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Other physical disabilities"
                    name='dValue15'
                    value='dValue15'
                    className='mr-2'
                    onChange={(e)=>setValue15(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Medical condition e.g. epilepsy, asthma, diabetes"
                    name='dValue16'
                    value='dValue16'
                    className='mr-2'
                    onChange={(e)=>setValue16(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Other learning difficulties"
                    name='dValue17'
                    value='dValue17'
                    className='mr-2'
                    onChange={(e)=>setValue17(e.target.value)}
                    >
                   </Form.Check>
                   <Form.Check
                    type="checkbox"
                    label="Other disabilities"
                    name='dValue18'
                    value='dValue18'
                    className='mr-2'
                    onChange={(e)=>setValue18(e.target.value)}
                    >
                   </Form.Check>
                         
                </Form.Group>
                  </>
                ) }

                <Form.Group controlId='wheelchair'>
                    <Form.Label>Are you a wheelchair user? </Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={wheelchair} 
                      onChange={(e)=> setWheelchair(e.target.value)}>
                             <option disabled selected value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>            
                </Form.Group>
                <Form.Group controlId='firstLang'>
                    <Form.Label>is english your first language? </Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={firstLang} 
                      onChange={(e)=> setFirstLang(e.target.value)}>
                             <option disabled selected value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>            
                </Form.Group>
                <Form.Group controlId='resident'>
                    <Form.Label>Have you been resident in England, or elsewhere in the European Economic Area, for at least three years, excluding Wales, Scotland, and Northern Ireland?</Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={resident} 
                      onChange={(e)=> setResident(e.target.value)}>
                             <option disabled selected value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control> 
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>           
                </Form.Group>

                <Form.Group controlId='nonEEACitizen'>
                    <Form.Label>I am a non EEA citizen with permission from the UK government to live in the UK</Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={nonEEACitizen} 
                      onChange={handleChange1}>
                             <option disabled selected value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>   
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>         
                </Form.Group>
                
                <Form.Group controlId='criminalConv'>
                    <Form.Label>Do you have any criminal convictions, cautions or pending prosecutions?</Form.Label>
                    <Form.Control
                     as='select'
                     required
                      value={criminalConv} 
                      onChange={(e)=> setCriminalConvictions(e.target.value)}>
                             <option disabled selected value="">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
                          </Form.Control>  
                          <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>          
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
