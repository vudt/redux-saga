import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Pagination extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalPages: 0,
            page: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                totalPages: nextProps.totalPages,
                page: nextProps.page
            })
            
        }
    }

    // prepare_pagination(currentPage, index, totalPages) {
    //     let elem = null;
    //     if (index === 1) {
    //         elem = <li id="first-page" className="page-item"><a className="page-link" href="#">First</a></li>
    //     } else if(index === totalPages) {

    //     } else {

    //     }
    //     return (
           
    //         <li className={ currentPage === index ? 'page-item active' : 'page-item' }><a href="#" className="page-link">{ index }</a></li>
    //     )
    // }

    render_pagination(){
        let elem = null;
        // for(let i = 1; i <= this.state.totalPages; i++) {
            
        // }
    }

    render() {
        console.log(this.state)
        if (this.state.totalPages > 1) {
            return (
                <nav id="nav-pagination">
                    <ul className="pagination justify-content-center">
                        <li id="first-page" className="page-item"><a className="page-link" href="#">First</a></li>
                        <li className="page-item active"><a href="#" className="page-link">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                        <li className="page-item"><a href="#" className="page-link">4</a></li>
                        <li className="page-item"><a href="#" className="page-link">5</a></li>
                        <li id="last-page" className="page-item"><a className="page-link" href="#">Last</a></li>
                    </ul>
                </nav>
            );
        }
    }
}

export default Pagination;
