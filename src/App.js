import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import auth from './services/authService'
import NavBar from './components/header'
import Footer from './components/footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import Conditions from './components/TermsConditions'
import LoginForm from './components/login'
import Logout from './components/logout';
import SignUp from './components/signup'
import LandingPage from './components/landingPage'
import Courses from './components/Courses'
import AdminPanel from './components/adminLogin'
import AdminLandingPage from './components/AdminMainPage'
import getStudentData from './common/getStudentData'
import StudentsData from './components/studentsList'
import Details from './common/details'
import Colleges from './components/colleges'
import IncompleteForms from './components/incompleteForms'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';
import UpdateCollegeInfo from './components/editCollegeInfo';

import LoginScreen from './components/test'
import Proof from './components/Form/Proof'
import DeclarationForm from './components/Form/Declaration'
import EqualOppurtunities from './components/Form/EqualOppurtunities'
import QualificationForm from './components/Form/QualificationForm'
import EmployemntForm from './components/Form/EmplyementForm'
import PersonalDetails from './components/Form/PersonalDetails'
import DetailsForm from './components/Form/DetailForm'
import Success from './components/Form/Success'



class App extends React.Component {
  state = {
   
  }

  componentDidMount() {
   const user = auth.getCurrentUser();
   this.setState({user})
     
  }
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }

  callAPI() {
    fetch("https://freecourse-backend.herokuapp.com")
      .then(res => console.log("App connected"))
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    const {user} = this.state;
    
    return (
     
      <React.Fragment>
          <ToastContainer />
      
        <NavBar user={user}/>
        <main className="">
          <Switch>
            <Route path="/home" component={LandingPage} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/terms-conditions" component={Conditions} />

            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={SignUp} />

            <Route path="/courses" component={Courses} />
            <Route path="/single" component={Details}/>
            <Route path="/edit" component={UpdateCollegeInfo}/>



            <Route path="/admin" component={AdminPanel}/>
            <ProtectedRoute path="/incompleteForms" component={IncompleteForms}/>
            <ProtectedRoute path="/adminhome"  component={AdminLandingPage} />
            <ProtectedRoute path="/colleges" component={Colleges}/>
            <ProtectedRoute path="/studentslist" component={StudentsData}/>
            <ProtectedRoute path="/show-data" component={getStudentData}/>



            {/*adding test form*/}
             

            <Redirect from="/" exact to="/home" />

          </Switch>
          <Route path="/proof" component={Proof}/>
             <Route path="/declaration" component={DeclarationForm} />
           <Route path="/oppurtunities" component={EqualOppurtunities}/>
           <Route path="/success" component={Success}/>
             <Route path="/qualification" component={QualificationForm}/>
             <Route path="/employment" component={EmployemntForm}/>
           <Route path="/personal" component={PersonalDetails}/>
             <Route path="/form" component={DetailsForm} />
        </main>
        <Footer />  
      </React.Fragment>
      

    );
  }
}
export default App;