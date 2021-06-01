import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ScrollToMount from '../../common/ScrollToMount'
import FormContainer from './FormContainer'
import {saveEmergencyDetails} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'
const EmergencyForm = ({history}) => {

    
    const form = useSelector(state=> state.form)
    const form1 = useSelector(state=>state.userDetails)
    const { formDetails} = form1
    
    const {emergencyDetails} = form
    
    const [emergencyContactName, setEmerCon] = useState(emergencyDetails.emergencyContactName || formDetails.data.personalDetails.emergencyContactName)
    const [emergencyTelephone, setEmerTel] = useState(emergencyDetails.emergencyTelephone || formDetails.data.personalDetails.emergencyTelephone)
    const [validated, setValidated] = useState(false);

   const dispatch = useDispatch()
   
    const submitHandler=(e)=>{
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
         
        }else{
        e.preventDefault()
        dispatch(saveEmergencyDetails({emergencyContactName, emergencyTelephone}))
        window.location.href="/employment"
        }
        setValidated(true);

    }

    return (
        <FormContainer>
            <ScrollToMount/>
            <FormCompletetionSteps step1 step2 step3/>

            <h3>Step 3: Emergency Details</h3>
            <Form.Label as="legend" className="text-center mt-5 mb-3" style={{backgroundColor:"beige",
        padding:"5px"}}>
            Providing an emergency contact is a requirement to gain access to funding. This information will not be shared other than in the rare case of an emergency. For those doing their course purely online, this highly unlikely to happen but is still a requirement by the funding body.
            
             </Form.Label>
           
             <Form noValidate validated={validated} onSubmit={submitHandler}>
             <Form.Group controlId='emergencyContactName'>
                    <Form.Label>Emergency Contact Name</Form.Label>
                    <Form.Control
                     type='text' 
                    required
                      value={emergencyContactName} 
                      onChange={(e)=> setEmerCon(e.target.value)}></Form.Control>    
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>          
                </Form.Group>
                <Form.Group controlId='emergencyTelephone'>
                    <Form.Label>Emergency Telephone</Form.Label>
                    <Form.Control
                     type='text' 
                     required
                      value={emergencyTelephone} 
                      onChange={(e)=> setEmerTel(e.target.value)}></Form.Control>   
                      <Form.Control.Feedback type="invalid">
               Please fill the required field.
          </Form.Control.Feedback>           
                </Form.Group>
                <Button onClick={e=>{
                    history.push('/personal')
                }} variant="primary"
                className='mr-5'>Back</Button>
                
                <Button type="submit" variant="primary">Save Progress & Continue</Button>
                </Form>
          </FormContainer>
    )
}

export default EmergencyForm
