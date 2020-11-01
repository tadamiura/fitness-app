import React from 'react'
import { useForm } from 'react-hook-form'

function Registration() {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onblur"
    })

    const onSubmit= data => {
        console.log(data)
    }

    const styles = {
        container: {
          width: "80%",
          margin: "0 auto",
        },
        input: {
          width: "100%",
        },
      };
       

    return(
    <div>
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            name="prenom" 
            ref={register({
                required: true,
                maxLength: 80
            })} 
            placeholder="Prénom"
            />
            <span className="form-error-message">{errors.prenom && "Un prénom est requis"}</span>
            <input 
            name="nom" 
            ref={register({
                required: true,
                maxLength: 80,
                pattern: /^[A-Za-z]+$/i,
            })}             
            placeholder="Nom"
            />
            <span className="form-error-message">{errors.nom && "Un nom est requis"}</span>
            <input 
            name="email" 
            ref={register({
                required: true,
                maxLength: 100,
                pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
            })}             
            placeholder="Email" 
            />
            <span className="form-error-message">{errors.email && "Un email valide est requis"}</span>
            <input 
            name="password" 
            ref={register({
                required: true,
                minLength: 6,
            })} 
            placeholder="Password" 
            />
            <span className="form-error-message">{errors.password && "Un mot de passe de 6 caractères minimium est requis"}</span>
            <button type="submit" disabled={formState.isSubmitting}>
                Valider
            </button>
      </form>
    </div>
    )
}

export default Registration