import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Modal } from 'react-bootstrap';
import { actToggleModal } from '../../actions';

class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = { showModal: this.props.showModal, user: null, isFetching: false }
        this.close = this.close.bind(this)
    }

    close() {
        this.setState({ isFetching: false, user: null })
        this.props.actToggleModal(!this.state.showModal);
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        this.setState({ showModal: nextProps.showModal })
        if (nextProps.user && nextProps.showModal === true) {
            this.setState({ user: nextProps.user, isFetching: nextProps.isFetching })
        }
    }

    render_user_information(user) {
        return (
            <div className="row information">
                <div className="col-md-6">
                    <p><strong>Full Name:</strong></p>
                    <p>{this.state.user.first_name} {this.state.user.last_name}</p>
                    <p><strong>Email:</strong></p>
                    <p>{this.state.user.email}</p>
                </div>
                <div className="col-md-6">
                    <img className="pull-right" src={this.state.user.avatar} />
                </div>
            </div>
        )
    }

    render() {
        console.log(this.state)
        let elm = <p>Loading...</p>
        if (this.state.isFetching === true) {
            elm = this.render_user_information(this.state.user);
        }
        return (
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {elm}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

function mapStateTopProps(state, ownProps) {
    return { showModal: state.showModal, user: state.user.data, isFetching: state.user.isFetching }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        actToggleModal: actToggleModal
    }, dispatch)
}

export default connect(mapStateTopProps, mapDispatchToProps)(ModalUser);
