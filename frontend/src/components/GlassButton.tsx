import React from "react";

type Props = { onClick: () => void; extraCss: string; buttonText: string };

const GlassButton = ({ onClick, extraCss, buttonText }: Props) => {
  return (
    <button
      className={`glass glass-hover cursor-pointer text-primary-700 font-medium px-2 rounded-md ${extraCss}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default GlassButton;
