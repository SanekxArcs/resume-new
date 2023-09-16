import { Info } from "lucide-react"
import interestsData from "./../../db/db.json";

const Interests = () => {

  const interestsElements = interestsData.interests.map((element, index) => {
    return <li key={index}>{element}</li>;
  });

  return (
    <>
      <div className="cursor-default select-none break-before-auto print:hidden">
        <h3
          className="flex items-center justify-start "
          title="Show my relevant interests, have many other"
        >
          <Info className="mr-2" />
          Інтереси
        </h3>
        <ul className="flex flex-col gap-1 px-3">
          {interestsElements}
        </ul>
      </div>
    </>
  );
};

export default Interests;
