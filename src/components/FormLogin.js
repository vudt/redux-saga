import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actLogin } from '../actions';

class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            validate: this.prepare_data_validation(),
            email: null,
            password: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    prepare_data_validation() {
        let data = [
            {
                isValid: true,
                resource: 'email',
                error_msg: "Email can't be blank"
            },
            {
                isValid: true,
                resource: 'password',
                error_msg: "Password can't be blank"
            }
        ];
        return data;
    }

    handleSubmit(event) {
        event.preventDefault();
        const flag = this.handle_Validate();
        if (flag === false) { return false };
        let { email, password } = this.state;
        this.props.submit_form_login(email, password)
    }

    handle_Validate() {
        let { email, password } = this.state;
        let arr_validation = this.prepare_data_validation();
        let flag = true;
        if (!email) {
            arr_validation[0].isValid = false;
            flag = false;
        }
        if (!password) {
            arr_validation[1].isValid = false;
            flag = false;
        }
        this.setState({
            validate: arr_validation
        });
        return flag;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="frmLogin">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className={"form-control" + (this.state.validate[0].isValid === true ? '' : ' is-invalid')} onChange={this.handleChange} />
                        {this.state.validate[0].isValid === false &&
                            <div className="invalid-feedback">{this.state.validate[0].error_msg}</div>
                        }

                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" name="password" id="pwd" className={"form-control" + (this.state.validate[1].isValid === true ? '' : ' is-invalid')} onChange={this.handleChange} />
                        {this.state.validate[1].isValid === false &&
                            <div className="invalid-feedback">{this.state.validate[1].error_msg}</div>
                        }
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submit_form_login: actLogin
    }, dispatch);
}

export default connect(null, mapDispatchToProps) (FormLogin);