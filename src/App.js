import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import PlayerDetail from './PlayerDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/player/:id'>
            <PlayerDetail />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
