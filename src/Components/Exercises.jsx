import { Box, Pagination, Stack, Typography } from '@mui/material'
import React,{useState} from 'react'
import { useEffect } from 'react';
import { exerciseOption, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,bodyPart,
  setExercises}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage ;
  const currentExercises = exercises?.slice(indexOfFirstExercise,indexOfLastExercise) ;
    console.log({exercises})

  useEffect(()=>{
    const fetchExerciseData = async() => {
      let exerciseData = [];
      if(bodyPart === 'all' || ''){
       exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOption);
      }else{
        console.log(bodyPart)
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOption);
      }
      setExercises(exerciseData)
    }
    fetchExerciseData()
  },[bodyPart])
   const paginate = (e,value) => {
    setCurrentPage(value);
    window.scrollTo({top:"1500",behavior:"smooth"});
   }
  return (
    <Box id ='exercises' 
      sx={{mt:{lg:"110px"}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb="44px">Shoing Result</Typography>
      <Stack sx={{gap:{lg:"110px",sm:"50px"}}} direction="row" flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems="center">
        {exercises.length > 9 && (
          <Pagination  
            color="standard"
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises