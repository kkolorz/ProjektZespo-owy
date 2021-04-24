import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Login } from './components/Login';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
