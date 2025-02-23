import { Info} from "lucide-react"
import interestsData from "./../../db/db.json";
import { SectionWrapper } from "../ui/section-wrapper";

const Interests = () => {

  const interestsElements = interestsData.interests.map((element, index) => {
    return <li key={index}>{element}</li>;
  });

  return (
    <>
      <div className="cursor-default select-none break-before-auto print:hidden">
        <SectionWrapper
          icon={<Info className="mr-2" />}
          title="Interests"
          separator={false}
        >
          <ul
          className={`flex flex-col gap-1 px-3 pl-5 text-sm list-disc list-inside`}
        >
          {interestsElements}
        </ul>
        </SectionWrapper>
        
      </div>
    </>
  );
};

export default Interests;
