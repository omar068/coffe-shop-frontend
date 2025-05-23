"use client"
export default function OutLineButton({ children, bg, onClick }: { children: string, bg: string, onClick?: () => void}){
    return(
      <div className="bg-gradient-to-r from-[#3540E8] to-[#E41AD6] p-[2px] rounded-[12px] w-[342px] h-[48px]">
      <button className={`${bg} text-white w-full h-full rounded-[12px]`} onClick={onClick} type="button">
        {children}
      </button>
    </div>
    
    )
}