import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Category from '../components/Category';
import ListArticles from '../components/ListArticles';
class News extends Component {

    _prepare_menu_item() {
        let data = [
            { to: 'reactjs', title: 'ReactJS' },
            { to: 'ror', title: 'Ruby on Rails' },
            { to: 'php', title: 'PHP' },
            { to: 'wordpress', title: 'Wordpress' },
            { to: 'drupal', title: 'Drupal' },
            { to: 'joomla', title: 'Joomla' },
        ];
        return data;
    }

    loop_menu_item(menus) {
        let nav_Link = null;
        if (menus.length > 0) {
            nav_Link = menus.map((item, index) => {
                return (
                    <li key={index}><NavLink to={`${this.props.match.url}/${item.to}`} activeClassName="active">{item.title}</NavLink></li>
                );
            })
        }
        return nav_Link;
    }

    render() {
        console.log('News Component')
        console.log(this.props.match)
        return (
            <div className="main-content">
                <div className="content-wrapper">
                    <Route exact path={this.props.match.path} component={ListArticles}></Route>
                    <Route path={`${this.props.match.url}/:slug`} component={Category} />
                </div>
                <div className="sidebar">
                    <h2>Categories</h2>
                    <ul>
                        { this.loop_menu_item(this._prepare_menu_item()) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default News;