import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchListUsers } from '../actions';

class Home extends Component {

    constructor(props) {
        super(props);
        const users = this.props.fetchListUsers();
        console.log(users)
    }

    loop_user() {
        if (this.props.users.data) {
            const element = this.props.users.data.map((item) => {
                return (
                    <li key={ item.id }>
                        <p>Email: { item.email }</p>
                        <p>FullName: { item.first_name } {item.last_name}</p>
                        <p><img src={ item.avatar } /></p>
                    </li>
                )
            })
            return element;
        }
    }

    render() {
        return (
            <div className="main-content">
                <h2>Home</h2>
                <ul>
                    {this.loop_user()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchListUsers: fetchListUsers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);