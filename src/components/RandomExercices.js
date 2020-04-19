import React from 'react'

class RandomExercices extends React.Component {
 constructor(props){
     super(props);
     this.state = {
         showUpperOnly : false,
         exercicesList: [
             {
                 exerciceName : 'pompes',
                 partOfBody : 'upper',
             },
             {
                 exerciceName : 'squat',
                 partOfBody : "lower",
             }
         ]
     }
 }

 handleShowStrenghtExercice = () => {
     this.setState({showUpperOnly : !this.state.showUpperOnly
    });
 }

 render() {
     return (
         <div>
            <button type='button' className='callExercice' onClick={this.handleShowStrenghtExercice}>
             Exercice Upper Body: {this.state.showUpperOnly ? 'ON' : 'OFF'}
        </button>
         {this.state.exercicesList.exerciceName}
         </div>

     )
 }
}


export default RandomExercices