import { Languages } from "lucide-react";
import { languages } from "./../../db/db.json";
import { SectionWrapper } from "../ui/section-wrapper";

const Language = () => {

  return (
    <>
      <div className="select-none break-before-auto">
        <SectionWrapper
          icon={<Languages className="mr-2" />}
          title="Languages"
          separator={false}
        >
          <div
          className={`flex flex-col gap-2 px-3`}
        >
          <div className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 512 512"
            >
              <clipPath id="svgIDa">
                <circle cx="256" cy="256" r="256"></circle>
              </clipPath>
              <g clipPath="url(#svgIDa)">
                <path
                  fill="#eee"
                  d="m0 0l8 16l-8 15v16l32 65l-32 64v32l32 48l-32 48v32l32 64l-32 65v47l16-8l15 8h16l65-32l64 32h32l48-32l48 32h32l64-32l65 32h47l-8-15l8-16v-16l-32-65l32-64v-32l-32-48l32-48v-32l-32-64l32-65V0l-15 8l-16-8h-16l-65 32l-64-32h-32l-48 32l-48-32h-32l-64 32L47 0H0z"
                ></path>
                <path
                  fill="#0052b4"
                  d="m47 0l129 129V0Zm289 0v129L465 0ZM0 47v129h129Zm512 0L383 176h129ZM0 336v129l129-129Zm383 0l129 129V336Zm-47 47v129h129zm-160 0L47 512h129Z"
                ></path>
                <path
                  fill="#d80027"
                  d="M208 0v208H0v96h208v208h96V304h208v-96H304V0h-96z"
                ></path>
                <path
                  fill="#d80027"
                  d="m336 336l176 176v-31L367 336Zm0-160L512 0h-31L336 145Zm-160 0L0 0v31l145 145zm0 160L0 512h31l145-145Z"
                ></path>
              </g>
            </svg>
            English: {languages.english}
          </div>
          <div className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 512 512"
            >
              <mask id="circleFlagsPl0">
                <circle cx="256" cy="256" r="256" fill="#fff"></circle>
              </mask>
              <g mask="url(#circleFlagsPl0)">
                <path
                  fill="#d80027"
                  d="m0 256l256.4-44.3L512 256v256H0z"
                ></path>
                <path fill="#eee" d="M0 0h512v256H0z"></path>
              </g>
            </svg>
            Poland: {languages.polish}
          </div>
          <div
            className="flex flex-row items-center gap-2"
            title="I was born in Ukraine "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 512 512"
            >
              <mask id="circleFlagsUa0">
                <circle cx="256" cy="256" r="256" fill="#fff"></circle>
              </mask>
              <g mask="url(#circleFlagsUa0)">
                <path fill="#ffda44" d="m0 256l258-39.4L512 256v256H0z"></path>
                <path fill="#338af3" d="M0 0h512v256H0z"></path>
              </g>
            </svg>
            Ukrainian: {languages.ukrainian}
          </div>
        </div>
        </SectionWrapper>


      </div>
    </>
  );
};

export default Language;
