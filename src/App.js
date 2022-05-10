import './App.css';
import react from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

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
