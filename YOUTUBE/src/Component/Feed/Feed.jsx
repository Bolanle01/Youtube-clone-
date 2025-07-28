import React from 'react'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';


const Feed = () => {

    return (
        <div
          className="grid gap-x-4 gap-y-[30px] mt-[10px] ml-25"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >

          <Link to={`/video/1/4521`} className='card autplay'>
            <img className='cursor-pointer rounded-2xl' src={thumbnail1} alt="thumbnail1" />
            <h2 className='cursor-pointer mt-3'>Title 1</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className='card autoplay'>
            <img className='cursor-pointer rounded-2xl' src={thumbnail2} alt="thumbnail2" />
            <h2 className='cursor-pointer mt-3'>Title 2</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className='card rounded-2xl'>
            <img className='cursor-pointer rounded-2xl' src={thumbnail3} alt="thumbnail3" />
            <h2 className='cursor-pointer mt-3'>Title 3</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail4} alt="thumbnail4" />
            <h2 className='cursor-pointer mt-3'>Title 4</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail5} alt="thumbnail5" />
            <h2 className='cursor-pointer mt-3'>Title 5</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <div className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail6} alt="thumbnail6" />
            <h2 className='cursor-pointer mt-3'>Title 6</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </div>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail7} alt="thumbnail7" />
            <h2 className='cursor-pointer mt-3'>Title 7</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail8} alt="thumbnail8" />
            <h2 className='cursor-pointer mt-3'>Title 8</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-full">
            <img className='cursor-pointer rounded-2xl' src={thumbnail1} alt="thumbnail1" />
            <h2 className='cursor-pointer mt-3'>Title 1</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail2} alt="thumbnail2" />
            <h2 className='cursor-pointer mt-3'>Title 2</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail3} alt="thumbnail3" />
            <h2 className='cursor-pointer mt-3'>Title 3</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail4} alt="thumbnail4" />
            <h2 className='cursor-pointer mt-3'>Title 4</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail5} alt="thumbnail5" />
            <h2 className='cursor-pointer mt-3'>Title 5</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail6} alt="thumbnail6" />
            <h2 className='cursor-pointer mt-3'>Title 6</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail7} alt="thumbnail7" />
            <h2 className='cursor-pointer mt-3'>Title 7</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        <Link to={`/video/1/4521`} className="card rounded-2xl">
            <img className='cursor-pointer rounded-2xl' src={thumbnail8} alt="thumbnail8" />
            <h2 className='cursor-pointer mt-3'>Title 8</h2>
            <h3 className='cursor-pointer hover:text-black text-gray-500'>BolanleTech</h3>
            <p className='cursor-pointer text-gray-500 text-sm'>15k views &bull; 2 days ago</p>
        </Link>

        </div>
    )
}


export default Feed;
