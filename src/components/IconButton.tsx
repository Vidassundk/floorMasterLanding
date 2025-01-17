"use client";

import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md border border-transparent flex p-2 w-10 h-10 items-center justify-center transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <div className="h-5 w-5 flex items-center">{icon}</div>
    </button>
  );
};

export default IconButton;
