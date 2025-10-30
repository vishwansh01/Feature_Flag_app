import React from "react";
import NavOptions from "./NavOptions";

const NavBar = () => {
  return (
    <nav className="text-black flex items-center justify-between">
      <div className="font-bold text-2xl m-2 cursor-pointer hover:text-text-secondary">
        FeatureConfig
      </div>
      <NavOptions />
    </nav>
  );
};

export default NavBar;
