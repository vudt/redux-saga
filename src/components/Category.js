import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListArticles from './ListArticles';

class Category extends Component {

    list_articles_by_slug(slug) {
        switch(slug) {
            case 'reactjs':
                return;
            default:
                return;
        }
    }

    render () {
        return(
            <div>
                <h2>Category {this.props.match.params.slug}</h2>
                
            </div>
            
        )
    }
}

export default Category;