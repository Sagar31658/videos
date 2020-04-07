import React from "react";

import axios from "axios";

import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  getSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo: selectedVideo });
  };

  getSearch = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          key: "AIzaSyDBXNLu2tu9qooysyWTRT9oIJOgEqrITUg",
          q: term,
          maxResults: 5,
        },
      }
    );
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>
        <Searchbar className="searchbar" getSearch={this.getSearch} />
        <VideoDetail className="video" video={this.state.selectedVideo} />
        <VideoList
          className="list"
          videos={this.state.videos}
          getSelectedVideo={this.getSelectedVideo}
        />
      </div>
    );
  }
}

export default App;
