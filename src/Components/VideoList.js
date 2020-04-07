import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const list = props.videos.map((video) => {
    return (
      <VideoItem
        getSelectedVideo={props.getSelectedVideo}
        video={video}
        style={{ cursor: "pointer" }}
      />
    );
  });
  return <div>{list}</div>;
};

export default VideoList;
