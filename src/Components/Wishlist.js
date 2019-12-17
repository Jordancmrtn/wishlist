import React, { useContext } from 'react';
import Present from './Present';
import CtxPresent from './CtxPresent'


const Whislist = () => {

  const [wishlist, setWhislist] = useContext(CtxPresent)

  let test = JSON.parse(localStorage.getItem("Cadeau"))

 

    if(test == null){

      return(
        wishlist.map((present,index) => {
          return <Present  key={index} index={index} cadeau={present.cadeau} image={present.image} description={present.description} index={index}/>
        })
        
      )
      
    }else{

      return(
        test.map((present,index) => {
          return <Present  key={index} index={index} cadeau={present.cadeau} image={present.image} description={present.description} index={index}/>
        })

      )

    }
}

export default Whislist;

//Si j'ai un local storage dans le ctx utulise le sinon tableau vide