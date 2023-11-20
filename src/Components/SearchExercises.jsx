import { Stack, Typography,Box, TextField, Button } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { fetchData,exerciseOption  } from '../utils/fetchData';
import HorizantolScrollbar from './HorizantolScrollbar';

const SearchExercises = ({bodyPart,setBodyPart,setExercises}) => {

    const [search, setSearch] = useState('');
    
    const [bodyParts, setBodyParts] = useState([]);


        useEffect(() => {
            const fetchBodyPart = async() =>{
                const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOption)

                setBodyParts(['all',...response])
            }
            fetchBodyPart()
            console.log(bodyParts)
        }, []);
    const handleChange = async() => {
        if(search){
            const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOption)
            console.log(data)
            const searchedExercises = data.filter(exercise => exercise.name.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)||exercise.target.toLowerCase().includes(search)||exercise.equipment.toLowerCase().includes(search))
            setExercises(searchedExercises)
        }
    }
  return (
    <Stack justifyContent="center" alignItems="center" mt="40px" p="20px">
        <Typography fontWeight="700" sx={{
            fontSize:{lg:"44px",sm:"30"},mb:"50px",textAlign:"center"
        }}>Awesome Exercises <br/> You Should Know</Typography>

        <Box position='relative' mb="72px">
            <TextField
                sx={{
                    input:{
                    fontWeight:"700",
                    border:"none",
                    borderRadius:"4px",
                    },
                    width:{lg:"800px",sm:"360px"},
                    backgroundColor:"#fff",
                    borderRadius:"40px"

                }}
                value={search}
                placeholder='Search Exercise'
                onChange={e=>{setSearch(e.target.value.toLowerCase())}}
                height="72px"
                type="text"
            />
            <Button
            onClick = {handleChange}
            className="search-btn" sx={{
                bgcolor:"#FF2625",
                color:"#FFF",
                textTransform:"none",
                width:{lg:"175px",sm:"80px"},
                height:"56px",
                fontSize:{lg:'22px',sm:"16px"},
                position:"absolute",
                right:0
            }}>Search</Button>
        </Box>
        <Box sx={{
            width:"100%",
            p:"20",
            position:"relative"
        }}>
            <HorizantolScrollbar data = {bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}></HorizantolScrollbar>
        </Box>
    </Stack>
  )
}

export default SearchExercises