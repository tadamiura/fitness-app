import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
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
        .then((res) => res.data || console.log(res.data))
        .then((res) => alert(`L'exercice a bien été ajouté dans la liste`))
        .catch((err) => alert(`erreur : ${err.response.data} `))
        .then(
            history.push('/back-office/exercices') 
        )
    }

    return(
        <div className="component form-add-exercice">
            <h1 className="form-title">Ajouter un exercice</h1>
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
                    <br/>
                    <p className="form-error-message">{errors.name && "Un nom d'exercice est requis"}</p>
                    <label>Lien YOUTUBE de l'exercice</label>
                    <br/>
                    <input className="form-input" 
                    name="url_name" 
                    placeholder="lien youtube du nouveau exercice" 
                    ref={register}
                    />
                    <br/>
                    <input className="form-button-add" 
                    type="submit" 
                    value="Ajouter"
                    disabled={formState.isSubmitting} 
                    />  
                </div>
            </form>
        </div>
    )
}

export default NewExercice