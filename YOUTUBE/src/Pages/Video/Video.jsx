import React from "react";
import PlayVideo from "../../Component/PlayVideo/Video.jsx";
import Recommended from "../../Component/RecommendedVideo/Recommended.jsx";
import { useParams } from "react-router-dom";

const Video = () => {

  const {videoId,categoryId} = useParams();
  console.log("Video Page Loaded", { videoId, categoryId });

  return (

    <div className="flex">

      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />

    </div>

  );
};

export default Video;


