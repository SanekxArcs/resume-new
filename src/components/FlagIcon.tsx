import React from 'react';

interface FlagIconProps {
  languageCode: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ languageCode }) => {
  switch (languageCode.toLowerCase()) {
    case "english":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 75 50"
          className="size-5 rounded-sm"
        >
          <rect width="75" height="50" fill="#012169" />
          <path d="M0,0 L75,50 M75,0 L0,50" stroke="#FFF" strokeWidth="5" />
          <path
            d="M0,0 L75,50 M75,0 L0,50"
            stroke="#C8102E"
            strokeWidth="3"
            strokeDasharray="25,25"
          />
          <path d="M0,25 H75 M37.5,0 V50" stroke="#FFF" strokeWidth="15" />
          <path d="M0,25 H75 M37.5,0 V50" stroke="#C8102E" strokeWidth="9" />
        </svg>
      );
    case "ukrainian":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9 6"
          className="size-5 rounded-sm"
        >
          <rect fill="#fff" width="9" height="3" />
          <rect fill="#d52b1e" y="3" width="9" height="3" />
          <rect fill="#0039a6" y="2" width="9" height="2" />
        </svg>
      );
    case "polish":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8 5"
          className="size-5 rounded-sm"
        >
          <rect width="8" height="5" fill="#fff" />
          <rect width="8" height="2.5" y="2.5" fill="#dc143c" />
        </svg>
      );
    default:
      return null;
  }
};

export default FlagIcon;
