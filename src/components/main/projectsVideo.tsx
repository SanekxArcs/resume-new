import YouTube, { YouTubeProps } from "react-youtube";

const ProjectsVideo = () => {
      const opts: YouTubeProps["opts"] = {
        height: "169",
        width: "300",
        playerVars: {
          autoplay: 0,
        },
      };
      
      const videos = [
        "PevzjgVjWL4",
        "xQYhu8bdbBg",
        "dx_TbV2bSTI",
        "aiHWty5tfgI",
        "ZKfxjK8Shu8",
      ];
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
