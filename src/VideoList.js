import VideoData from "./videodata.json";

function VideoList() {
  return (
    <div style={{ padding: "0 3rem", textAlign: "left" }} className="videolist">
      <a
        href={VideoData[0].link}
        className="card"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${VideoData[0].thumb})`,
          color: "white"
        }}
      >
        <h1>{VideoData[0].title}</h1>
        <p>{VideoData[0].desc}</p>
      </a>

      <a
        href={VideoData[1].link}
        className="card"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)) ,url(${VideoData[1].thumb})`
        }}
      >
        <h1>{VideoData[1].title}</h1>
        <p>{VideoData[1].desc}</p>
      </a>

      <a
        href={VideoData[2].link}
        target="_blank"
        rel="noreferrer"
        className="card"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${VideoData[2].thumb})`
        }}
      >
        <h1>{VideoData[2].title}</h1>
        <p>{VideoData[2].desc}</p>
      </a>

      <a
        href={VideoData[3].link}
        target="_blank"
        rel="noreferrer"
        className="card"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${VideoData[3].thumb})`
        }}
      >
        <h1>{VideoData[3].title}</h1>
        <p>{VideoData[3].desc}</p>
      </a>
    </div>
  );
}
export default VideoList;
