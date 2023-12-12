import React from 'react'
import { useState } from 'react';

const YouTubeVideo = ({videoUrl}) => {

  const [ coverImg, setCoverImg ] = useState(true);

  const openVideo = () => {
    setCoverImg(false);
  };

  return (
    <>  
        {coverImg ? <div className='cover-img youtube-player' onClick={openVideo}></div> : 
        
          <iframe className='youtube-player' width="560" height="315" src={`${videoUrl}&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        }
    </>
  )
}

export default YouTubeVideo