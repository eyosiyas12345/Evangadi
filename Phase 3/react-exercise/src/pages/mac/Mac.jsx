import React, { useState, useEffect } from 'react';

const Mac = () => {
   const [videos,setVideos] = useState([]);
   const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
   const channelId = import.meta.env.VITE_APPLE_YOUTUBE_CHANNEL_ID;

  //  useEffect(()=>{
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=4&type=video&key=${apiKey}`)
  //   .then((response)=>{console.log(response); return response.json()})
  //   .then((data)=>{ if(data.items){setVideos(data.items)}})
  //   .catch((error)=> console.log(error))
  // }, []);
    useEffect(()=>{
      const getData = async ()=>{
         try{ 
          const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=4&type=video&key=${apiKey}`);
          const data = await response.json();
            if(data.items){
              setVideos(data.items);
            }}
            catch(error){
              console.log("Fetch Failed: "+error);
            }
        }
            getData();
      }
    ,[])
    if (videos.length === 0) return <p>Loading videos...</p>;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      {
        videos.map((video)=>(
          <div key={video.id.videoId}>
            <br/>
            <br/>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            />
            <p>{video.snippet.title}</p>
          </div>
        ))}
    </div>
  );
};

export default Mac;

