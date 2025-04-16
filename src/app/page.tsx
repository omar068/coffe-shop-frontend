"use client"
import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Carousel from './components/Carrusel';
import FooterNavigationBar from './components/FooterNavigationBar'
import { Shop } from "./interfaces/shop.interface";
import { fetchAllItems } from "@/services/apiService";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState<Shop[]>([]);
  const [itemsByState, setItemsByState] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [data, dataFiltered] = await fetchAllItems(); // Llama a la API y resuelve la promesa
      setItems(data);
      setItemsByState(dataFiltered); 
      console.log(data);
      console.log(dataFiltered);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Alert/>
    <div className="px-4 pt-5 pb-3">
      <p style={{ fontSize: '32px', fontWeight: '700'}}>Todas las opciones</p>
    </div>
    <Carousel coffe_shops={items}/>
    <div className="px-4 pt-5 pb-3">
      <p style={{ fontSize: '32px', fontWeight: '700'}}>Opciones en California</p>
    </div>
    <Carousel coffe_shops={itemsByState}/>
    <div className="absolute bottom-0">
    {isMobile ? (<FooterNavigationBar/>) : ('')}
    </div>
    </>
  );
}
