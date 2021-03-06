import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import ScrollToMount from '../../common/ScrollToMount'

import {useDispatch} from 'react-redux'
import FormContainer from './FormContainer'
import {saveDeclarationDetails} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'

const DeclarationForm = ({history}) => {

    
    
    const [consent, setConsent]=useState('')
    const [prefContact, setPrefContact] = useState('')
    const [decl, setDeclare] = useState()
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
        dispatch(saveDeclarationDetails({prefContact}))
            //history.push('/proof')
            window.location.href="/proof"
        }
        setValidated(true)

    }

    return (
        <FormContainer>
            <ScrollToMount/>
            <FormCompletetionSteps step1 step2 step3 step4 step5 step6 step7/>
            <div style={{padding: '15px',
marginBottom: '20px',

border: '1px solid transparent',
borderRadius: '4px',
color: '#8a6d3b',
backgroundColor: '#fcf8e3',
borderColor: '#faebcc'}}>
            <h1 >Step 6: Declaration</h1>
            
            <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Group controlId='level'>
                    <Form.Label >Contact Preferences</Form.Label>
                    <br/>
                    <Form.Label>
                   
                    <Form.Check
                    value={consent}
                   
                    onChange={e=>setConsent(e.target.value)}
          required
          label=" I consent to being contacted regarding my course and enrolment"
          feedback="You must agree before submitting."
        />
                      </Form.Label>
                      

                   
                         
                </Form.Group>

                <Form.Group controlId=''>
                    <Form.Label >Preferred Marketing Method</Form.Label>
                    <br/>
                    
                    <Form.Check
                    type="checkbox"
                    label="By Email"
                    name='email'
                    value='email'
                   
                    onChange={e=>setPrefContact(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="By Post"
                    name='post'
                    value='post'
                    
                    onChange={e=>setPrefContact(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>

                   <Form.Check
                    type="checkbox"
                    label="By Phone"
                    name='phone'
                    value='phone'
                    
                    onChange={e=>setPrefContact(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>
                         
                </Form.Group>

                
                
                
                <Form.Group controlId=''>
                    <Form.Label >Declaration</Form.Label>
                    <p>I agree to My Free Course processing the information provided in accordance with current Data Protection legislation. I declare that I have correctly and fully identified my prior qualifications and that the information provided is correct and complete.</p>
                   

                   <Form.Check
                    type="checkbox"
                    label="I confirm and agree to above"
                    name='decl'
                    value={decl}
                    required
                    feedback="You must agree before submitting."
                    onChange={e=>setDeclare(e.target.value)}
                    className='mr-2'
                    >
                      

                   </Form.Check>
                         
                </Form.Group>

               
              
               

                <Button onClick={e=>{
                    history.push('/oppurtunities')
                }} variant="primary"

                className='mr-5'
                
                >Back</Button>
                

                <Button type="submit" variant="primary" style={{backgroundColor:'green',borderColor:'green'}}>Save Progress & Continue</Button>
                
            </Form>
            </div>
        </FormContainer>
    )
}

export default DeclarationForm
