import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {createForm, saveIdProof, saveSignDetails} from '../../actions/formActions'
import FormCompletetionSteps from './FormCompletetionSteps'
import SignaturePad from "react-signature-canvas";
import { truncate } from 'lodash-es'
const Proof = ({history}) => {
  const dispatch = useDispatch()

    
    const form = useSelector(state=> state.form)
    
    const {personalDetails} = form
    const [idPic, setID] = useState() 
   
    const [signature, setTrimmed] = useState(null)

   const formCreate = useSelector(state=>state.final)
  const {final, success, error} = formCreate
    
  const [sigPad, setSigPad] = useState({})
  const [msg, setMsg]=useState()

  const clearSig = () => {
    sigPad.clear();
    
  };

 const trim = () => {
    setTrimmed(sigPad.getTrimmedCanvas().toDataURL("image/png"),
    );
    dispatch(saveSignDetails(signature))
  };
   
  useEffect(()=>{
    if( success) {
      history.push("/success")
    }
  },[history,success])
   
    const submitHandler=(e)=>{
     
     e.preventDefault()
     const data = new FormData();
     data.append("idPic", idPic)
     data.append("nationalInsNo",personalDetails.nationalInsNo)
     dispatch(saveIdProof(data))
     dispatch(saveSignDetails(signature))


     dispatch(createForm({
      detailsFormData: form.detailsFormData,
      personalDetails: form.personalDetails,
      employmentDetails: form.employmentDetails, 
      qualificationDetails: form.qualificationDetails, 
      oppDetails: form.oppDetails,
      declaration: form.declaration,
      signature: form.sign
    }))   
       
      
    
    }

  

    return (
      <FormContainer>
      <FormCompletetionSteps step1 step2 step3 step4 step5 step6 step7/>

      <h1>Final Step: ID Proof</h1>
      
      <Form onSubmit={submitHandler}>
          <Form.Label>
          As a condition of funding the college is required to carry out identity checks. This is to make sure the funding goes to genuine UK or EU citizens that qualify for free/funded training.
          </Form.Label>
         
  <Form.Group controlId='title'>

              <Form.Label>Please upload one of the following ID Proofs - Valid Passport / Full Drivers Licence / Utility Bill (last 3 months)</Form.Label>
              <Form.Control
               type='file' 
               placeholder='Enter address'
                
                onChange={(e)=> setID(e.target.files[0])}></Form.Control>           
          </Form.Group>

          <p>If your name on your ID is a different (surname/first) name to the one on your application, the college will need further evidence to support this change. In the form of a marriage certificate or deed poll.</p>

       <Form.Label as="legend">Please Sign the Application</Form.Label>
          <SignaturePad
      id="canvas"
      penColor="green"
      className="mr-6"
      ref={(ref) => {
          setSigPad(ref)
        }}
      canvasProps={{
        width: 500,
        height: 200,
        className: "sigCanvas",
      }}
    />
           <br/>     
  <Button   className='mr-5 ' onClick={trim}>Sign </Button>
  <Button onClick={clearSig}>Clear Signature</Button>
          <br/>

          <br/>
          
          <br/>

         
          <Button onClick={e=>{
              history.push('/declaration')
          }} variant="primary"

          className='mr-5'
          
          >Back</Button>



          <Button type="submit" variant="primary">Send Application</Button>
          
      </Form>
      
  </FormContainer>
    )
}

export default Proof
