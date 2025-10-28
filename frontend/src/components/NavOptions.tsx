import React from "react";
import NoBackgroundButton from "./NoBackgroundButton";

const NavOptions = () => {
  return (
    <div className="lg:mr-10 flex items justify-around w-1/3">
      <NoBackgroundButton buttonText="About" onClick={() => {}} extraCss="" />
      <NoBackgroundButton buttonText="Sign In" onClick={() => {}} extraCss="" />
    </div>
  );
};

export default NavOptions;
