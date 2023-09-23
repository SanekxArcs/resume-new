import pic1 from "./../../assets/DSC00264.webp";
import pic2 from "./../../assets/DSC00496.webp";
import pic3 from "./../../assets/DSC07871.webp";
import pic4 from "./../../assets/DSC08748.webp";
import pic5 from "./../../assets/DSC09671.webp"; // last
import pic10 from "./../../assets/IMG_3797.webp";
import pic6 from "./../../assets/photo_2023-09-16_21-16-33.webp";
import pic7 from "./../../assets/photo_2023-09-16_21-16-37.webp";
import pic8 from "./../../assets/photo_2023-09-16_21-16-44.webp";
import pic9 from "./../../assets/photo_2023-09-16_21-16-49.webp";

const ProjectsPhoto = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mx-auto ">
        <p className="text-xs text-muted-foreground md:hidden">
          Клікни по фото аби збільшити
        </p>
        <div className="grid grid-cols-1 gap-2 rounded-md place-content-center md:grid-cols-5 md:grid-rows-3 lg:p-2 bg-muted">
          <img
            className="object-cover w-full h-full transition-all duration-1000 rounded-md hover:shadow-md aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto"
            src={pic1}
            alt=""
          />
          <img
            className="object-cover w-full h-full transition-all duration-1000 ease-in-out rounded-md md:col-span-3 hover:shadow-md aspect-video hover:aspect-square md:hover:aspect-auto"
            src={pic5}
            alt=""
          />
          <img
            className="object-cover w-full h-full transition-all duration-1000 rounded-md hover:shadow-md aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto"
            src={pic2}
            alt=""
          />
          <img
            className="object-cover w-full h-full md:col-span-2 md:row-span-2 transition-all duration-1000 rounded-md hover:shadow-md aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto"
            src={pic3}
            alt=""
          />
          <img
            className="object-cover w-full h-full transition-all duration-1000 rounded-md hover:shadow-md aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto"
            src={pic4}
            alt=""
          />
          <img
            className="object-cover w-full h-full transition-all duration-1000 rounded-md hover:shadow-md aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto"
            src={pic6}
            alt=""
          />
          <img
            className="object-cover w-full h-full transition-all duration-1000 rounded-md hover:shadow-md aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto"
            src={pic7}
            alt=""
          />
          <img
            className="object-cover w-full h-full transition-all duration-1000 rounded-md hover:shadow-md aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto"
            src={pic9}
            alt=""
          />
          <img
            className="object-cover w-full h-full transition-all duration-1000 rounded-md md:col-span-2 hover:shadow-md aspect-video hover:aspect-square md:hover:aspect-auto"
            src={pic8}
            alt=""
          />
          <img
            className="object-cover md:hidden w-full h-full transition-all duration-1000 rounded-md hover:shadow-md aspect-video hover:aspect-[9_/_16] md:hover:aspect-auto"
            src={pic10}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsPhoto;
