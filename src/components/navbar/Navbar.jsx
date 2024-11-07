'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-full flex justify-between items-center md:px-6 py-4shadow-md ">
      <Link href="/" className="font-bold text-2xl">
        MyBlog
      </Link>

      <div className="block md:hidden">
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          onClick={ToggleMenu}
          className="cursor-pointer"
        />
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full  bg-white shadow-md md:flex md:static md:w-auto md:bg-transparent md:shadow-none items-center gap-5`}
      >
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className="block px-4 py-2 no-underlinetext-black md:text-[#bbb] hover:text-gray-500 md:hover:text-gray-700 md:inline"
          >
            {link.title}
          </Link>
        ))}
        <button
          className="p-2 bg-[#53c28b] text-white rounded-lg cursor-pointer sm:justify-center hover:bg-[#45a673] border-none"
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
