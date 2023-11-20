import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
  <Link to={`exercise/${exercise.id}`} className="exercise-card">
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
        <Button sx={{
            color:"#fff",backgroundColor:"#ffa9a9",fontSize:"14px",
            textTransform:"capitalize",ml:"20px",borderRadius:"20px"
        }}>
            {exercise.bodyPart}
        </Button>
        <Button sx={{
            color:"#000",backgroundColor:"#fcc757",fontSize:"14px",
            textTransform:"capitalize",ml:"20px",borderRadius:"20px"
        }}>
            {exercise.target}
        </Button>
    </Stack>
    <Typography ml="21px" mt="10px" pb="10px" textTransform="capitalize" color="#000" fontWeight="bold">
        {exercise.name }
    </Typography>
  </Link>
  )
}

export default ExerciseCard