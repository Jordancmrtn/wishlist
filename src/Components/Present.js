import React, { useContext, useEffect } from 'react';
import CtxPresent from './CtxPresent';
import "./Present.css"


const Present = (props) => {

  const [wishlist, setWhislist] = useContext(CtxPresent);

  useEffect(() => {
    console.log();
  })

  const deletePresent = () => {
    let newPresent = [...wishlist];
    newPresent.splice(props.index, 1)
    setWhislist(newPresent);

    //Replace old array with the new one which it's been splice
    localStorage.removeItem("Cadeau");
    localStorage.setItem("Cadeau", JSON.stringify(newPresent));
  }

  return (
    <div className="card mb-5">
      <div className="card-body">
        <h5 className="card-title">{props.cadeau}</h5>
        <div className="imageDescription">
          <img src={props.image} alt={props.cadeau}/>
          <p className="card-text">{props.description}</p>
        </div>
        <button className="btn btn-danger" onClick={deletePresent}>Supprimer</button>
      </div>
    </div>
  )
}

export default Present;