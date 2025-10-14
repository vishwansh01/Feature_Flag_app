import React from "react";

type Props = { onClick: () => void; extraCss: string; buttonText: string };

const BlueButton = ({ onClick, extraCss, buttonText }: Props) => {
  return (
    <button
      className={`text-white cursor-pointer bg-primary-600 hover:bg-primary-700 px-4 font-semibold rounded-xl ${extraCss}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default BlueButton;
