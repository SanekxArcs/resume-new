import myPhoto from "../../assets/Untitled-2.webp"

const ProfilePhoto = () => {
  return (
    <>
      <div className="relative mx-auto my-16 transition-all duration-500 border-4 rounded-full overflow-clip group w-52 h-52 x-auto lg:my-12 hover:rounded-xl bg-gradient-to-br from-primary/40 to-primary/70">
        <img
          className="scale-100 opacity-100 drop-shadow-4xl"
          src={myPhoto}
          alt="Profile Photo"
          title="Margarita Tkachyk"
        />
      </div>
    </>
  );
};

export default ProfilePhoto;
