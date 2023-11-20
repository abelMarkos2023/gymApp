import Stack from '@mui/material/Stack'
import React from 'react'

import BodyPartImage from '../assets/icons/body-part.png'
import TargrtImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Spinner from './Spinner'
const Detail = ({detail}) => {
    const {name,gifUrl,target,equipment,bodyPart} = detail
    const images = [
        {name:"bodyPart",image:BodyPartImage},
        {name:"target",image:TargrtImage},
        {name:"equipment",image:EquipmentImage}
    ]
    console.log({gifUrl})
  return gifUrl? (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:"20px",alignItems:"center"}}>
        <img src = {gifUrl} alt={name} loading='lazy' className="detail-image"/>
        <Stack sx={{gap:{lg:"35px",sm:"20px"}}}>
            <Typography variant='h2'>{name}</Typography>
            <Typography variant= 'h5'>Exercises Keep You Strong . {name} is One Of The Best Exercise To Target Your {target} It Will Help You Improve Your Mood And Gain Energy</Typography>
            {
                images.map(img=>(
                    <Stack direction='row' gap="24px" key={img.name}>
                        <Button style={{width:"50px",height:"50px"}}><img src = {img.image}/></Button>
                        <Typography variant='h6'>{img.name}</Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Stack>
  ):<Spinner/>
}

export default Detail