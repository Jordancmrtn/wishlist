import React, { useContext } from 'react';
import CtxSuccess from './CtxSuccess';
import CtxError from './CtxError';
import './AlerteMessage.css';

const AlerteMessage = () => {

  const [success, setSuccess] = useContext(CtxSuccess)
  const [error, setError] = useContext(CtxError)


  //Close the modal Succes
  let handleCloseBtnSucces = () => {
    setSuccess(!success)
  }

  //Close the modal Error
  let handleCloseBtnError = () => {
    setError(!error)
  }

  
  return (
    <>
    <div className={ success ? "alertSucces" : "alertSuccesNone"} id="alert1">
      <span className="closebtn" onClick={handleCloseBtnSucces}>&times;</span>  
      <p><strong>Yes !</strong> Ton cadeau à été ajouté à ta wishlist !</p>
    </div> 

    <div className={ error ? "alertFail" : "alertFailNone"} id="alert2">
      <span className="closebtn" onClick={handleCloseBtnError}>&times;</span>  
      <p><strong>Nop !</strong> Vérifie l'url de ton image !</p>
    </div> 
    </>
  )
}

export default AlerteMessage;