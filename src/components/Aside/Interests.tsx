import { BrainCircuit } from "lucide-react"

const Interests = () => {
  return (
    <>
      <div className=" break-before-auto print:hidden cursor-default select-none">
        <h3 className="flex">
          <BrainCircuit className="mr-2" />
          Interests
        </h3>
        <ul className="flex flex-col gap-1 px-3">
          <li>Machine learning</li>
          <li>3D Modeling</li>
          <li>Inventing new</li>
          <li>Read books/blog news in IT</li>
          <li>Tech innovations</li>
        </ul>
      </div>
    </>
  );
};

export default Interests;
