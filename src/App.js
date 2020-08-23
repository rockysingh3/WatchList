import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import { Watchlist } from './components/Watchlist'
import { Header } from './components/Header'
import { Watched } from './components/Watched'
import { Add } from './components/Add'

import './App.css';
import './lib/font-awesome/css/all.min.css'




function App() {
  return (
    
    <Router>
      <Header/>

      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>

        <Route path="/watched">
          <Watched />
        </Route>

        <Route exact path="/add">
          <Add />
        </Route>


      </Switch>
    </Router>

    
  );
}

export default App;
