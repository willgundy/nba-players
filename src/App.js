import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import PlayerDetail from './PlayerDetail';
import Header from './Header';
import TeamsPage from './TeamsPage';
import TeamDetailPage from './TeamDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/players/:id'>
            <PlayerDetail />
          </Route>
          <Route exact path='/teams'>
            <TeamsPage />
          </Route>
          <Route exact path='/team/:id'>
            <TeamDetailPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
