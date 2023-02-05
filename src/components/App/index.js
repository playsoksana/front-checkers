
import React from 'react';

import Container from '../Container/index';
import Board from '../Board/index';
import Panel from '../Panel/index';

import styles from './styles.module.css';

function App() {

  return (
    <div className={styles.App}>
      <Container>
        <Panel />
        <Board></Board>
      </Container>
    </div>
  );
}

export default App;
