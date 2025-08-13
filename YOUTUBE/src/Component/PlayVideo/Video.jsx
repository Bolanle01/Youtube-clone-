import React, { useEffect, useState } from 'react'
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import down from '../../assets/down.png';
import { VscAccount } from "react-icons/vsc";
import { value_converter } from '../../data.js';
import moment from 'moment'
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../data.js';


      const Video = () => {

        const {videoId} = useParams();

        const [apiData,setApiData] = useState(null);

        const [channelData,setChannelData] = useState(null);

        const [commentData,setCommentData] = useState([]);

        const fetchVideoData = async () => {
          // fetching Videos Data 
          const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
          await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
        }

       {/* // eslint-disable-next-line react-hooks/exhaustive-deps
        const fetchOtherData = async () =>{
          // Fetching Channel Data
          const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
          await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

          // Fetching Comment Data
          const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${API_KEY}`
          await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));

        }
       */}
        useEffect(()=>{
          fetchVideoData();

          if (apiData) {
             const fetchOtherData = async () => {
             const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
             const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

          const [channelRes, commentRes] = await Promise.all([
           fetch(channelData_url).then(res => res.json()),
           fetch(comment_url).then(res => res.json()),
        ]);
 
      setChannelData(channelRes.items[0]);
      setCommentData(commentRes.items);
    };

    fetchOtherData();
  }
}, [apiData, videoId]);

        
  return (


    <div className='h-70 w-[900px] p-5'>

      {/**{<video className='rounded-2xl' src={video1} controls autoPlay muted></video>} */}

      <iframe
       className='h-[35vw] w-full'
       src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen
       referrerPolicy="strict-origin-when-cross-origin"
      />



      <h2 className='font-bold'>
        {apiData ? apiData.snippet.title:"Title Here"}
      </h2>

      <div className='flex justify-between items-center mt-4 mb-10'>

          <div className='flex'>
            <img
             className='w-9 h-9 mr-3 cursor-pointer rounded-full' 
             src={channelData ? channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
              <h2 className='text-sm cursor-pointer text-black font-bold'>{apiData ? apiData.snippet.channelTitle:""}</h2>
              <p className='text-sm text-gray-500 cursor-pointer'>{channelData ? value_converter(channelData.statistics.subscriberCount):"1M"} Suscribrs</p>
            </div>
            <button className='bg-black hover:bg-gray-900 text-white text-md ml-5 w-20 rounded-3xl'>Subscribe</button>
         </div>
          
          <div className='flex h-9 rounded-2xl items-center w-50 bg-gray-100 font-bold hover:bg-gray-200 cursor-pointer'>
            <span className='flex items-center gap-2 px-3 text-sm text-black'>
              <img className='ml-3 h-6 cursor-pointer' src={like} alt="like" /> {apiData ? value_converter(apiData.statistics.likeCount):"155"}
            </span>
            <div className="w-[1px] h-[30px] bg-gray-400 mx-4" />
            <img className='h-6 flex items-center gap-2 px-3 cursor-pointer' src={dislike} alt="dislike" />
            {}        
          </div>

          <div className='flex items-center gap-2 px-3 hover:bg-gray-200 font-bold text-sm text-black cursor-pointer bg-gray-100 h-8 rounded-2xl'>
            <img className='h-6 cursor-pointer' src={share} alt="share" />
            Share
          </div>

          <div className='flex items-center relative gap-2 hover:bg-gray-200 font-bold px-3 text-sm text-black cursor-pointer bg-gray-100 h-8 rounded-2xl'>
            <img className='h-6 cursor-pointer' src={down} alt="down" />
            Download
          </div>

      </div>

      <div className='mb-10 bg-gray-100 p-5 rounded-2xl'>
        <h2 className='font-bold'>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </h2>
        <p>
          #recaps #movierecap
        </p>
        <p>
          {apiData ? apiData.snippet.description.slice(0,250):"Description Here"}
        </p>
      </div>

      <div className='flex gap-5 mb-10'>
        <h2 className='font-bold'>{apiData ? value_converter(apiData.statistics.commentCount):102} Comments</h2>
      </div>

      <div className='flex items-center gap-2 p-3 ml-17 -mt-10 mb-7 flex-col'>
        <div className='flex ml-17 gap-3'>
          <VscAccount className="w-6 h-6 cursor-pointer" />
          <input className='border-b-2 mr-40 border-black w-[800px] focus:outline-none focus:border-black' type="text" placeholder="Add a comment..." name="comment" id="comment" />

        </div>
        {commentData.map((item,index)=>{
          return (
            <div key={index.id} className='flex gap-3 mt-6 -ml-[450px]'>
              <div className='flex-col'>
                <img className='rounded-full h-[10] cursor-pointer' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="jack" />
              </div>
              <div className='flex-col'>
                <h3 className='font-bold cursor-pointer'>{item.snippet.topLevelComment.snippet.authorDisplayName}
                   <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </h3>
               <p className='w-[300px]'>
                  {item.snippet.topLevelComment.snippet.textDisplay}
               </p>
              </div>
              <div className='mt-10 ml-15'>
            
                <span className='flex gap-2'>
                  <img className='h-5 cursor-pointer' src={like} alt="like" />{value_converter(item.snippet.topLevelComment.snippet.likeCount)}
                </span>
                <img className='mt-5 h-5 cursor-pointer' src={dislike} alt="dislike" />
              </div>
           </div>
          )
        })}

        

        
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


