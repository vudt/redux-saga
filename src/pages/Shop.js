import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { fetchListProducts } from './../actions/index';

class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = { categories: null, products: null, isFetching: false }
        console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchListProducts(1);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.products.isFetching) {
            this.setState({ products: nextProps.products.data, isFetching: nextProps.products.isFetching })
        }
    }

    render_item(products) {
        let element = products.map( item => {
            return (
                <div key={ item.id } className="col-md-4 product-item">
                    <h3>{ item.title.rendered }</h3>
                    <p>{ item._price}</p>
                </div>
            )
        })
        return element
    }

    render() {
        console.log(this.state)
        let elm = <p>Loading...</p>
        if (this.state.products) {
            elm = this.render_item(this.state.products);
        }
        return(
            <div className="main-content">
                <div className="content-wrapper">
                    <h2>Shop</h2>
                    <div className="row">
                        { elm }        
                    </div>
                </div>
                <div className="sidebar">
                    <h2>Categories</h2>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchListProducts: fetchListProducts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Shop);