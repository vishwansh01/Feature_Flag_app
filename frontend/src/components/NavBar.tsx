import React from "react";
import NavOptions from "./NavOptions";

const NavBar = () => {
  return (
    <div className="text-black flex items-center justify-between">
      <div className="font-bold text-2xl m-2 cursor-pointer hover:text-text-secondary">
        FeatureConfig
      </div>
      <NavOptions />
    </div>
  );
};

export default NavBar;
