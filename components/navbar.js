import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-8 bg-black text-white">
      <ul className="flex">
        <Link href="/" className="mx-5">
          <li>Home</li>
        </Link>
        <Link href="/about" className="mx-5">
          <li>About</li>
        </Link>
        <Link href="/blogs" className="mx-5">
          <li>Blogs</li>
        </Link>
        <Link href="/contact" className="mx-5">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
