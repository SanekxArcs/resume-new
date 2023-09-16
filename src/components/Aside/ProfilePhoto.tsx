import myPhoto from "../../assets/Untitled-1.webp"
import qrCode from "./../../assets/qr-code (3).png";

const ProfilePhoto = () => {
  return (
    <>
      <div className="relative mx-auto my-16 transition-all duration-1000 rounded-full overflow-clip group w-52 h-52 x-auto lg:my-12 drop-shadow-4xl hover:rounded-md bg-gradient-to-br animate-in from-primary/40 to-primary/70">
        <img
          className="absolute top-0 left-0 transition-all duration-700 delay-300 opacity-0 w-52 h-52 scale-1 group-hover:opacity-100 group-hover:scale-100"
          src={qrCode}
          alt="VCARD - QrCode"
          title="Scan with your Phone and it automatically add my contact to you phone"
        />
        <img
          className="transition-all scale-100 duration-700 opacity-100 w-52 h-52 group-hover:scale-0 group-hover:opacity-0 drop-shadow-4xl"
          src={myPhoto}
          alt="Oleksandr Dzisiak"
          title="Scan with your Phone and it automatically add my contact to you phone"
        />
      </div>
    </>
  );
};

export default ProfilePhoto;
