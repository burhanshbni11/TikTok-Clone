import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Marquee from 'react-fast-marquee';



function VideoFooter({ channel, description, song}) {
  return (
    <div className='videoFooter'>
        <div className="videoFooter__text">
    <h3>@{channel}</h3>
    <p>{description}</p>
    <div className="vidoFooter__ticker">
    <MusicNoteIcon className='videoFooter__icon'/>
    {/* <Ticker mode="smooth">
        {({ index }) => (
            <>
                <p>YOOOOOO whats up guys</p>
            </>
        )}
    </Ticker> */}
    <Marquee className='tickerr' gradientColor speed={70} >
        <p> {song} </p>
    </Marquee>
    </div>
   </div>
    <img className='videoFooter__record' src="https://pngimg.com/uploads/compact_disc/compact_disc_PNG8745.png" alt="" />
    </div>
  )
}

export default VideoFooter;