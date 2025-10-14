import React from "react";

type Props = { onClick: () => void; extraCss: string; buttonText: string };

const UnderlineBlueButton = ({ onClick, extraCss, buttonText }: Props) => {
  return (
    <button
      className="text-primary-600 hover:underline cursor-pointer"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default UnderlineBlueButton;
