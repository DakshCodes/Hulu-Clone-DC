import React from 'react'

const base_url = "https://image.tmdb.org/t/p/original/";
const VideoCard = ({movie}) => {
  return (
    <div className='videocard'>
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
       <p>hello</p>
       <h2>{movie.title || movie.original_name}</h2>
       <p>{movie.media_type &&`${movie.media_type} *`}</p> 
    </div>
  )
}

export default VideoCard
