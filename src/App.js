import React from 'react';
import AboutMe from './components/AboutMe'
import AboutTabata from './components/AboutTabata'
import Authentification from './components/authentification/Authentification'
import BackOfficeDashboard from './components/backoffice/BackOfficeDashboard';
import Countdown from './components/tabata/Countdown'
import Dashboard from './components/Dashboard'
import ExerciceManagement from './components/backoffice/ExerciceManagement'
import Footer from './components/Footer'
import Header from './components/Header'
import It30Home from './components/IT30/It30Home'
import It30Countdown from './components/IT30/Countdown'
import It30TabataWorkout from './components/IT30/Workout'
import List from './components/backoffice/List'
import NewExercice from './components/backoffice/NewExercice'
import Registration from './components/authentification/Registration'
import SixSixSixHome from './components/666Workout/SixSixSixHome';
import SixSixSixStopWatch from './components/666Workout/SixSixSixStopWatch';
import SixSixSixWorkout from './components/666Workout/Workout'
import TabataHome from './components/tabata/TabataHome'
import TabataWorkout from './components/tabata/Workout'
import WarmUpList from './components/warmup/WarmUpList'
import { Switch, Route } from 'react-router-dom'

import './App.scss';

const App = () => {
  
    return (
      <div className="App">
        <Header />
          <Switch>
          <Route exact path="/" component={Dashboard}/>

          {/* Warm Up Routes */}
          <Route path="/warm-up/list" component={WarmUpList}/>
          
          {/* TABATA Routes */}
          <Route path="/tabata/home" component={TabataHome}/>
          <Route path="/tabata/workout" component={TabataWorkout}/>
          <Route path="/tabata/countdown" component={Countdown} />

          {/* Interval Training 30"/30" Routes */}
          <Route path="/it30/home" component={It30Home}/>
          <Route path="/it30/workout" component={It30TabataWorkout}/>
          <Route path="/it30/countdown" component={It30Countdown} />

          {/* 666 WORKOUT Routes */}
          <Route path="/666-workout/home" component={SixSixSixHome}/>
          <Route path="/666-workout/workout" component={SixSixSixWorkout}/>
          <Route path="/666-workout/stopwatch" component={SixSixSixStopWatch}/>

          {/* Extra informations */}
          <Route path="/about-me" component={AboutMe} />
          <Route path="/about-tabata" component={AboutTabata} />

          {/* Authentification Routes */}
          <Route path="/registration" component={Registration}/>
          <Route path="/auth/login" component={Authentification}/>

          {/* Back Office's Routes */}
          <Route exact path="/back-office" component={BackOfficeDashboard} />
          <Route path="/back-office/exercices" component={List} />
          <Route path="/back-office/exercice/:id" render={(props) => <ExerciceManagement {...props} />}/>
          <Route path="/back-office/new-exercice" component={NewExercice} />
          </Switch>
        <Footer />
        </div>
      )
}

export default App;
