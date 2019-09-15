import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavbar from './AppNavbar';

class App extends Component {
  state = {
    isLoading: true,
    jobapps: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/jobapp/all');
    const body = await response.json();
    this.setState({ jobapps: body, isLoading: false });
    
  }

  render() {
    const {jobapps, isLoading} = this.state;
    console.log(jobapps);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        
      <div className="App">
          <AppNavbar></AppNavbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2> Active Applications</h2>
            {jobapps.map(app =>
              <div key={app.companyName}>
                <ul><li>{app.companyName}</li>
                Reference Number: {app.refNumber}
                </ul>
              </div>
              
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;