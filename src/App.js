import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* <Router>      */}
      <Router>  
        <Switch>

          <Route path="/chat">
          <h1>I am the chat page</h1>
          </Route>

          <Route path="/">
            <TinderCards />
            
          </Route>

        </Switch>
      

      

      
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}

      {/* Chat screen */}
      {/* Inidividual chat screen */}
      </Router>
    </div>
  );
}

export default App;
