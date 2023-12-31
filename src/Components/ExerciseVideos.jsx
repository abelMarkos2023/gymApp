import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Spinner from './Spinner'
const ExerciseVideos = ({exerciseVideos,name}) => {
   return exerciseVideos.length?(
    <Box sx={{mt:{lg:"100px",sm:"30px"},p:"20px"}}>
      <Typography variant="h3" mb="33px"> watch <span style={{color:"#ff2526"}}>{name}</span> Exercise Videos</Typography>
      <Stack justifyContent="flex-start" alignItems="center" flexWrap="wrap" sx={{flexDirection:{lg:"row"},gap:{lg:"110px",sm:"0"}}}>
        {exerciseVideos?.slice(0,6).map((item,index) => (
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="no-referrer">
            <img src={item.video.thumbnails[0].url} alt="" />
           <Box>
           <Typography variant='h4' color="#000">{item.video.title}</Typography>
            <Typography variant='h6' color="#000">{item.video.channelName}</Typography>
           </Box>
          </a>
        ))}
      </Stack>
    </Box>
  ):<Spinner/>
}

export default ExerciseVideos