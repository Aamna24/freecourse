import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import NavBar from './components/header'
import Footer from './components/footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import Conditions from './components/TermsConditions'
import LoginForm from './components/login'
import SignUp from './components/signup'
import LandingPage from './components/landingPage'
import Courses from './components/Courses'
import AdminPanel from './components/adminLogin'
import UserForm from './components/FormData/UserForm'
import AdminLandingPage from './components/AdminMainPage'
import AddCourse from './components/addCourse'

import config from './config.json'
import './App.css';

class App extends React.Component {
  state = {}

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      console.log(jwt)
      const user = jwtDecode(jwt);
      console.log(user)
    } catch (ex) {
      
    }
     
  }
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }

  callAPI() {
    fetch(config.apiEndpoint)
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
   
    return (
      
      <React.Fragment>
        
      
        <NavBar user={this.state.user}/>
        <main class="">
          <Switch>
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/terms-conditions" component={Conditions} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={SignUp} />
            <Route path="/courses" component={Courses} />
            <Route path="/home" component={LandingPage} />
            <Route path="/admin" component={AdminPanel}/>
            <Route path="/adminhome" component={AdminLandingPage}/>
            <Route path="/addCourse" component={AddCourse}/>
            <Route path="/form" component={UserForm}/>
            <Redirect from="/" exact to="/home" />



          </Switch>
        </main>
        <Footer />
        
      </React.Fragment>

    );
  }
}
export default App;