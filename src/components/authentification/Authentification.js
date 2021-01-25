import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Authentification() {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onblur"
    })

    const history = useHistory()

    const onSubmit = data => { 
        axios.post('/api/auth', data)
        .then(res => res.headers['x-access-token'])
        .then( data => { 
          localStorage.clear()
          localStorage.setItem('x-access-token', data)
          history.push('/back-office/exercices')        
        })
        .then((res) => alert(`Vous êtes désormais connectés`))
        .catch((err) => alert(`Identifiants incorrects : ${err}`))
      }

    return(
    <div className='component'>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="label-input-container">
                <label >Connectez-vous avec votre adresse mail :</label><br></br>
                <input 
                name="email" 
                ref={register({
                    required: true,
                    maxLength: 100,
                    pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                })}             
                placeholder="Email" 
                /><br></br>
              < span className="form-error-message">{errors.email && "Un email valide est requis"}</span>
            </div>
            <div className="label-input-container">
                <label >Votre mot de passe : </label><br></br>
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
            to={`/registration`}
            className='already-get-count'
            >
              Pas encore de compte ?
            </Link>
        </form>
    </div>
    )
}

export default Authentification