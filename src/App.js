import React from 'react';
import './App.css';
// import NavBar from './components /navbar';
import Merch from './components /merch';
import { Routes, Route} from 'react-router-dom'
import Cart from './components /Cart/Cart';
import DataProvider from './components /Context/DataContext';







function App() {
  return (
<DataProvider>
<Routes>
  <Route path='/' element={<Merch />}/>
  <Route path='/cart' element={<Cart />}/>
</Routes>
</DataProvider>

  
  );
}

export default App;
