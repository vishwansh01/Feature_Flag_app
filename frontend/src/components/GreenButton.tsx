import React from "react";

type Props = { onClick: () => void; extraCss: string; buttonText: string };

const GreenButton = ({ onClick, extraCss, buttonText }: Props) => {
  return (
    <button
      className={`bg-success-600 cursor-pointer px-3 py-1 rounded-lg hover:bg-success-700 text-white ${extraCss}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default GreenButton;
