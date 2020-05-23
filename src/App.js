import React from 'react';
import Countdown from './components/tabata/Countdown';
import Footer from './components/Footer'
import Header from './components/Header';
import TabataHome from './components/tabata/TabataHome';
import { Switch, Route } from 'react-router-dom'
import './App.css';

const App = () => {

    return (
      <div className="App">
          <Header />
            <Switch>
            <Route exact path="/" component={TabataHome}/>
            <Route path="/countdown" component={Countdown} />
            </Switch>
          <Footer />
        </div>
      )
}

export default App;
