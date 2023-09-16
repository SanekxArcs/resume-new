import { AtSign, Phone, MapPin, Contact2, } from "lucide-react";
import { Button } from "../ui/button";
import contactsData from './../../db/db.json'


const Contacts = () => {

  return (
    <>
      <div id="contacts">
        <h3 className=" rounded-md cursor-default select-none scroll-m-52">
          <Contact2 className="mr-2" />
          Контакти
        </h3>
        <div className="flex flex-col items-start justify-start">
          <Button asChild variant="ghost" size="sm">
            <a
              href={`mailto:${contactsData.contacts.email}`}
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
        </div>
      </div>
    </>
  );
};

export default Contacts;
