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
import config from './config.json'
import './App.css';

class App extends React.Component {
  state = {}

  componentDidMount() {
    try {

      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user })
    } catch (error) {

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
        <NavBar />
        <main class="">
          <Switch>
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/terms-conditions" component={Conditions} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={SignUp} />
            <Route path="/courses" component={Courses} />
            <Route path="/home" component={LandingPage} />
            <Redirect from="/" exact to="/home" />



          </Switch>
        </main>
        <Footer />

      </React.Fragment>

    );
  }
}
export default App;