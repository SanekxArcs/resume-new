import { BrainCircuit } from "lucide-react"

const Interests = () => {
  return (
    <>
      <div
        className="cursor-default select-none break-before-auto print:hidden"
      >
        <h3
          className="flex"
          title="Show my relevant interests, have many other"
        >
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
