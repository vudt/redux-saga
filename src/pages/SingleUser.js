import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { fetchUser } from './../actions';

class SingleUser extends Component {
    
    constructor(props) {
        super(props)
        this.state = { user_id: this.props.match.params.id, user: null }
    }

    componentDidMount(){
        this.props.fetchUser(this.state.user_id);
    }

    componentWillReceiveProps(nextProps) {   
        if (nextProps.user.data) {
            if (this.props.user.data) {
                if (nextProps.user.data.id === this.props.user.data.id) {
                    this.setState({user: null});
                    return;
                }
            } 
            this.setState({user: nextProps.user.data});
        }
    }

    render() {
        console.log(this.state.user)
        let elm = <p>Loading...</p>
        if (this.state.user) {
            elm = (
                <div>
                    <h4>{ this.state.user.first_name } { this.state.user.last_name }</h4>
                    <h5>{ this.state.user.email }</h5>
                    <img src={ this.state.user.avatar } />
                </div>
            );
        } else {
            elm = <p>Data not found.</p>
        }
        return (
           <div> { elm } </div>
        )
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({
        fetchUser: fetchUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (SingleUser);