import Axios from 'axios';
import React, { useState } from 'react'
import axios from 'axios' 
import '../../App.css'

const AddExercice = () => {
    const [name, setName] = useState({
        name: ''
    });

    const handleChange = (e) => {
        setName({...name, name : e.target.value})
    }

    const handleSubmit = (e) => {
        const url = 'http://localhost:8080/api/exercices'
        e.preventDefault()
        axios
        .post(url, name)
        .then((res) => res.data) 
        .then((res) => alert(`${res}, l'exercice a bien été ajouté`))
        .catch((err) => alert(`erreur : ${err.response.data} `))
    }

    return (
        <div>
            <form className="add-exercice-form" onSubmit={handleSubmit}>
                <h2>Ajouter un exercice</h2>
                <div className="form-container">
                    <label htmlFor="name">Nom de l'exercice</label><br />
                    <input className="form-input" type="text" id="name" name="name" placeholder="nouvel exercice" required onChange={handleChange}></input>
                    <input className="button-add" type="submit" value="Ajouter" />  
                </div>
            </form>
        </div>
    )
}

export default AddExercice