import React from 'react'
import Subscription from '../../assets/subsription.png';
import home from '../../assets/home2.png';
import courses from '../../assets/courses.png';
import download from '../../assets/download.png';
import gaming from '../../assets/gaming.png';
import help from '../../assets/help.png';
import history from '../../assets/history.png';
import liked from '../../assets/liked-video.png';
import music from '../../assets/music.png';
import news from '../../assets/news.png';
import playlist from '../../assets/playlist.png';
import report_history from '../../assets/report-history.png';
import send_feedback from '../../assets/send-feedback.png';
import setting from '../../assets/setting.png';
import sports from '../../assets/sports.png';
import watch_later from '../../assets/watch-later.png';
import youtube_premium from '../../assets/youtube-premium.png';
import ytkids from '../../assets/ytkids.png';
import ytmusic from '../../assets/ytmusic.png';
import shorts from '../../assets/shorts.png'
import cameron from '../../assets/cameron.png';
import gerard from '../../assets/gerard.png';
import jack from '../../assets/jack.png';
import megan from '../../assets/megan.png';
import simon from '../../assets/simon.png';
import { Link } from 'react-router-dom';

const Side = ({ category, setCategory }) => {

  return (

    <div className='text-md fixed left-0 top-14 h-[calc(100vh-56px)] overflow-y-auto ml-7 w-60 bg-white hidden md:block'>

      <div className='mb-4'>
        <span onClick={() => setCategory(0)} className={`side_link flex cursor-pointer hover:bg-gray-200 h-10 rounded-2xl items-center gap-5 mb-4 mt-3 ${category === 0 ? "active" : ""}`}>
          <img src={home} alt="home" /> 
          <span className='mt-3'>Home</span>
        </span>
        <Link onClick={() => setCategory(18)} className={`flex hover:bg-gray-200 h-10 rounded-2xl items-center cursor-pointer gap-5 mb-4 mt-3 ${category === 1 ? "active" : ""}`}>
          <img src={shorts} alt="shorts" /> 
          <span className=''>Shorts</span>
        </Link>
        <span className='flex cursor-pointer hover:bg-gray-200 h-10 rounded-2xl items-center gap-5 mb-4 mt-3'>
          <img src={Subscription} alt="" /> Subsriptions
        </span>
      </div><hr className='text-gray-200' />

      <div className='mb-4 mt-3'>
        <a  className='font-bold text-lg hover:bg-gray-200 h-10 rounded-2xl items-center px-2' href="">YOU</a>
        <span className='flex mb-4 mt-3 mr-9 hover:bg-gray-200 h-10 rounded-2xl items-center px-2 cursor-pointer gap-5'>
          <img src={history} alt="history" />
          History
        </span>
        <span className='flex hover:bg-gray-200 h-10 rounded-2xl items-center px-2 mb-4 mt-3 cursor-pointer gap-5'>
          <img src={playlist} alt="history" /> 
          <span className='mt-2'>
            Playlist
          </span>
        </span>
        <span onClick={() => setCategory(27)} className='flex mb-4 mt-3 cursor-pointer hover:bg-gray-200 h-10 rounded-2xl items-center px-2 gap-5'><img src={courses} alt="history" />
          Your courses
        </span>
        <span className='flex mb-4 mt-3 hover:bg-gray-200 h-10 rounded-2xl items-center px-2 cursor-pointer gap-5'><img src={watch_later} alt="history" />
          Watch Later 
        </span>
        <span className='flex mb-4 mt-3 hover:bg-gray-200 h-10 rounded-2xl items-center px-2 cursor-pointer gap-5'><img src={liked} alt="history" />
          Liked video 
        </span>
        <span className='flex mb-4 mt-3 hover:bg-gray-200 h-10 rounded-2xl items-center px-2 cursor-pointer gap-5'><img src={download} alt="history" />
          Downloads
        </span>
      </div><hr className='text-gray-200' />

      <div className='mb-4 mt-3'>
        <h2 onClick={() => setCategory(17)} className='font-bold text-lg mb-5'>Subscriptions</h2>
        <span className='flex mb-4 cursor-pointer gap-6 hover:bg-gray-200 h-10 rounded-2xl items-center px-2'>
          <img className='w-8 h-8 rounded-full' src={cameron} alt="cameron" /> Cameron
        </span>
        <span className='flex mb-4 cursor-pointer gap-6 hover:bg-gray-200 h-10 rounded-2xl items-center px-2'>
          <img className='w-8 h-8 rounded-full' src={gerard} alt="gerard" /> Gerard
        </span>
        <span className='flex mb-4 cursor-pointer gap-6 hover:bg-gray-200 h-10 rounded-2xl items-center px-2'>
          <img className='w-8 h-8 rounded-full' src={jack} alt="jack" /> Jack
        </span>
        <span className='flex mb-4 cursor-pointer gap-6 hover:bg-gray-200 h-10 rounded-2xl items-center px-2'>
          <img className='w-8 h-8 rounded-full' src={megan} alt="megan" /> Megan
        </span>
        <span className='flex mb-4 cursor-pointer gap-6 hover:bg-gray-200 h-10 rounded-2xl items-center px-2'>
          <img className='w-8 h-8 rounded-full' src={simon} alt="simon" /> Simon
        </span>
      </div><hr className='text-gray-200' />

      <div className='text-sm mb-4'>
        <h2 className='font-bold text-lg mb-4 mt-3'>Explore</h2>
        <span onClick={() => setCategory(10)} className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={music} alt="music" />
         Music
        </span>
        <span onClick={() => setCategory(20)} className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={gaming} alt="gaming" />
         Gaming
        </span>
        <span onClick={() => setCategory(25)} className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={news} alt="news" />
         News
        </span>
        <span onClick={() => setCategory(17)} className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={sports} alt="sports" />
         Sport
        </span>
      </div><hr className='text-gray-200' />

      <div className='mb-4'>
        <h2 className='font-bold text-lg'>More from YouTube</h2>
        <span className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={youtube_premium} alt="youtube-premium" /> Youtube Premium</span>
        <span className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={ytmusic} alt="ytmusic" /> YouTube Music</span>
        <span className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={ytkids} alt="ytkids" /> YouTube Kids</span>
      </div><hr className='text-gray-200' />

      <div className='mb-4'>
        <span className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={setting} alt="setting" /> Settings</span>
        <span className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={report_history} alt="report-history" /> Report History</span>
        <span className='flex mb-4 mt-3 cursor-pointer gap-5'><img src={help} alt="help" /> 
          <span className='mt-2'>Help</span>
        </span>
        <span className='flex mb-4 cursor-pointer mt-3 gap-5'><img src={send_feedback} alt="send-feedback" /> Send Feedback</span>
      </div><hr className='text-gray-200' />

    </div>
    
  );
};

export default Side
