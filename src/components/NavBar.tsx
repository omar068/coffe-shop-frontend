"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie"; 
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      Cookies.remove("authToken");

      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="sticky top-0">
      <div className="w-full bg-[#040210] text-white">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            className="flex items-center justify-center h-10 px-3 text-white hover:bg-[#1a1c30] rounded-md transition-colors text-sm font-medium"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Image
              src="/menu.svg"
              alt="Menu icon"
              width={24}
              height={24}
            />
          </button>
          <div className="flex-1"></div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center h-10 px-3 text-white hover:bg-[#1a1c30] rounded-md transition-colors text-sm font-medium">
              <Image
                src="/notifications.svg"
                alt="Notifications icon"
                width={24}
                height={24}
              />
            </button>
            <button className="flex items-center justify-center h-10 px-3 text-white hover:bg-[#1a1c30] rounded-md transition-colors text-sm font-medium">
              <Image
                src="/user.svg"
                alt="User icon"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={menuRef}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <span className="font-semibold text-white">Menu</span>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block py-2 px-3 rounded-md hover:bg-gray-100 text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 rounded-md hover:bg-gray-100 text-white transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 px-3 rounded-md hover:bg-red-500 text-white transition-colors"
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}