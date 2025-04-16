"use client";
import React from 'react';
import Card from './Card';
import { Shop } from '../interfaces/shop.interface';

export default function Carousel({ coffe_shops, urls }: { coffe_shops?: Shop[], urls?: string[] }) {
  const handleScroll = (event: any) => {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
  };

  return (
    <div className="flex overflow-x-scroll scrollbar-hide ml-1" onWheel={handleScroll}>

      {coffe_shops?.map((shop: Shop, index: number) => (
        <Card key={index} {...shop}></Card>
      ))}
      {urls?.map((url, index) => (
        <img className="w-[156px] h-[104px] rounded-[8px] ml-[8px]"
          key={index} src={url} alt="" />
      ))}

    </div>
  );
}