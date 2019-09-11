import React, { Component } from 'react';

class ListArticles extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>List Articles</h2>
                <ul className="list-articles">
                    <li><a href="#">Giới thiệu về ReactJS</a></li>
                    <li><a href="#">Giới thiệu về Ruby on Rails</a></li>
                    <li><a href="#">Giới thiệu về PHP</a></li>
                </ul>
            </div>

        )
    }
}

export default ListArticles;