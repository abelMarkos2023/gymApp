import { Box } from '@mui/material'
import React,{ useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Detail from '../Components/Detail';
import ExerciseVideos  from '../Components/ExerciseVideos';
import SimlarExercise  from '../Components/SimlarExercise';
import {fetchData,exerciseOption,youtubeOptions} from '../utils/fetchData'

const ExerciseDetails = () => {
  const [exerciseDetail,setExerciseDetail] = useState({})
  const [exerciseVideos,setExerciseVideos] = useState([])
  const [targetMuscle,setTargetMuscle] = useState([])
  const [equipment,setEquipment] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    const fetchExerciseDetail = async() => {
      const exerciseDb = 'https://exercisedb.p.rapidapi.com/exercises/exercise';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const detail = await fetchData(`${exerciseDb}/${id}`,exerciseOption);
      setExerciseDetail(detail);

      const target = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${detail.target}`,exerciseOption);
      setTargetMuscle(target);

      const similarEquipment = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${detail.equipment}`,exerciseOption);
      setEquipment(similarEquipment);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=/${detail.name}`,youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents)
      console.log(exerciseVideosData.contents)
    }
    fetchExerciseDetail()
  },[id]);
  
  return (
    <Box>
      <Detail detail = {exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimlarExercise sameEquipment={exerciseDetail.equipment} bodyPart={exerciseDetail.target} target={targetMuscle} equipment={equipment}></SimlarExercise>
    </Box>
  )
}

export default ExerciseDetails