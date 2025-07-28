import React from 'react'
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import down from '../../assets/down.png';
import { VscAccount } from "react-icons/vsc";
import Sidebar from '../../Component/Sidebar/Sidebar.jsx';
import Pageheader from '../Pageheader/Pageheader.jsx';

      const Video = () => {
  return (


    <div className='h-70 w-[1000px] p-5'>

      <video className='rounded-2xl' src={video1} controls autoPlay muted></video>

      <div className='flex justify-between items-center mt-4 mb-10'>

          <div className='flex'>
            <VscAccount className='w-6 h-6 mr-3 cursor-pointer' />
            <div>
              <a href="#" className='text-sm text-black font-bold'><h2>User Name</h2></a>
              <p className='text-sm text-gray-500 cursor-pointer'>48.2K subscribers</p>
            </div>
            <button className='bg-black hover:bg-gray-900 text-white text-md ml-5 w-20 rounded-3xl'>Subscribe</button>
         </div>
          
          <div className='flex h-9 rounded-2xl items-center w-50 bg-gray-100 font-bold hover:bg-gray-200 cursor-pointer'>
            <span className='flex items-center gap-2 px-3 text-sm text-black'>
              <img className='ml-3 h-6' src={like} alt="like" /> 1.6k 
            </span>
            <div className="w-[1px] h-[30px] bg-gray-400 mx-4" />
            <img className='h-6 flex items-center gap-2 px-3' src={dislike} alt="dislike" />
          </div>

          <div className='flex items-center gap-2 px-3 hover:bg-gray-200 font-bold text-sm text-black cursor-pointer bg-gray-100 h-8 rounded-2xl'>
            <img className='h-6' src={share} alt="share" />
            Share
          </div>

          <div className='flex items-center relative gap-2 hover:bg-gray-200 font-bold px-3 text-sm text-black cursor-pointer bg-gray-100 h-8 rounded-2xl'>
            <img className='h-6' src={down} alt="down" />
            Download
          </div>

      </div>

      <div className='mb-10 bg-gray-100 p-5 rounded-2xl'>
        <h2 className='font-bold'>
          171K views  1 month ago #recaps #movierecap
        </h2>
        <p>
          #recaps #movierecap
        </p>
        <p>
          The girl with superpowers who can control the flow of blood directly confronts the world of corruption and power
        </p>
      </div>

      <div className='flex gap-5 mb-10'>
        <h2 className='font-bold'>44 Comments</h2>
      </div>

      <div className='flex items-center gap-2 p-3 -ml-5 -mt-10 mb-7'>
        <VscAccount className="w-6 h-6 cursor-pointer" />
        <input className='border-b-2 border-black w-[1000px] focus:outline-none focus:border-black' type="text" placeholder="Add a comment..." name="comment" id="comment" />
      </div>

    </div>

    
  );
};

export default Video;

{/*
    <div className="w-full sm:w-[300px]">
      <div className="bg-gray-300 h-44 w-full rounded-lg"></div>
      <div className="mt-2">
        <h3 className="font-semibold text-sm text-black dark:text-white">{title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-300">{channel}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{views} • {time}</p>
      </div>
    </div> 
    */}


