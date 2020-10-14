import React from 'react'
 
import '../../App.css'

const AddExercice = () => {
    return (
        <div>
            <form className="add-exercice-form">
                <h2>Ajouter un exercice</h2>
                <div className="form-container">
                    <label htmlFor="Name">Nom de l'exercice</label>
                    <input className="form-input" type="text" id="Name" name="name" required></input>
                    <input className="button-add" type="submit" value="Ajouter" />  
                </div>
            </form>
        </div>
    )
}

export default AddExercice