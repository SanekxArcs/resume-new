import { QrCode } from "lucide-react";
import qrCode from './../../assets/qr-code.png'


const Vcard = () => {
  return (
    <>
      <div className="hidden lg:block">
        <h3
          className="flex items-center justify-start cursor-default select-none"
          title="Scan with your Phone and it automatically add my contact to you phone"
        >
          <QrCode className="mr-2" />
          VCARD <span className="ml-2 text-xs text-muted-foreground">зіскануй і додай мене у контакти</span>
        </h3>
        <a
          className="cursor-pointer "
          href="https://qr-coge-vcard-generator.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Scan with your Phone and it automatically add my contact to you phone"
        >
          <img
            className="w-64 h-64 mx-3 border-2 rounded-md "
            src={qrCode}
            alt="VCARD - QrCode"
          />
        </a>
      </div>
    </>
  );
};

export default Vcard;
