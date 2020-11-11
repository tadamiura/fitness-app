import React from 'react';
import AddExercice from './components/backoffice/AddExercice'
import Authentification from './components/tabata/Authentification'
import BurgerMenu from './components/BurgerMenu';
import Countdown from './components/tabata/Countdown'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/backoffice/Home'
import TabataHome from './components/tabata/TabataHome'
import Registration from './components/tabata/Registration'
import { Switch, Route } from 'react-router-dom'

import './App.scss';

const App = () => {
  
    return (
      <div className="App">
        <BurgerMenu />
        <Header />
          <Switch>
          <Route exact path="/" component={TabataHome}/>
          <Route path="/countdown" component={Countdown} />
          <Route path="/registration" component={Registration}/>
          <Route path="/auth/login" component={Authentification}/>
          <Route exact path="/back-office" component={Home} />
          <Route path="/back-office/new-exercice" component={AddExercice} />
          </Switch>
        <Footer />
        </div>
      )
}

export default App;
