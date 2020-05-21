import React from 'react';
// import StrenghtProgram from './components/StrenghtProgram';
import Header from './components/Header';
import TabataHome from './components/tabata/TabataHome';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Countdown from './components/tabata/Countdown';

const App = () => {

    return (
      <div className="App">
          <Header />
            <Switch>
            <Route exact path="/" component={TabataHome}/>
            <Route path="/countdown" component={Countdown} />
            </Switch>
        </div>
      )
}

export default App;
