import React, { useState } from 'react';
import './App.css';
import CtxPresent from './Components/CtxPresent';
import CtxSuccess from './Components/CtxSuccess';
import CtxError from './Components/CtxError';
import Wishlist from './Components/Wishlist';
import Form from './Components/Form';

function App() {

  const [wishList, setWhislist] = useState([]);
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)







  return (
    <div className="App">
        <div className="container">
          <h1 id="title">WishList</h1>
          <CtxSuccess.Provider value={[success, setSuccess]}>
          <CtxPresent.Provider value={[wishList, setWhislist]}>
          <CtxError.Provider value={[error, setError]}>
            <Wishlist />
            <Form />
          </CtxError.Provider>
          </CtxPresent.Provider>
          </CtxSuccess.Provider>
        </div>
    </div>
  );
}

export default App;
