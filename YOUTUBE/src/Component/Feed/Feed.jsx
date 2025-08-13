import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { value_converter } from '../../data';
import { API_KEY } from '../../data';
import moment from 'moment';


const Feed = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            //const videoList_url =`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&regionCode=US&maxResults=50&videoCategoryId=${category}&key=${API_KEY}`
            const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=100&key=${API_KEY}`

                
             try {
                  const response = await fetch(videoList_url);
                  const json = await response.json();
                  setData(json.items || []);
                  } catch (error) {
                   console.error('Failed to fetch videos:', error);
                }
        };
        fetchData();
    }, []);

     return (
    <div
      className="grid gap-x-4 gap-y-[30px] mt-[10px] ml-70"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
    >
      {data.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        data.map((item, index) => (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="card autoplay"
          >
            <img
              className="cursor-pointer rounded-2xl"
              src={item.snippet.thumbnails.medium.url}
              alt="thumbnail1"
            />
            <h2 className="cursor-pointer mt-3">{item.snippet.title}</h2>
            <h3 className="cursor-pointer hover:text-black text-gray-500">
              {item.snippet.channelTitle}
            </h3>
            <p className="cursor-pointer text-gray-500 text-sm">
              {value_converter(item.statistics.viewCount)} views &bull;{' '}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        ))
      )}
    </div>
  );
};

export default Feed;
