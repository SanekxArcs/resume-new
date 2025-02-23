import { Map, Banknote, AtSign, Phone, MapPin, Contact2, } from "lucide-react";
import { Button } from "../ui/button";
import contactsData from './../../db/db.json'
import { SectionWrapper } from "../ui/section-wrapper";

const Contacts = () => {

  return (
    <>
      <div id="contacts">
        <SectionWrapper icon={<Contact2 className="mr-2" />} title="Contacts" separator={false}>
          <div
          className={`flex flex-col items-start justify-start`}
        >
          <Button asChild variant="ghost" size="sm">
            <a
              href={`mailto:${contactsData.contacts.email}?subject=Hello world!&body=Hello, Oleksandr!`}
              title="Email for work"
            >
              <AtSign className="mr-2" />
              {contactsData.contacts.email}
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a
              href={`tel:${contactsData.contacts.phoneNumber}`}
              title="My work number"
            >
              <Phone className="mr-2" />
              {contactsData.contacts.phoneNumber}
            </a>
          </Button>
          <Button variant="ghost" size="sm">
            <p className="cursor-default select-none flex" title="My location">
              <MapPin className="mr-2" />
              {contactsData.contacts.location}
            </p>
          </Button>
          <Button variant="ghost" size="sm">
            <p
              className="cursor-default select-none flex"
              title="This means that if work has good salary i will think about relocation"
            >
              <Map className="mr-2" />
              {contactsData.contacts.relocationReady
                ? "Ready for relocation"
                : "Not ready for relocation"}
            </p>
          </Button>
          <Button variant="ghost" size="sm">
            <p
              className="cursor-default select-none flex"
              title="I ready for any type of legal work"
            >
              <Banknote className="mr-2" />
              {contactsData.contacts.typeOfContract}
            </p>
          </Button>
        </div>
        </SectionWrapper>

        
      </div>
    </>
  );
};

export default Contacts;
