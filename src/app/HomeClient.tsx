'use client';

import React, { useEffect, useState } from "react";
import Alert from "../components/Alert";
import Carrusel from "../components/Carrusel";
import FooterNavigationBar from "../components/FooterNavigationBar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Shop } from "../interfaces/shop.interface";

interface Props {
  items: Shop[];
  itemsByState: Shop[];
}

export default function HomeClient({ items, itemsByState }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      router.push("/login");
      return;
    }
    setLoading(false);
  }, [router]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <Alert />
      <div className="px-4 pt-5 pb-3">
        <p style={{ fontSize: "32px", fontWeight: "700" }}>Todas las opciones</p>
      </div>
      <Carrusel coffe_shops={items} />
      <div className="px-4 pt-5 pb-3">
        <p style={{ fontSize: "32px", fontWeight: "700" }}>Opciones en California</p>
      </div>
      <Carrusel coffe_shops={itemsByState} />
      <div className="absolute bottom-0">
        {isMobile && <FooterNavigationBar />}
      </div>
    </>
  );
}
