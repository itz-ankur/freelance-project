/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Material-UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Material-UI App
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </main>
    </div>
  );
}

export default App;


