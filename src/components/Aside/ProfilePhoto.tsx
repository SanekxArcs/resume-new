import myPhoto from "../../assets/Untitled-2.webp"

const ProfilePhoto = () => {
  return (
    <>
      <div className="relative mx-auto my-16 transition-all duration-500 border-4 rounded-full overflow-clip group w-52 h-52 x-auto lg:my-12 bg-gradient-to-br from-primary/40 to-primary/70">
        <img
          width={'100%'}
          height={'100%'}
          src={myPhoto}
          alt="Profile Photo"
          title="Margarita Tkachyk"
        />
      </div>
    </>
  );
};

export default ProfilePhoto;
