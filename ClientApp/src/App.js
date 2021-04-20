import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Register } from './components/Register';
import { AdminPanel } from './components/AdminPanel';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register}/>
            <Route path='/counter' component={Counter} />
            <Route path='/adminpanel' component={AdminPanel} />
      </Layout>
    );
  }
}
