import YouTube, { YouTubeProps } from "react-youtube";
import { videos } from "./../../db/db.json";

const ProjectsVideo = () => {
      const opts: YouTubeProps["opts"] = {
        height: "169",
        width: "300",
        playerVars: {
          autoplay: 0,
        },
      };
  return (
    <>
      <div className="grid w-full py-5 md:grid-cols-2 gap-y-5">
        {videos.map((item, index) => {
          return (
            <YouTube
              key={index}
              videoId={item}
              opts={opts}
              className="mx-auto overflow-hidden rounded-lg md:last:col-span-2"
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsVideo;
