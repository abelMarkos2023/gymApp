import { Stack,Typography } from '@mui/material'
import React from 'react'

import Icon from '../assets/icons/gym.png'
const BodyPart = ({item,bodyPart,setBodyPart}) => {
  
  return (
    <Stack
    onClick={() => {
      setBodyPart(item);
      scrollTo({top:"1800",left:"100",behavior:"smooth"})
    }}

    type="button"
    alignItems="center"
    justifyContent="center"
    sx={{
      borderTop:item === bodyPart?"4px solid #ff2625":"",
      width:"270px",
      height:"280px",
      backgroundColor:"#fff",
      borderBottomLeftRadius:"20px",
      cursor:"pointer",
      gap:"40px"
    }}
    className='bodyPart-card'
    >
        <img src={Icon} alt="dummble" style={{
            width:"30px"
        }} />
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart