import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;
import JobAppList from './JobAppList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={MainPage}/>
          <Route path='/applist' exact={true} component={JobAppList}/>
        </Switch>
      </Router>
    )
  }
}

export default App;