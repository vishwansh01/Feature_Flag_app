import React from "react";

type Props = { onClick: () => void; extraCss: string; buttonText: string };

const NoBackgroundButton = ({ onClick, extraCss, buttonText }: Props) => {
  return (
    <button
      className={`cursor-pointer text-gray-900 hover:text-gray-700 font-semibold hover:underline hover:font-bold ${extraCss}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default NoBackgroundButton;
