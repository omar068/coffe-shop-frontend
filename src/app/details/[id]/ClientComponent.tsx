'use client';
import Carrusel from "@/components/Carrusel";
import { COMMENTS } from "@/constants/comments";
import { PHOTOS } from "@/constants/photoLinkArray";
import Image from "next/image";
import Comment from '../../../components/Comment';
import FullButton from '../../../components/FullButton';
import OutLineButton from "@/components/OutLineButton";
import FooterNavigationBar from "@/components/FooterNavigationBar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function ClientComponent({ data }: { data: { id: string; name: string; address: string; phone: string } }) {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

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
    
      useEffect(() => {
        const token = Cookies.get("authToken");
        if (!token) {
          router.push("/login");
          return;
        }
        setLoading(false);
      }, [router]);
    if (loading) return <p>Cargando...</p>;
    return (
        <div className="px-4">
            <div className="pt-5 pb-3">
                <p style={{ fontSize: '32px', fontWeight: '700' }}>{data.name}</p>
            </div>
            <div className="mt-2 mb-8">
                <div className="text-sm flex space-x-3 mb-4" style={{ width: '192px', height: '24px' }}>
                    <Image
                        className=""
                        src="/map.svg"
                        alt="Vercel logomark"
                        width={24}
                        height={24}
                    />
                    <div className='truncate'>{data.address}</div>
                </div>
                <div className='text-sm flex space-x-4 px-1'>
                    <Image
                        className=""
                        src="/phone.svg"
                        alt="Vercel logomark"
                        width={18}
                        height={18}
                    />
                    <p>{data.phone}</p>
                </div>
            </div>
            <div className="mb-8">
                <Carrusel urls={PHOTOS} />
            </div>
            <div className="mb-8" style={{ fontSize: '24px', fontWeight: '600' }}>Opiniones</div>
            {COMMENTS.map((comment, index) => (
                <Comment key={index} comment={comment.comment} user={comment.user} />
            ))}

            <div className="mb-6 flex flex-col items-center gap-4">
                <FullButton className="button-reservation" content="Reservar mesa"/>
                <OutLineButton bg="bg-[#13132D]">Opciones de transporte</OutLineButton>
            </div>
            <div className="">
                {isMobile ? (<FooterNavigationBar/>) : ('')}
                </div>
        </div>
    );
}


