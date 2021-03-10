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
import UserForm from './components/FormData/UserForm'
import AdminLandingPage from './components/AdminMainPage'
import getStudentData from './common/getStudentData'
import StudentsData from './components/studentsList'
import Details from './common/details'
import Colleges from './components/colleges'
import ProtectedRoute from './components/ProtectedRoute'
import config from './config.json'
import './App.css';


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
    fetch("https://consulting-backend.herokuapp.com")
      .then(res => res.text())
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
            <Route path="/form" component={UserForm}/>
            <Route path="/single" component={Details}/>
            <Route path="/show-data" component={getStudentData}/>

            <Route path="/admin" component={AdminPanel}/>
            <ProtectedRoute path="/adminhome"  component={AdminLandingPage} />
            <ProtectedRoute path="/colleges" component={Colleges}/>
            <ProtectedRoute path="/studentslist" component={StudentsData}/>

            <Redirect from="/" exact to="/home" />

          </Switch>
        </main>
        <Footer />  
      </React.Fragment>

    );
  }
}
export default App;