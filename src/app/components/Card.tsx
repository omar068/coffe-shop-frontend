import React from 'react';
import FullButton from './FullButton';

export default function Card() {
  return (
    <div className="card">
     <h2 className="text-xl font-bold text-">Bar Nim</h2>
      <div className="p-4 flex items-center space-x-4">
      
        <img
          src="https://tienda.cristar.com.co/wp-content/uploads/2024/07/8cef3ee5-nadir_dk_6464-md-1.jpg"
          alt="Bar Nim Interior"
          className="img-circle"
        />
        <div>
          <p className="text-sm">Havre 73, Juárez, Cuauhtémoc</p>
          <p className="">4235-8766</p>
        </div>
      </div>
      <FullButton />
    </div>
  );
};

