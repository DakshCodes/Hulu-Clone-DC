import React, { useState } from 'react'
import VideoCard from './VideoCard';
import axiox from '../Components/axios';
import { useEffect } from 'react';
import requests from './requests';


const Movies = ({selectedOption}) => {
  const [Movies ,setMovies] = useState([]);
 
  useEffect(() => {
    async function fetchData(){
      const request = await axiox.get(requests.fetchActionMovies)
      setMovies(request.data.results);

    }

    fetchData();
  }, [selectedOption])

  return (
    <div className='movies'>
     {
      Movies.map((movie) =>(
        <VideoCard key={movie.id} movie={movie} />
      ))
    }
    </div>
  )
}

export default Movies
