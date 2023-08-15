
const VideoPlayer = () =>{

      return (
        <div className="video">
          <video autoPlay muted loop>
            <source src="image/v.mp4" type="video/mp4" />
          </video>
          <img src="image/OnVideo.svg" alt="Product's"></img>

        </div>
      );
    };


export default VideoPlayer