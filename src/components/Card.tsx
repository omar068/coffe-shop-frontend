import React from 'react';
import FullButton from './FullButton';
import Image from 'next/image';
import { Shop } from '../interfaces/shop.interface';
import Link from 'next/link';

export default function Card({ name, address, phone, id }: Shop) {

  return (
    <div className="w-[328px] h-[191px] gap-[16px] rounded-[8px] p-[16px] ml-[8px] bg-[#13132D]" role='article'>
      <h2 className="text-xl font-bold h-[24px] mb-4 truncate">{name}</h2>
      <div className="flex align-items-center space-x-1 gap-2">
        <img
          src="https://tienda.cristar.com.co/wp-content/uploads/2024/07/8cef3ee5-nadir_dk_6464-md-1.jpg"
          alt="Bar Nim Interior"
          className="w-[71px] h-[71px] rounded-full flex-none order-0 flex-grow-0"
          role='img'
        />
        <div style={{ width: '224px', height: '58px' }}>
          <div className="text-sm flex space-x-3 mb-4" style={{ width : '192px', height: '24px' }}>
            <Image
              className=""
              src="/map.svg"
              alt="Vercel logomark"
              width={24}
              height={24}
            />
            <div className='truncate'>{address || "No disponible"}</div>
          </div>
          <div className='text-sm flex space-x-4'>
          <Image
              className=""
              src="/phone.svg"
              alt="Vercel logomark"
              width={18}
              height={18}
            />
          <p>{phone || "No disponible"}</p>
          </div>
        </div>
      </div>
      <Link href={`/details/${id}`}>
      <FullButton className="button-card" content="Ver mas" />
      </Link>
    </div>
  );
};

