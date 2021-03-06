import React, { Component } from 'react';
import { connect } from 'react-redux';

class WidgetCart extends Component {

    constructor(props) {
        super(props)
        this.state = { cartData: this.props.cart }
    }

    componentDidMount() {
        this.setState({ cartData: this.props.cart })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ cartData: nextProps.cart })
    }

    render() {
        return (
            <ul id="widget-cart" className="navbar-right">
                <li><a href="#" id="cart"><i className="fa fa-shopping-cart"></i> Cart <span className="badge">{ this.state.cartData.length }</span></a></li>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return { cart: state.cart }
}

export default connect(mapStateToProps) (WidgetCart)