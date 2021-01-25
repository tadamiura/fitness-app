import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

function NewExercice () {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onblur"
    })
    const history = useHistory()

    const token = localStorage.getItem('x-access-token')

    const onSubmit = data => {
        const url = '/api/exercices'
        axios.post(url, data, {headers : {'Authorization' : `Bearer ${token}`}})
        .then((res) => res.data)
        .then((res) => alert(`L'exercice a bien été ajouté dans la liste`))
        .catch((err) => alert(`erreur : ${err.response.data} `))
        .then(
            history.push('/back-office/exercices') 
        )
    }

    return(
        <div className="component form-add-exercice">
            <h2 className="form-title">Ajouter un exercice</h2>
            <form className="add-exercice-form" 
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className="form-container">
                    <label>Nom de l'exercice</label>
                    <br/>
                    <input className="form-input" 
                    name="name" 
                    type="text"
                    placeholder="nouvel exercice"
                    ref={register({ required: true })}
                    />
                    <p className="form-error-message">{errors.name && "Un nom d'exercice est requis"}</p>
                    <br/>
                    <label>Lien YOUTUBE de l'exercice</label>
                    <br/>
                    <input className="form-input" 
                    name="url_name" 
                    placeholder="lien youtube du nouveau exercice" 
                    ref={register}
                    />
                    <br />
                    <input className="form-button-add" 
                    type="submit" 
                    value="Ajouter"
                    disabled={formState.isSubmitting} 
                    />
                    <br />
                    <Link
                    to={`/back-office/exercices`}
                    >
                        <button className='return-button'>Retour</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default NewExercice