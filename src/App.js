import React from 'react';
import AbsExercices from './components/AbsExercices';
import BicepsExercices from './components/BicepsExercices';
import ChestExercices from './components/ChestExercices';
import LegsExercices from './components/LegsExercices';
import './App.css';

function App() {
  return (
    <div className="App">
      <LegsExercices />
      <AbsExercices />
      <BicepsExercices />
      <ChestExercices />
    </div>
  );
}

export default App;
