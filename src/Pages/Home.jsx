import { Box } from '@mui/material'
import React,{useState} from 'react'
import { useEffect } from 'react'
import {fetchData,exerciseOption} from '../utils/fetchData'
import Exercises from '../Components/Exercises'
import HeroBanner from '../Components/HeroBanner'
import Navbar from '../Components/Navbar'
import SearchExercises from '../Components/SearchExercises'

const Home = () => {
 
  
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  useEffect(()=>{
    const fetchedData = async()=>{
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOption);
       console.log(exerciseData)
      setExercises(exerciseData)
   
    }
    fetchedData() 
     },[])
  console.log(exercises)
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      setExercises={setExercises}
      />
      <Exercises
      bodyPart={bodyPart}
      exercises={exercises}
      setExercises={setExercises}
      />
    </Box>
  )
}

export default Home