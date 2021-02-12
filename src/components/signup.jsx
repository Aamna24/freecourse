import React, { useState, Component } from 'react';
import Joi from 'joi-browser';
import Form from '../common/form'
import * as UserService from '../services/userServices'

class Register extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    }

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(8).label("Password"),
        name: Joi.string().required().label("Name")
    }

    doSubmit = async () => {
        try {
            await UserService.register(this.state.data)
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors }
                errors.username = ex.response.data;
                this.setState({ errors })
            }
        }

    }



    render() {

        return (
            <div class="col-xl-3 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h1 style={{ marginTop: "100px" }}>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', "password")}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton("Register")}

                </form>

            </div>
        );
    }
}

export default Register;
