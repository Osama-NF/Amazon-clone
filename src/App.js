import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { MyContext } from './components/MyContext';
import React from 'react';
import CheckoutPage from './Pages/CheckoutPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

function App() {
  const [basketItems, setBasketItems] = React.useState([])
  const [user, setUser] = React.useState()

  React.useEffect( () =>{
    onAuthStateChanged(auth, user => {
      if (user) setUser(user)
      else setUser(null)
    })
  }, [])

  return (
    <MyContext.Provider value={[basketItems, setBasketItems, user]}>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/checkout' element={<CheckoutPage />}/>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
