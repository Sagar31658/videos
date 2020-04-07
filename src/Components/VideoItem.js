import React from "react";

const VideoItem = (props) => {
  return (
    <div
      onClick={() => props.getSelectedVideo(props.video)}
      style={{ cursor: "pointer" }}
    >
      <img
        style={{ height: "100px", width: "200px" }}
        src={props.video.snippet.thumbnails.medium.url}
        alt="it's coming!"
      />
      <p
        style={{
          display: "inline",
          verticalAlign: "center",
          textDecoration: "bold",
          fontFamily: "monospace",
        }}
      >
        {props.video.snippet.title}
      </p>
    </div>
  );
};

export default VideoItem;
