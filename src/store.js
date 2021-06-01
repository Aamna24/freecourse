import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer} from './reducers/userReducer'
import {UserDetailsReducer, formReducer, FinalFormReducer, UpdateFormReducer} from './reducers/formReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    form: formReducer,
    form: formReducer,
    final: FinalFormReducer,
    userDetails: UserDetailsReducer,
    updateForm: UpdateFormReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const detailsFormDataFromStorage = localStorage.getItem('detailsFormData') ? JSON.parse(localStorage.getItem('detailsFormData')) : {}
const personalDetailsFromStorage = localStorage.getItem('personalDetails') ? JSON.parse(localStorage.getItem('personalDetails')) : {}
const employmentDetailsFromStorage = localStorage.getItem('employmentDetails') ? JSON.parse(localStorage.getItem('employmentDetails')) : {}
const qualificationDetailsFromStorage = localStorage.getItem('qualificationDetails') ? JSON.parse(localStorage.getItem('qualificationDetails')) : {}
const oppDetailsFromStorage = localStorage.getItem('oppDetails') ? JSON.parse(localStorage.getItem('oppDetails')) : {}
const declrationDetailsFromStorage = localStorage.getItem('declaration') ? JSON.parse(localStorage.getItem('declaration')) : {}
const proofFromStorage = localStorage.getItem('proof') ? JSON.parse(localStorage.getItem('proof')) : {}
const signFromStorage = localStorage.getItem('sign') ? JSON.parse(localStorage.getItem('sign')) : {}
const emergencyDetailsFromStorage= localStorage.getItem('emergencyDetails') ? JSON.parse(localStorage.getItem('emergencyDetails')) : {}
const userFromStorage = localStorage.getItem('formDetails') ? JSON.parse(localStorage.getItem('formDetails')) : {}
const initialState = {
    userLogin: { userInfo: userInfoFromStorage},
    form: {
        detailsFormData: detailsFormDataFromStorage,
        personalDetails: personalDetailsFromStorage,
        emergencyDetails: emergencyDetailsFromStorage,
       employmentDetails:employmentDetailsFromStorage,
       qualificationDetails: qualificationDetailsFromStorage,
       oppDetails: oppDetailsFromStorage,
       declaration: declrationDetailsFromStorage,
       proof: proofFromStorage,
       sign: signFromStorage
    },
    userDetails: {formDetails: userFromStorage}
}


const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;