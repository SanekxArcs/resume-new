import { QrCode } from "lucide-react";
import qrCode from './../../assets/qr-code (1).webp'


const Vcard = () => {
  return (
    <>
      <div className="">
        <h3 className="flex cursor-default select-none">
          <QrCode className="mr-2" />
          VCARD
        </h3>
        <a
          className="cursor-pointer"
          href="https://qr-coge-vcard-generator.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-64 rounded-md ring-2 ring-primary shadow-md h-64"
            src={qrCode}
            alt="VCARD - QrCode"
          />
        </a>
      </div>
    </>
  );
};

export default Vcard;
