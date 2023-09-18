import myPhoto from "../../assets/Untitled-2.webp"

const ProfilePhoto = () => {
  return (
    <>
      <div className="relative mx-auto my-16 transition-all duration-500 border-4 rounded-full overflow-clip group w-52 h-52 x-auto lg:my-12 hover:rounded-md bg-gradient-to-br from-primary/40 to-primary/70">
        <img
          className="scale-100 opacity-100 w-52 h-52 drop-shadow-4xl"
          src={myPhoto}
          alt="Oleksandr Dzisiak"
          title="Scan with your Phone and it automatically add my contact to you phone"
        />
      </div>
    </>
  );
};

export default ProfilePhoto;
