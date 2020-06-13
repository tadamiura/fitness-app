import React from 'react'

const DisplayExercice = ({ name, equipment,id }) =>{
    return(
        <div>
             <p className='random-exerice' key={id}>
                    {`${name}`} 
                    </p>
                    <p className="equipement-description">
                {`and you need ${equipment} equipment`}                
                    </p>
        </div>
    )
}
export default DisplayExercice