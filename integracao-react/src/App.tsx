import React from 'react';
import Contador from './components/Contador';

import './App.css';

function App() {
  return (
    <div className="App">
      <Contador valorInicial={9876} />
      <Contador />
    </div>
  );
}

export default App;
