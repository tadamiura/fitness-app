import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

function Registration() {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onblur"
    })

    const history = useHistory()

    const onSubmit = data => {
        axios.post('/api/register', data)
        .then((res) => res.data)
        .then((res) => alert(`Félicitations, votre profil a bien étét enrengistré`),
        history.push('/back-office'))
        .catch((err) => alert(`erreur : ${err.response.data} `))
      }
      
    return(
    <div className='component'>
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="label-input-container">
              <label >Prénom :</label><br></br>
              <input 
              name="prenom" 
              ref={register({
                  required: true,
                  maxLength: 80
              })} 
              placeholder="Prénom"
              /><br></br>
              <span className="form-error-message">{errors.prenom && "Un prénom est requis"}</span>
            </div>
            <div className="label-input-container">
              <label >Nom :</label><br></br>
              <input 
              name="nom" 
              ref={register({
                  required: true,
                  maxLength: 80,
              })}             
              placeholder="Nom"
              /><br></br>
              <span className="form-error-message">{errors.nom && "Un nom est requis"}</span>
            </div>
            <div className="label-input-container">
              <label >Votre adresse mail :</label><br></br>
              <input 
              name="email" 
              ref={register({
                  required: true,
                  maxLength: 100,
                  pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
              })}             
              placeholder="Email" 
              /><br></br>
              <span className="form-error-message">{errors.email && "Un email valide est requis"}</span>
            </div>
            <div className="label-input-container">
              <label >Votre mot de passe : </label>
              <p className="password-format-condition">Au moins 6 caractères requis</p>
              <input 
              name="password" 
              ref={register({
                  required: true,
                  minLength: 6,
              })} 
              placeholder="Password" 
              type="password"
              
              /><br></br>
              <span className="form-error-message">{errors.password && "Un mot de passe de 6 caractères minimium est requis"}</span>

            </div>
            <div>
              <button type="submit" disabled={formState.isSubmitting}>
                  Valider
              </button>
            </div>
      <Link
      to={`/auth/login`}
      className='already-get-count'
      >
        Déjà un compte
      </Link>
      </form>
    </div>
    )
}

export default Registration