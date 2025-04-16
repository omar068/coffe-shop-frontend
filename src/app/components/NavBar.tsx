"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleResources = () => {
        setIsResourcesOpen(!isResourcesOpen)
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsResourcesOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Handle body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isMenuOpen])

    return (
        <div className="sticky top-0">
            {/* Main Navbar - Dark theme */}
            <div className="w-full bg-[#040210] text-white">
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Menu button - on the left */}
                    <button
                        className="flex items-center justify-center h-10 px-3 text-white hover:bg-[#1a1c30] rounded-md transition-colors text-sm font-medium"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <Image
                            className=""
                            src="/menu.svg"
                            alt="Vercel logomark"
                            width={24}
                            height={24}
                        />


                    </button>

                    {/* Empty middle space */}
                    <div className="flex-1"></div>

                    {/* Buttons on the right */}
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center justify-center h-10 px-3 text-white hover:bg-[#1a1c30] rounded-md transition-colors text-sm font-medium">
                            <Image
                                className=""
                                src="/notifications.svg"
                                alt="Vercel logomark"
                                width={24}
                                height={24}
                            />
                        </button>
                        <button className="flex items-center justify-center h-10 px-3 text-white hover:bg-[#1a1c30] rounded-md transition-colors text-sm font-medium">
                            <Image
                                className=""
                                src="/user.svg"
                                alt="Vercel logomark"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
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
                    </ul>
                </div>
            </div>
        </div>
    )
}
