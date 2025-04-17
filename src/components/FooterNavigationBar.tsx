"use client"
import Image from "next/image";
export default function FooterNavigationBar() {
  return (
    <div className="sticky bottom-0 flex py-2 bg-[#040210] w-100">
      <div className="grid grid-cols-3 gap-4">

      <div className="flex flex-col items-center text-gray-500">
        <Image
          className=""
          src="/calendar.svg"
          alt="Vercel logomark"
          width={24}
          height={24}
        />
        <p className="text-xs mt-1">Calendario</p>
      </div>
      <div className="flex flex-col items-center text-blue-500 mx-10">
      <Image
          className=""
          src="/home.svg"
          alt="Vercel logomark"
          width={24}
          height={24}
        />
        <p className="text-xs font-semibold mt-1">Inicio</p>
      </div>
      <div className="flex flex-col items-center text-gray-500">
      <Image
          className=""
          src="/chat.svg"
          alt="Vercel logomark"
          width={24}
          height={24}
        />
        <p className="text-xs mt-1">Chat</p>
      </div>
      </div>
    </div>
  );
}