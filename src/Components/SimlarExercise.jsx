import React from 'react'
import {Box,Typography,Stack} from '@mui/material'
import Spinner from './Spinner'
import HorizantolScrollbar from './HorizantolScrollbar'
const SimlarExercise = ({target,equipment,bodyPart,sameEquipment}) => {
  return (
   <Box sx={{mt:{lg:"100px",sm:"10px"}}}>
    <Typography variant='h3'  m={4} textTransform='capitalize'>
      exercises that target the same muscle group {` "${bodyPart}"`}
    </Typography>
    <Stack position='relative' direction='row' p='2'>
      {target.length > 0 ? <HorizantolScrollbar data={target} isTarget/>:<Spinner/>}
    </Stack>

    <Typography variant='h3' m={4} textTransform='capitalize'>
      exercises that target the same equiment  {` "${sameEquipment}"`}
    </Typography>
    <Stack position='relative' direction='row' p='2'>
      {target.length > 0 ? <HorizantolScrollbar data={equipment} isTarget/>:<Spinner/>}
    </Stack>
    
   </Box>
  )
}

export default SimlarExercise