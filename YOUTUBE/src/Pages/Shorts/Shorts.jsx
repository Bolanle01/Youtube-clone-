import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../data'; // Ensure API_KEY is correctly exported from this file

const Shorts = () => {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    const fetchShorts = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=shorts&type=video&videoDuration=short&key=${API_KEY}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setShorts(data.items || []);
      } catch (error) {
        console.error("Failed to fetch Shorts:", error);
      }
    };

    fetchShorts();
  }, []);

  return (
    <div className="grid gap-4 p-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      {shorts.map((item) => (
        <div key={item.id.videoId} className="bg-white p-2 rounded-lg shadow">
          <img
            src={item.snippet.thumbnails.medium.url}
            alt="short thumbnail"
            className="rounded-xl w-full"
          />
          <h4 className="mt-2 font-semibold text-sm">{item.snippet.title}</h4>
          <p className="text-xs text-gray-500">{item.snippet.channelTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
