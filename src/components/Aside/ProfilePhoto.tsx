import myPhoto from "../../assets/IMG_20220708_18031022.webp";
import qrCode from "./../../assets/qr-code.webp";

const ProfilePhoto = () => {
  return (
    <>
      <div className="mx-auto my-2 overflow-hidden transition-all duration-700 rounded-full group w-52 h-52 x-auto lg:h-52 lg:w-52 lg:my-12 drop-shadow-4xl hover:rounded-md bg-gradient-to-br from-primary/40 to-primary/70">
        <img
          className="transition-all duration-700 delay-300 scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100"
          src={qrCode}
          alt="VCARD - QrCode"
          title="Scan with your Phone and it automatically add my contact to you phone"
        />
        <img
          className="absolute top-0 left-0 transition-all duration-700 scale-105 opacity-100 lg:h-52 lg:w-52 group-hover:scale-0 group-hover:opacity-0 drop-shadow-4xl"
          src={myPhoto}
          alt="Oleksandr Dzisiak"
          title="Scan with your Phone and it automatically add my contact to you phone"
        />
      </div>
    </>
  );
};

export default ProfilePhoto;
