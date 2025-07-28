import React from 'react'
import { useState } from 'react';


const categories = [
    'All',
    'Chinese television dramas',
    'Music',
    'Nollywood',
    'Martial Arts Movies',
    'JavaScript',
    'Live',
    'Mixes',
    'Daughters',
    'Romantic comedies',
    'Skills',
    'Computer files',
    'Thrillers'
];

const Pageheader = () => {
  const [active, setActive] = useState('All');

  return (
    <div className="mb-20 ml-70 px-4 py-2  sticky top-16 z-50  grid grid-cols-[repeat(autofill, minmax(300px,1fr))] position-relative items-center overflow-x-auto whitespace-nowrap dark:bg-zinc-900">
      <div className="flex gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-4 py-1 rounded-lg text-sm ${
              active === category
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black dark:bg-zinc-700 dark:text-white hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Pageheader;

/*export default CategoryBar;*/


/*const Pageheader = () => {

  return (

    <div className='overflow-x-hidden relative'>
        <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-content] ml-60'>
            <button className='border border-gray-300 hover:bg-black py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer text-white bg-black text-sm font-semibold'>
                All
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
              Chinese television dramas 
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
              Music
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
              Nollywood
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
              Martial Arts Movies
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
              JavaScript
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
              Live
            </button>
            <button className='border border-gray-300 bg-gray-100 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer text-sm font-semibold'>
                Mixes
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
                Daughters
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
                Romantic comedies
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
                Skills
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
                Computer files
            </button>
            <button className='border border-gray-300 hover:bg-gray-200 py-1 px-3 rounded-lg whitespace-nowrap cursor-pointer bg-gray-100 text-sm font-semibold'>
                Thrillers
            </button>
        </div>
      
    </div>

  )
}
*/ 
