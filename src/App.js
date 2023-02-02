
import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Board from './components/Board/Board';
import Panel from './components/Panel/index';

function App() {

  return (
    <div className="App">
      <Container>
        <Panel />
        <Board></Board>
      </Container>
    </div>
  );
}

export default App;
