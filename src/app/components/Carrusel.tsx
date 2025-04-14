"use client"
import React from 'react';
import Card from './Card';

export default function Carousel() {
    const handleScroll = (event: any) => {
        event.preventDefault(); // Previene el scroll vertical
        const container = event.currentTarget;
        container.scrollLeft += event.deltaY; // Desplaza horizontalmente según el scroll vertical
      };
    
  return (
    <div className="flex overflow-x-scroll scrollbar-hide" onWheel={handleScroll}>
      {/* Tarjetas en el carrusel */}
      <Card />
      <Card />
      <Card />
      <Card />
      {/* Agrega más tarjetas si es necesario */}
    </div>
  );
}