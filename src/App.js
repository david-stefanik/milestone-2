import React from 'react';
//  import Blog from '.Blog/pages/Blog';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './pages/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




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




</Router>
  
</>
  );
}

export default App;
/* <HomePage/> */