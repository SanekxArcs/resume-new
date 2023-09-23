import YouTube, { YouTubeProps } from "react-youtube";

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
        <YouTube
          videoId={"xQYhu8bdbBg"}
          opts={opts}
          className="mx-auto overflow-hidden rounded-lg"
        />
        <YouTube
          videoId={"dx_TbV2bSTI"}
          opts={opts}
          className="mx-auto overflow-hidden rounded-lg"
        />
        <YouTube
          videoId={"aiHWty5tfgI"}
          opts={opts}
          className="mx-auto overflow-hidden rounded-lg"
        />
        <YouTube
          videoId={"ZKfxjK8Shu8"}
          opts={opts}
          className="mx-auto overflow-hidden rounded-lg"
        />
      </div>
    </>
  );
};

export default ProjectsVideo;
