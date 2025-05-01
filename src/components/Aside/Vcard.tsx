import { QrCode } from "lucide-react";
import qrCode from "./../../assets/qr-code.webp";
import { SectionWrapper } from "../ui/section-wrapper";

const Vcard = () => {
  return (
    <>
      <div className="hidden lg:block mb-2">
        <SectionWrapper
          icon={<QrCode className="mr-2" />}
          title="Business card"
          separator={false}
        >
          <div>
            <a
              className="cursor-pointer"
              href="https://qr-code.o-d.dev/"
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
        </SectionWrapper>
      </div>
    </>
  );
};

export default Vcard;
