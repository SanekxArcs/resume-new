import pic1 from "./../../assets/DSC00264.webp";
import pic2 from "./../../assets/DSC00496.webp";
import pic3 from "./../../assets/DSC07871.webp";
import pic4 from "./../../assets/DSC08748.webp";
import pic5 from "./../../assets/DSC09671.webp";
import pic6 from "./../../assets/photo_2023-09-24_00-18-45.webp";
import pic7 from "./../../assets/photo_2023-09-24_00-18-36.webp";
import pic8 from "./../../assets/photo_2023-09-16_21-16-44.webp";
import pic9 from "./../../assets/photo_2023-09-24_00-18-56.webp";
import pic10 from "./../../assets/IMG_3797.webp";

const ProjectsPhoto = () => {

  const imgClass =
    "object-cover w-fit h-fit md:w-full md:h-full transition-all duration-1000 rounded-md hover:shadow-md aspect-video  overflow-hidden mx-auto";
  const aspectRatioStN =
    "aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto";
  const aspectRatioOtO =
    "aspect-video hover:aspect-square md:hover:aspect-auto";

  return (
    <>
      <p className="py-2 text-xs text-center text-muted-foreground md:hidden">
        Клікни по фото аби збільшити
      </p>
      <div className="flex flex-wrap justify-center gap-2 mx-auto ">
        <div className="grid grid-cols-1 gap-2 p-2 rounded-md place-content-center md:grid-cols-5 md:grid-rows-3 lg:p-2 bg-muted">
          <img loading="lazy" className={`${imgClass} ${aspectRatioStN}`} src={pic1} alt="Photo" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioOtO} md:col-span-3`} src={pic5} alt="Photo" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioStN}`} src={pic2} alt="Photo" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioStN} md:col-span-2 md:row-span-2`} src={pic3} alt="Photo" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioStN}`} src={pic4} alt="Photo" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioStN}`} src={pic6} alt="Photo" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioStN}`} src={pic7} alt="Photo" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioStN}`} src={pic9} alt="Photo" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioOtO} md:col-span-2`} src={pic8} alt="" />
          <img loading="lazy" className={`${imgClass} ${aspectRatioStN} md:hidden`} src={pic10} alt="Photo" />
        </div>
      </div>
    </>
  );
};

export default ProjectsPhoto;
