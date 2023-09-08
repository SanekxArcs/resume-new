
import myPhoto from "../../assets/IMG_20220708_18031022.webp";

const ProfilePhoto = () => {
  return (
    <>
      <a className=" " href="#" target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden mx-auto rounded-full bg-primary/70 w-52 h-52 z-0 x-auto my-2 md:h-52 md:w-52 md:my-12  drop-shadow-4xl">
          <img
            className="scale-105 drop-shadow-4xl"
            src={myPhoto}
            alt="Oleksandr Dzisiak"
          />
        </div>
      </a>
    </>
  );
};

export default ProfilePhoto;
