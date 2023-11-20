import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor='#fff3f4'>
      <Stack alignItems='center' gap='40px' px='40px' pt='24px'>
        <img src = {Logo} width = '200px' height='40px' />
        <Typography pb='20px' mt='20px' variant='h4'>Made With Love By Abel Markos</Typography>
      </Stack>
    </Box>
  )
}

export default Footer