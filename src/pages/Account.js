import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actLogout, fetchAccount, fetchPostsByUser } from '../actions';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Account extends Component {

    constructor(props) {
        super(props)
        const authentication = this.props.authentication;
        if (authentication) {
            this.state = { isLogged: authentication.isLogged, email: authentication.email, posts: null }
        }
        this.logout = this.logout.bind(this)
    }

    logout() {
        this.props.actLogout();
    }

    componentDidMount() {
        this.props.fetchAccount(1)
        this.props.fetchPostsByUser()
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            isLogged: nextProps.authentication.isLogged, 
            email: nextProps.authentication.email,
            posts: nextProps.posts
        })
    }

    render_list_posts(posts){
        let xhtml = posts.map(item => {
            return (
                <li key={ item.id } class="list-group-item">{ item.title }</li>
            )
        })
        return xhtml
    }

    render() {
        if (!this.state.isLogged) {
            return <Redirect to='/login' />
        }
        let posts = null
        if (this.state.posts) {
            posts = this.render_list_posts(this.state.posts)
        }
        return (
            <div>
                <h2>Welcome, { this.state.email }</h2>
                <p><button className="btn btn-default" onClick={this.logout}>Logout</button></p>
                <hr></hr>
                <h4>List Posts</h4>
                <ul class="list-group">
                    { posts }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        authentication: state.authentication, 
        account: state.account,
        posts: state.posts_by_users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        actLogout: actLogout,
        fetchAccount: fetchAccount,
        fetchPostsByUser: fetchPostsByUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Account);
