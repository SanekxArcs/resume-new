
import myPhoto from "../../assets/IMG_20220708_18031022.webp";
import qrCode from "./../../assets/qr-code.webp";

const ProfilePhoto = () => {
  return (
    <>
      <a className="" href="#" target="_blank" rel="noopener noreferrer">
        <div className="mx-auto my-2 overflow-hidden transition-all duration-700 rounded-full group bg-primary/70 w-52 h-52 x-auto md:h-52 md:w-52 md:my-12 drop-shadow-4xl hover:rounded-md">
          <img
            className="transition-all duration-700 scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100"
            src={qrCode}
            alt="VCARD - QrCode"
            title="Scan with your Phone and it automatically add my contact to you phone"
          />
          <img
            className="absolute top-0 left-0 transition-all duration-700 scale-105 opacity-100 group-hover:scale-0 group-hover:opacity-0 drop-shadow-4xl"
            src={myPhoto}
            alt="Oleksandr Dzisiak"
            title="Scan with your Phone and it automatically add my contact to you phone"
          />
        </div>
      </a>
    </>
  );
};

export default ProfilePhoto;
