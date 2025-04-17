import Image from "next/image"
export default function Alert() {
    return (
        <>

            <div className="w-full bg-amber-100 border-l-4 border-orange-500">
                <div className="flex items-center px-4 py-3">
                    <div className="flex-shrink-0 mr-3">
                        <Image
                            className=""
                            src="/alert.svg"
                            alt="Vercel logomark"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="text-[#2D3748] text-[16px]">
                        <p className="font-bold">Happy Hour</p>
                        <p className="font-normal">15:00 - 17:00 hrs MEX</p>
                    </div>

                </div>
            </div></>
    )
}