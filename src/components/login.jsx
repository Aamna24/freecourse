import React, { Component } from 'react';
import Form from '../common/form';
import Joi from 'joi-browser';
import { login } from '../services/authService'


class Login extends Form {

    state = {
        data: { username: "", password: "" },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            const { data: jwt } = await login(data.username, data.password);
            localStorage.setItem("token",jwt.token);
            this.props.history.push("/")


        } catch (ex) {
            if (ex.response && ex.respone.status === 400) {
                const errors = { ...this.state.errors }
                errors.username = ex.response.data;
                this.setState({ errors })
            }

        }

    }


    render() {

        return (
            <div class="col-xl-3 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4" style={{marginBottom: "90px"}}>
                <h1 style={{ marginTop: "100px" }}>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', "password")}
                    {this.renderButton("Login")}

                </form>
                
            </div>
        );
    }
}

export default Login;