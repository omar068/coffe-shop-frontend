import React from "react";

export default function FullButton({ id, content }: { id: string; content: string }) {
    return (
        <div className={`${id == "button-card" ? "px-6": ""} py-4 text-center`}>
            <button className={`bg-gradient-to-r from-[#3540E8] to-[#E41AD6] ${id} text-white rounded-lg`}>
                {content}
            </button>
        </div>
    )
}