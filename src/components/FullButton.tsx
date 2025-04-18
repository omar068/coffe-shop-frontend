import React, { JSX } from "react";

interface FullButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content: string;
  }

export default function FullButton ({ content, className = '' }: FullButtonProps): JSX.Element {
    return (
        <div className={`${className == "button-card" ? "px-6": ""} py-4`}>
            <button className={`bg-gradient-to-r from-[#3540E8] to-[#E41AD6] ${className} text-white rounded-lg`}>
                {content}
            </button>
        </div>
    )
}