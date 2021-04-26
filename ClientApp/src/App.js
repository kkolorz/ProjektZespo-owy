import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { AdminPanel } from './components/AdminPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login} />
        <Route path='/adminpanel' component={AdminPanel} />
      </Layout>
    );
  }
}
