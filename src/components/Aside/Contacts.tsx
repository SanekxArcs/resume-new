import { Map, Banknote, AtSign, Phone, MapPin, Contact2, } from "lucide-react";
import { Button } from "../ui/button";
import contactsData from './../../db/db.json'


const Contacts = () => {

  return (
    <>
      <div id="contacts">
        <h3 className="flex items-center justify-start text-2xl font-semibold rounded-md cursor-default select-none scroll-p-16">
          <Contact2 className="mr-2" />
          Contacts
        </h3>
        <div className="flex flex-col items-start justify-start">
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
      </div>
    </>
  );
};

export default Contacts;
