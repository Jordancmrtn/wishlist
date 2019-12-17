import React, { useState, useContext } from 'react';
import CtxPresent from './CtxPresent';
import CtxSuccess from './CtxSuccess';
import CtxError from './CtxError';
import AlertMessage from './AlerteMessage';

import './Form.css';


const Form = () => {

  const [success, setSuccess] = useContext(CtxSuccess)
  const [error, setError] = useContext(CtxError)
  const [wishlist, setWhislist] = useContext(CtxPresent)

  

  const[form, setForm] = useState({
    cadeau : "",
    image : "",
    description: "",
  })

  const addPresent = () => {

    //Check if the input img contain .jpg or .png to prevent error
    if((form.image).includes(".jpg" || ".png")){

      //SetSuccess at true to open the success modal
      setSuccess(!success)

      // Add to the localStorage
      let newWishlist = [...wishlist, form];
      setWhislist(newWishlist)

      localStorage.setItem("Cadeau", JSON.stringify(newWishlist))

      //Remet le form à 0 après.
      setForm({
        cadeau : "",
        image : "",
        description: ""
      })
    
    } else {
      //SetError at true to open the error modal
      setError(!error)
      
      //Remet le form à 0 après.
      setForm({
        cadeau : "",
        image : "",
        description: ""
      })
    }
  }

  return (
    
    <div className="card mb-5">
      <div className="card-body text">
        <AlertMessage/>
        <h4 className="titleForm">Ajoute un cadeau à ta wishlist</h4>
        <div className="form-group">
          <label>Cadeau :</label>
          <input 
            type="email" 
            className="form-control"
            placeholder="Quel est ton cadeau ?" 
            value={form.cadeau}
            onChange={(event) => setForm({...form, cadeau: event.target.value})}/>
        </div>
        <div className="form-group">
          <label>Description :</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Decris le !" 
            value={form.description}
            onChange={(event) => setForm({...form, description: event.target.value})}/>
        </div>
        <div className="form-group">
          <label>Image :</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Lien de l'image" 
            value={form.image}
            onChange={(event) => setForm({...form, image: event.target.value})}/>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={addPresent}>Ajouter</button>
      </div>
    </div>
  )
}

export default Form;