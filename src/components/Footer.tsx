
import Rodo from "./main/Rodo";

const Footer = () => {
  return (
    <>
      <Rodo />
      <footer
        className={`print:hidden container mx-auto flex flex-col items-center justify-center px-4 py-2 m-2 mt-10 text-center rounded-md backdrop-blur-md top-2 bg-emerald-300/30 animate-fadeIn cursor-default select-none`}
      >
        <p className={`w-full p-2 mb-2 border-b border-emerald-950/30`}>
          Thank you for visiting my page, I am waiting for you to contact
        </p>
        <p>
          © 2023 Built using ReactJS by&nbsp;
          <a
            href="https://github.com/SanekxArcs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanekx Arcs
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
