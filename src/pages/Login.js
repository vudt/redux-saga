import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actLogin } from '../actions';
import FormLogin from '../components/FormLogin';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogged: this.props.isLogged,
            email: this.props.email,
            password: null,
        }
        const authentication = localStorage.getItem('authentication');
        if (authentication) {
            let data = JSON.parse(authentication)
            if (data.isLogged) {
                this.state = { isLogged: true }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isLogged: nextProps.authentication.isLogged, email: nextProps.authentication.email })
    }

    render() {
        if (this.state.isLogged) {
            return <Redirect to='/account' />
        }
        return (
            <div className="main-content">
                <h2>Login Form</h2>
                <FormLogin />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authentication: state.authentication }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submit_form_login: actLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);