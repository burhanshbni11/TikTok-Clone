import React, { useEffect, useState } from 'react';
import Video from './Video';
import db from './firebase';
import './App.css';



function App() {

  const [videos, setVideos] = useState([])

useEffect(() =>{
   db.collection('videos').onSnapshot(onSnapshot => (
    setVideos(onSnapshot.docs.map(doc => doc.data()))
   ))
}, [videos])

  return (
    <div className="app">
     <div className="app__videos">

    {videos.map(
      ({url, description, channel, song, likes, messages, shares, }) => (
      <Video 
      url={url}
      description={description}
      channel={channel}
      song={song}
      likes={likes}
      messages={messages}
      shares={shares}
      />
    )
    )}

     </div>
    </div>
  );
}

export default App;
