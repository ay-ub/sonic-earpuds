import { useState } from "react";
import Logo from "../Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex container mx-auto items-center justify-between p-4 ">
      <Logo />
      <div
        className={`links flex items-center fixed left-0 top-0 bottom-0 md:relative md:flex-row md:gap-6 gap-2 flex-col duration-300
       bg-white justify-center ${
         isOpen
           ? "z-10 opacity-100 w-screen h-screen visible"
           : "z-[-1] opacity-0 invisible md:visible md:opacity-100 md:z-auto w-0"
       }`}
      >
        {["Product", "Features", "Reviews", "About us"].map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="px-4 text-[#707070] hover:text-[#7F6459] hover:font-semibold transition-colors text-nowrap
            duration-300 text-2xl md:text-xl"
          >
            {link}
          </a>
        ))}
        <div className="close-btn absolute top-8 right-8 md:hidden">
          <button className="cursor-pointer md:hidden" onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#8D867F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="right-actions flex items-center gap-4">
        <button
          className="cursor-pointer burger-icon w-6 h-8 flex flex-col justify-evenly md:hidden"
          onClick={toggleMenu}
        >
          <span className="block w-full h-0.5 bg-[#8D867F]"></span>
          <span className="block w-full h-0.5 bg-[#8D867F]"></span>
          <span className="block w-full h-0.5 bg-[#8D867F]"></span>
        </button>
        <button className="cursor-pointer">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8723 14.8116C17.1996 13.2436 18 11.2153 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.2153 18 13.2436 17.1996 14.8116 15.8723L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L15.8723 14.8116ZM16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
              fill="#8D867F"
            />
          </svg>
        </button>
        <button className="cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.69817 5.50037L8.09677 1.28504C9.16046 0.265664 10.8385 0.265663 11.9022 1.28504L16.3008 5.50037H18.8465C19.4551 5.50037 19.9225 6.03935 19.8365 6.64179L18.3675 16.9246C18.1563 18.4026 16.8906 19.5004 15.3976 19.5004H4.60141C3.10846 19.5004 1.8427 18.4026 1.63156 16.9246L0.162582 6.64179C0.0765203 6.03935 0.543983 5.50037 1.15253 5.50037H3.69817ZM9.13462 2.36802C9.61812 1.90467 10.3809 1.90467 10.8644 2.36802L14.1329 5.50037H5.86609L9.13462 2.36802ZM1.72904 7.00037L3.11648 16.7125C3.22205 17.4515 3.85493 18.0004 4.60141 18.0004H15.3976C16.1441 18.0004 16.777 17.4515 16.8826 16.7125L18.27 7.00037H1.72904Z"
              fill="#8D867F"
            />
          </svg>
        </button>

        <button className="avatar cursor-pointer">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
