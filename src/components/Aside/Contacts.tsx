import { Map, Banknote, AtSign, Phone, MapPin, Contact2, } from "lucide-react";
import { Button } from "../ui/button";
const Contacts = () => {
  return (
    <>
      <div id="contacts">
        <h3 className="flex text-2xl font-semibold cursor-default select-none">
          <Contact2 className="mr-2" />
          Contacts
        </h3>
        <div className="flex flex-col items-start justify-start">
          <Button asChild variant="ghost" size="sm">
            <a href="mailto:oleksandr.dzisiak@gmail.com">
              <AtSign className="mr-2" />
              oleksandr.dzisiak@gmail.com
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="tel:+48 735 145 620">
              <Phone className="mr-2" />
              +48 735 145 620
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="tel:+380 961 016 968">
              <Phone className="mr-2" />
              +380 961 016 968
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a
              href="https://goo.gl/maps/FBqjq7pZKCouV9hr6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="mr-2" />
              Poland, Warsaw
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <p className="cursor-default select-none">
              <Map className="mr-2" />
              Ready for relocation
            </p>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <p className="cursor-default select-none">
              <Banknote className="mr-2" />
              B2B / Permanent
            </p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Contacts;
