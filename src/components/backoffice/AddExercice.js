import React, { useState } from 'react'
import axios from 'axios' 
import '../../App.css'

const AddExercice = () => {
    const [name, setName] = useState({
        name: '',
        url_name: ''
    });

    const handleChange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        const url = 'http://localhost:8080/api/exercices'
        e.preventDefault()
        axios
        .post(url, name)
        .then((res) => res.data || console.log(res.data)) 
        .then((res) => alert(`${res}, l'exercice a bien été ajouté`))
        .catch((err) => alert(`erreur : ${err.response.data} `))
    }

    return (
        <div>
            <form className="add-exercice-form" onSubmit={handleSubmit}>
                <h2>Ajouter un exercice</h2>
                <div className="form-container">

                    <label htmlFor="name">Nom de l'exercice</label><br />
                    <input className="form-input" type="text" id="name" name="name" placeholder="nouvel exercice" required onChange={handleChange}></input><br />

                    <label htmlFor="url_name">Lien YOUTUBE de l'exercice</label><br />
                    <input className="form-input" type="text" id="url_name" name="url_name" placeholder="lien youtube du nouveau exercice" onChange={handleChange}></input>

                    <input className="button-add" type="submit" value="Ajouter" />  
                </div>
            </form>
        </div>
    )
}

export default AddExercice