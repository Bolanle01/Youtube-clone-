import React, { useEffect, useState } from 'react'
import PlayVideo from '../PlayVideo/Video.jsx'
import { value_converter } from '../../data.js';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data.js';


const Recommended = ({categoryId}) => {

  const [apiData,setApiData] = useState([]);
  console.log("Category ID received:", categoryId);
  console.log("Recommended API Data:", apiData);

  
  useEffect (()=>{
    if (!categoryId) return;

     const fetchData = async () => {
     const relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=5&videoCategoryId=${categoryId}&key=${API_KEY}`;
    
    try {
      const res = await fetch(relatedVideo_url);
      const data = await res.json();
      setApiData(data.items || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
   };

   fetchData();
  },[categoryId]);

  return (

    <div>

      {apiData.map((item,index)=>{
        return(

          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='flex mb-8 justify-between cursor-pointer hover:bg-gray-200'>
            <img className='w-30 rounded-2xl mr-3' src={item.snippet.thumbnails.medium.url} alt="thumbnail1" />
            <div>
              <h4 className='text-black font-bold'>{item.snippet.title}</h4>
              <p className='text-gray-500 text-sm'>{item.snippet.channelTitle}</p>
              <p className='text-gray-500 text-sm'>{value_converter(item.statistics.viewCount)} views</p>
            </div>
          </Link>

        )
      })}

      

    </div>
    
  )
}

export default Recommended
