import React from "react";
import ReactPlayer from "react-player";
import { MDBIcon } from "mdb-react-ui-kit";

const Video = () => {
  //   const [isPlaying, setIsPlaying] = useState(false);

  //   const handlePlay = () => {
  //     setIsPlaying(true);
  //   };
  //   const handlePause = () => {
  //     setIsPlaying(false);
  //   };

  return (
    <div
      style={{
        "max-width": "600px",
        "min-width": "100px",
        position: "relative",
        margin: "5rem auto",
      }}
    >
      <ReactPlayer
        url={"https://vimeo.com/103136931"}
        width="100%"
        height="500px"
        playing
        playIcon={<button>Play</button>}
        light={<MDBIcon fas icon="play" />}
        dark={<MDBIcon fas icon="stop" />}
      />
    </div>
  );
};

export default Video;
