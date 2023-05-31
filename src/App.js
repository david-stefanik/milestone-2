import React from 'react';


import Blog from './Blog-Page/Blog.jsx';
import BlogAdminPage from './BlogAdminPage.jsx';
import './App.css';
// import NavBar from './components /navbar';
import Merch from './components /merch';
import { Routes, Route} from 'react-router-dom'
import Cart from './components /Cart/Cart';
import DataProvider from './components /Context/DataContext';






import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
<>
<NavBar/>
<Router>

<Route paths='./merch'>
  home
</Route>
<Route paths='./blog'>
  blog
</Route>



<DataProvider>
<Routes>
  <Route path='/' element={<Merch />}/>
  <Route path='/cart' element={<Cart />}/>
</Routes>
</DataProvider>


}

export default App;





