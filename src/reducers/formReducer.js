import { DETAILFORM_SAVE_REQUEST, 
    FORM_SAVE_REQUEST , 
    EMPLOYEMENTFORM_SAVE_REQUEST, 
    QUALIFICATIONFORM_SAVE_REQUEST, 
    OPPURTUNITIESFORM_SAVE_REQUEST,
    DECLARATIONFORM_SAVE_REQUEST,
    PROOF_SAVE_REQUEST,
    FINAL_SAVE_REQUEST,
    FINAL_SAVE_FAIL,
    FINAL_SAVE_SUCCESS,
    SIGN_SAVE_REQUEST,
    EMERGENCYDETAILS_SAVE_REQUEST,
    FORM_DETAILS_REQUEST,
    FORM_DETAILS_SUCCESS,
    FORM_DETAILS_FAIL,
    UPDATE_DETAILS_REQUEST,
    UPDATE_DETAILS_FAIL,
    UPDATE_DETAILS_SUCCESS} from "../constants/formConstans"


export const DetailsFormReducer =(state={detailsFormData: {}}, action)=>{
    switch(action.type){
        case DETAILFORM_SAVE_REQUEST:
            return {
                ...state,
                detailsFormData: action.payload,
            }
       
            default:
            return state
    }
}

export const FinalFormReducer =(state={}, action)=>{
    switch(action.type){
        case FINAL_SAVE_REQUEST:
            return {
                loading: true,
            }
        case FINAL_SAVE_SUCCESS:
            return {
                loading: false,
                success: true,
                final: action.payload
            }
            case FINAL_SAVE_FAIL:
                return {
                    loading: false,
                    error: action.payload
                }
       
            default:
            return state
    }
}

export const formReducer =(state={
    detailsFormData:{},
    personalDetails: {},
    emergencyDetails:{},
    employementDetails:{},
    qualificationDetails:{},
    oppDetails:{},
    declaration:{},
    proof:{},
    sign:{}
}, action)=>{
    switch(action.type){
        case DETAILFORM_SAVE_REQUEST:
            return {
                ...state,
                detailsFormData: action.payload,
            }
        case FORM_SAVE_REQUEST:
            return {
                ...state,
                personalDetails: action.payload,
            }
            case EMERGENCYDETAILS_SAVE_REQUEST:
                return {
                    ...state,
                    emergencyDetails: action.payload,
                }
        case EMPLOYEMENTFORM_SAVE_REQUEST:
            return {
                ...state,
                employementDetails: action.payload
            }
            case QUALIFICATIONFORM_SAVE_REQUEST:
                return {
                    ...state,
                    qualificationDetails: action.payload
                }
        case OPPURTUNITIESFORM_SAVE_REQUEST:
             return {
                        ...state,
                        oppDetails: action.payload
                    }
        case DECLARATIONFORM_SAVE_REQUEST:
            return {
                ...state,
                declaration: action.payload
            }
            case PROOF_SAVE_REQUEST:
                return {
                    ...state,
                    proof: action.payload
                }
                case SIGN_SAVE_REQUEST:
                    return {
                        ...state,
                        sign: action.payload
                    }
       
            default:
            return state
    }
}

export const UserDetailsReducer =(state={formDetails: {}}, action)=>{
    switch(action.type){
        case FORM_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FORM_DETAILS_SUCCESS:
            return {
                loading: false,
                formDetails: action.payload
            }
            case FORM_DETAILS_FAIL:
                return {
                    loading: false,
                    error: action.payload
                }
       
            default:
            return state
    }
}

export const UpdateFormReducer =(state={}, action)=>{
    switch(action.type){
        case UPDATE_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case UPDATE_DETAILS_SUCCESS:
            return {
                loading: false,
                success: true,
                updateForm: action.payload
            }
            case UPDATE_DETAILS_FAIL:
                return {
                    loading: false,
                    error: action.payload
                }
       
            default:
            return state
    }
}
