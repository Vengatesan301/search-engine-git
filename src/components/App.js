import React from 'react';

import Searchbox from  './searchbox'
import axios from 'axios'
import Navbar from './Navbar'
import ImageList from './ImageList'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import  About from './about'

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar />
    <Routes>
      <Route exact path='/home' element={<Home />}/>
      <Route  exact path='/about' element={<About />}/>
      <Route  exact path='/contact' element={<Contact />}/>
      
    </Routes>
    </div>
    </BrowserRouter>
  )
}

    
  
  

export default App;

 

