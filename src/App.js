import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props)  ;
    this.state = {
      showExercice: false,
      exercicesList: [
           {
               exerciceName : 'pompes',
               partOfBody : 'upper'
           },
           {
               exerciceName : 'squat',
               partOfBody : 'lower'
           },
           {
              exerciceName : 'deadlift',
              partOfBody : 'lower'
          },
          {
              exerciceName : 'pull-up',
              partOfBody : 'upper'
          },
          {
              exerciceName : 'plank',
              partOfBody : 'core'
          },
       ]
   }
  }

     
render() {
  return(
    <div className="App">
      <button type="button">random exercice</button>
      <p>exercice : {this.state.exercicesList[4].exerciceName}</p>
      <p>part of body : {this.state.exercicesList[4].partOfBody}</p>
    </div>
   );
  }
}
  
export default App;
