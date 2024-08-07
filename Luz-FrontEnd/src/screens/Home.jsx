import React from "react";
import Carousel from "../components/Carousel"; // Adjust the import path if necessary
import AboutUs from "../components/AboutUs"; // Adjust the import path if necessary
import LatestVideos from "../components/LastestVideos";

const Home = () => {
  const videos = [
    {
      id: 1,
      url: "path/to/video1.mp4",
      title: "Video 1",
      description: "This is the first video",
      date: "2023-01-01",
    },
    {
      id: 2,
      url: "path/to/video2.mp4",
      title: "Video 2",
      description: "This is the second video",
      date: "2023-02-01",
    },
    {
      id: 3,
      url: "path/to/video3.mp4",
      title: "Video 3",
      description: "This is the third video",
      date: "2023-03-01",
    },
    {
      id: 4,
      url: "path/to/video4.mp4",
      title: "Video 4",
      description: "This is the fourth video",
      date: "2023-04-01",
    },
  ];
  return (
    <div>
      <Carousel />
      <AboutUs />
      <LatestVideos videos={videos} />
    </div>
  );
};

export default Home;
