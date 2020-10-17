import React from 'react';
import AddExercice from './components/backoffice/AddExercice';
// import AddMedia from './components/backoffice/AddMedia';
import BurgerMenu from './components/BurgerMenu';
import Countdown from './components/tabata/Countdown';
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './components/backoffice/Home';
import { Switch, Route } from 'react-router-dom'
import TabataHome from './components/tabata/TabataHome';

import './App.css';

const App = () => {
  
    return (
      <div className="App">
        <BurgerMenu />
        <Header />
          <Switch>
          <Route exact path="/" component={TabataHome}/>
          <Route path="/countdown" component={Countdown} />
          <Route exact path="/back-office" component={Home} />
          <Route path="/back-office/new-exercice" component={AddExercice} />
          {/* <Route path="/back-office/new-exercice/media" component={AddMedia} /> */}
          </Switch>
        <Footer />
        </div>
      )
}

export default App;
