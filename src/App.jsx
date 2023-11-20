import { Box } from '@mui/material';
import React from 'react';

import {Route,Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ExerciseDetails from './Pages/ExerciseDetails';
import Home from './Pages/Home';
const App = () => {
  console.log("hello")
  return (
  <BrowserRouter>
    <Box width='400px' sx={{width:{xl:"1488px"}}} m='auto'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
    </Routes>
    <Footer/>
    </Box>
  </BrowserRouter>
  )
};

export default App;