import myPhoto from "../../assets//ProfilePhoto.webp";
import qrCode from "./../../assets/qr-code.webp";

const ProfilePhoto = () => {
  return (
    <>
      <div className="hidden relative mx-auto my-16 transition-all duration-1000 border-4 rounded-full border-primary overflow-clip group w-52 h-52 x-auto lg:my-12 hover:rounded-md bg-gradient-to-br from-primary/40 to-primary/70 print:hidden">
        <img
          className="absolute top-0 left-0 transition-all duration-700 delay-300 opacity-0 w-52 h-52 scale-1 group-hover:opacity-100 group-hover:scale-100"
          src={qrCode}
          alt="VCARD - QrCode"
          title="Scan with your Phone and it automatically add my contact to you phone"
        />
        <img
          className="transition-all duration-700 scale-100 opacity-100 w-52 h-52 group-hover:scale-0 group-hover:opacity-0 drop-shadow-4xl"
          src={myPhoto}
          alt="Oleksandr Dzisiak"
          title="Scan with your Phone and it automatically add my contact to you phone"
        />
      </div>
    </>
  );
};

export default ProfilePhoto;
