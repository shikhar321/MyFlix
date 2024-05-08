import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <nav className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <li className="flex flex-col gap-4">
        <ul className="px-3 text-center text-white hover:underline">Home</ul>
        <ul className="px-3 text-center text-white hover:underline">Series</ul>
        <ul className="px-3 text-center text-white hover:underline">Films</ul>
        <ul className="px-3 text-center text-white hover:underline">
          New & Popular
        </ul>
        <ul className="px-3 text-center text-white hover:underline">My List</ul>
        <ul className="px-3 text-center text-white hover:underline">
          Browse by languages
        </ul>
      </li>
    </nav>
  );
};

export default MobileMenu;
