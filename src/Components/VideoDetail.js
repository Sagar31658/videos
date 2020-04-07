import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <p>Loading...</p>;
  }
  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <iframe
        title={video.snippet.title}
        height="250px"
        width="350px"
        src={videosrc}
      ></iframe>
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
