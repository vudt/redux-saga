import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoxAccount extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="box-account">
                <hr></hr>
                <h4>Account Info</h4>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ this.props.id }</td>
                            <td>{ this.props.name }</td>
                            <td>{ this.props.email }</td>
                            <td>{ this.props.phone }</td>
                            <td>{ this.props.website }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BoxAccount;