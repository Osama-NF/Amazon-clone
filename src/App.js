import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { MyContext } from './components/MyContext';
import React from 'react';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  const [basketItems, setBasketItems] = React.useState([])

  return (
    <MyContext.Provider value={[basketItems, setBasketItems]}>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/checkout' element={<CheckoutPage />}/>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
