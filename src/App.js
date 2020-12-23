import React from 'react';
import AboutMe from './components/AboutMe'
import Authentification from './components/tabata/Authentification'
import AboutTabata from './components/AboutTabata'
import BackOfficeDashboard from './components/backoffice/BackOfficeDashboard';
import Countdown from './components/tabata/Countdown'
import Dashboard from './components/Dashboard'
import ExerciceManagement from './components/backoffice/ExerciceManagement'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/backoffice/List'
import NewExercice from './components/backoffice/NewExercice'
import TabataHome from './components/tabata/TabataHome'
import TabataWorkout from './components/tabata/Workout'
import Registration from './components/tabata/Registration'
import { Switch, Route } from 'react-router-dom'

import './App.scss';

const App = () => {
  
    return (
      <div className="App">
        <Header />
          <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/tabata/home" component={TabataHome}/>
          <Route path="/tabata/workout" component={TabataWorkout}/>
          <Route path="/tabata/countdown" component={Countdown} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/about-tabata" component={AboutTabata} />
          <Route path="/registration" component={Registration}/>
          <Route path="/auth/login" component={Authentification}/>
          <Route exact path="/back-office" component={BackOfficeDashboard} />
          <Route path="/back-office/exercices" component={List} />
          <Route path="/back-office/exercice/:id" render={(props) => <ExerciceManagement {...props} />}/>
          {/* <Route path="/back-office/new-exercice" component={AddExercice} /> */}
          <Route path="/back-office/new-exercice" component={NewExercice} />
          </Switch>
        <Footer />
        </div>
      )
}

export default App;
