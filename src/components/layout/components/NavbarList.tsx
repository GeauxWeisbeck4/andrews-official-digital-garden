import React from 'react';

const ITEMS = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/notes", name: "Notes" },
  { link: "/blog", name: "Blog" },
  { link: "/resources", name: "Resources" },
  { link: "/portfolio", name: "Portfolio" },
  { link: "/contact", name: "Contact" },
];

type Props = {
  classWrapper?: string;
  classItem?: string;
};

const NavbarList = ({ classWrapper, classItem }: Props) => {
  return (
    <ul className={`flex flex-row justify-start ml-[-0.7rem] ${classWrapper}`}>
      {ITEMS.map(({ link, name }) => (
        <li key={name}>
          <a
            href={link}
            className={`text-black dark:text-white group block p-1 sm:px-3 sm:py-2 hover:underline ${classItem}`}
          >
            <span className="pb-1">{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;