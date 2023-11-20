import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import {VisibilityContext,ScrollMenu} from 'react-horizontal-scrolling-menu'


const HorizantolScrollbar = ({data,bodyPart,setBodyPart,isTarget}) => {

  const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext)

    return (
      <Typography className="right-arrow" onClick = {()=> scrollPrev()}>
        <img src={LeftArrowIcon} alt="" />
      </Typography>
    )
  }

  const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext)

    return (
      <Typography className="left-arrow" onClick = {()=> scrollNext()}>
        <img src={RightArrowIcon} alt="" />
      </Typography>
    )
  }
  
  return (

    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
     
      {
        data.map(item=>(<Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
        >
          {isTarget ? <ExerciseCard exercise={item}/> : <BodyPart bodyParts={bodyPart} setBodyPart={setBodyPart} item={item}></BodyPart>}
        </Box>))
      }
    
    </ScrollMenu>
  )
}

export default HorizantolScrollbar