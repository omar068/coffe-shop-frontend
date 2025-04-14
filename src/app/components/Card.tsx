import React from 'react';
import FullButton from './FullButton';
import Image from 'next/image';

export default function Card() {
  return (
    <div className="card">
      <h2 className="text-xl font-bold h-[24px] mb-4">Bar Nim</h2>
      <div className="flex align-items-center space-x-1 gap-2">
        <img
          src="https://tienda.cristar.com.co/wp-content/uploads/2024/07/8cef3ee5-nadir_dk_6464-md-1.jpg"
          alt="Bar Nim Interior"
          className="img-circle"
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
            <div>
            Havre 73, Juárez, Cuauhtémoc</div>
          </div>
          <div className='text-sm flex space-x-4'>
          <Image
              className=""
              src="/phone.svg"
              alt="Vercel logomark"
              width={18}
              height={18}
            />
          <p>4235-876699</p>
          </div>
        </div>
      </div>
      <FullButton />
    </div>
  );
};

