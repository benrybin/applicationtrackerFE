import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/jobapp/all');
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
    
  }

  render() {
    const {groups, isLoading} = this.state;
    console.log(groups);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2> List</h2>
            {groups.map(group =>
              <div key={group.companyName}>
                {group.companyName}
              </div>
              
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;