import {DETAILFORM_SAVE_REQUEST,
    DETAILFORM_SAVE_SUCCESS,
    DETAILFORM_SAVE_FAIL,
     FORM_SAVE_SUCCESS,
     FORM_SAVE_FAIL, 
     EMPLOYEMENTFORM_SAVE_SUCCESS,
     EMPLOYEMENTFORM_SAVE_FAIL,
     QUALIFICATIONFORM_SAVE_SUCCESS,
     QUALIFICATIONFORM_SAVE_FAIL,
     OPPURTUNITIESFORM_SAVE_SUCCESS,
     OPPURTUNITIESFORM_SAVE_FAIL,
     DECLARATIONFORM_SAVE_SUCCESS,
     DECLARATIONFORM_SAVE_FAIL,
     PROOF_SAVE_SUCCESS,
     PROOF_SAVE_FAIL,
     PROOF_SAVE_REQUEST,
    FINAL_SAVE_REQUEST,
FINAL_SAVE_SUCCESS,
FINAL_SAVE_FAIL,
SIGN_SAVE_SUCCESS,
SIGN_SAVE_FAIL} from "../constants/formConstans"
import axios from 'axios'


export const saveDetailsForm =(data)=> async(dispatch)=>{
    const {firstName, lastName, email,mobile, appliedCourse} = data
    
    try {
        dispatch({
            type: DETAILFORM_SAVE_REQUEST
        })

        const {data} = await axios.post('http://localhost:61500/users/registerDetails/', {firstName,lastName,email,mobile})
      
        
        dispatch({
            type: DETAILFORM_SAVE_SUCCESS,
            payload: data.data
        })
        localStorage.setItem('detailsFormData', JSON.stringify({firstName,lastName, email,mobile,appliedCourse}))
        
    } catch (error) {
        dispatch({
            type: DETAILFORM_SAVE_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
   

    
}

export const savePersonalDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: FORM_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('personalDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: FORM_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveEmploymentDetails =(data)=>async(dispatch)=>{
    try{
    
    
    dispatch({
        type: EMPLOYEMENTFORM_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('employmentDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: EMPLOYEMENTFORM_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveQualificationDetails =(data)=>async(dispatch)=>{
    try{
    
    
    dispatch({
        type: QUALIFICATIONFORM_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('qualificationDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: QUALIFICATIONFORM_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}


export const saveOppDetails =(data)=>async(dispatch)=>{
    try{
    
    
    dispatch({
        type: OPPURTUNITIESFORM_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('oppDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: OPPURTUNITIESFORM_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}


export const saveDeclarationDetails =(data)=>async(dispatch)=>{
    try{
    
    
    dispatch({
        type: DECLARATIONFORM_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('declaration', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: DECLARATIONFORM_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveSignDetails =(data)=>async(dispatch)=>{
    try{
    console.log(data)
    
    dispatch({
        type: SIGN_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('sign', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: SIGN_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveIdProof =(dat)=>async(dispatch)=>{
    try{
        dispatch({
                type: PROOF_SAVE_REQUEST
        })
    
        const {data} = await axios.post('http://localhost:61500/form/ids/', dat)

    dispatch({
        type: PROOF_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('proof', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: PROOF_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}


export const createForm =(dat)=>async(dispatch)=>{
    try{
        dispatch({
                type: FINAL_SAVE_REQUEST
        })
    
        const {data} = await axios.post('http://localhost:61500/form/add', dat)

    dispatch({
        type: FINAL_SAVE_SUCCESS,
        payload: data
    })
    //localStorage.setItem('final', JSON.stringify(dat))
}
catch(error){
    dispatch({
        type: FINAL_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

