import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter, Switch } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Notfound from './pages/Notfound';
import Menu from './components/helpers/Menu';
import WidgetCart from './components/helpers/WidgetCart';
import Login from './pages/Login';
import SingleUser from './pages/SingleUser';
import Shop from './pages/Shop';


// function PrivateRoute({component: Component, ...rest}) {
//   return (
//     <Route {...rest} render={(props) => ()} >

//     </Route>
//   );
// }

class App extends React.Component {

  prepare_data_route() {
    let routes = [
      { path: '/', exact: true, main: () => <Home /> },
      { path: '/page/:page', exact: true, main: ({match}) => <Home match={match} /> },
      { path: '/about', exact: true, main: () => <About /> },
      { path: '/shop', exact: true, main: () => <Shop /> },
      { path: '/news', exact: false, main: ({match}) => <News match={match} /> },
      { path: '/contact', exact: true, main: () => <Contact /> },
      { path: '/login', exact: true, main: () => <Login /> },
      { path: '/account', exact: true, main: () => <Account /> },
      { path: '/user/:id', exact: true, main: ({match}) => <SingleUser match={match} /> },
      { path: '', exact: false, main: () => <Notfound /> },
      
    ]
    return routes;
  }

  render_routes(routes) {
    let data = null;
    if (routes.length > 0) {
      data = routes.map((item, index) => {
        return (
          <Route key={index} exact={item.exact} path={item.path} component={item.main} />
        );
      })
    }
    return data;
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <Menu />
            <WidgetCart />
          </div>
          <hr></hr>
          <div className="main">
            <Switch>
              {this.render_routes(this.prepare_data_route())}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
