import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box position='relative' p="20px" sx={{mt:{lg:"60px",sm:"40px"},ml:{sm:"50px"}}}>
        <Typography color="#FF2526" fontWeight="600" fontSize="26px">
        Fitness Club
        </Typography>
        <Typography fontWeight="700" sx={{fontSize:{lg:"44px",sm:"40px"}}}>Sweat,Smile <br/> And Repeat</Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={2}>Check Out The Most Effective Exercises</Typography>
        <Button padding="10px" href="#exercises" variant="contained" style={{backgroundColor:"#FF1212"}}>Explore Exercises</Button>
        <Typography fontWeight="700"color="#FF2625" sx={{
            display:{lg:"block",sm:"none"},opacity:0.1
        }} fontSize="200px">EXERCISES</Typography>
        <img className='hero-banner-img' src={HeroBannerImage} alt="banner" />
    </Box>
  )
}

export default HeroBanner