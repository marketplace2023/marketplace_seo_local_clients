import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image src={logo} width={150} height={150} alt="Company logo" />
          </div>
        </Link>
        <ul className="hidden md:flex space-x-10 font-semibold text-sm">
          <li>
            <a href="#" className="hover:text-gray-700 focus:text-gray-700">
              Services
            </a>
          </li>
          <li>
            <Link href="/clients">
              <p className="hover:text-gray-700 focus:text-gray-700">
                Bussiness
              </p>
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700 focus:text-gray-700">
              Business Products
            </a>
          </li>
        </ul>
        <div className=" mr-6">
          <Link href="/login">
            <Button>Unirse</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
