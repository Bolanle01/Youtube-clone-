import React, { useState } from 'react';
import { API_KEY } from '../../data';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video,channel,playlist&maxResults=10&key=${API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.items || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="p-2 w-[500px] flex-1 rounded"
          placeholder="Search for videos, channels, or playlists"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="bg-gray-200 text-white px-4 py-2 rounded" onClick={handleSearch}>
          <BsSearch />
        </button>
      </div>

      <div className="grid gap-4">
        {results.map((item) => (
          <div key={item.id.videoId || item.id.channelId || item.id.playlistId} className="border p-2 rounded">
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" className="w-full rounded" />
            <h3 className="font-bold mt-2">{item.snippet.title}</h3>
            <p className="text-sm text-gray-600">{item.snippet.channelTitle}</p>
            <p className="text-xs text-gray-400">{item.id.kind.replace('youtube#', '')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
