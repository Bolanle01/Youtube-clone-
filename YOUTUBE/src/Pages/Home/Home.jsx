import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar.jsx'
import Feed from '../../Component/Feed/Feed.jsx'
import Video from '../../Component/PlayVideo/Video.jsx'

const Home = ({sidebar}) => {

  {/*const videos = new Array(12).fill({
    title: 'Sample Video Title',
    channel: 'Channel Name',
    views: '100K views',
    time: '2 days ago',
  });*/}

  return (

    <div className='flex'>
      <Sidebar sidebar={sidebar} />

      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed />
      </div>

      {/*
       <div className="-mt-[460px] ml-75 px-4 ">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {videos.map((video, index) => (
          <Video key={index} {...video} />
        ))}
      </div>
      </div>
      */}

    </div>
    
  )
};

export default Home
