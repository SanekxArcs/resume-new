import { QrCode } from "lucide-react";
import qrCode from './../../assets/qr-code (1).webp'


const Vcard = () => {
  return (
    <>
      <div className="">
        <h3
          className="flex cursor-default select-none"
          title="Scan with your Phone and it automatically add my contact to you phone"
        >
          <QrCode className="mr-2" />
          VCARD
        </h3>
        <a
          className="cursor-pointer "
          href="https://qr-coge-vcard-generator.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Scan with your Phone and it automatically add my contact to you phone"
        >
          <img
            className="w-64 h-64 mx-3 rounded-md shadow-md ring-2 ring-primary"
            src={qrCode}
            alt="VCARD - QrCode"
          />
        </a>
      </div>
    </>
  );
};

export default Vcard;
