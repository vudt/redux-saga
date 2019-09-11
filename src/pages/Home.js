import React, { Component } from 'react';
import ListUsers from '../components/users/ListUsers';
import ModalUser from '../components/modal/ModalUser';


class Home extends Component {

    constructor(props) {
        super(props)
        let currentPage = this.props.match ? this.props.match.params.page : 1
        this.state = { currentPage: currentPage }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.match) {
            this.setState({ currentPage: nextProps.match.params.page })
        }
    }

    render() {
        return (
            <div className="main-content">
                <h2>Home</h2>
                <ListUsers currentPage={ this.state.currentPage } />
                <ModalUser />
            </div>
        )
    }
}

export default Home;