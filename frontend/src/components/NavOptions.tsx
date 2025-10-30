"use client";
import React from "react";
import NoBackgroundButton from "./NoBackgroundButton";
import { useRouter } from "next/navigation";
// type Options = {
//   text: string;
//   onClick: () => void;
// };

const NavOptions = () => {
  const navigation = useRouter();
  return (
    <div className="lg:mr-10 flex items justify-around w-1/3">
      <NoBackgroundButton buttonText="About" onClick={() => {}} extraCss="" />
      <NoBackgroundButton
        buttonText="Sign In"
        onClick={() => {
          navigation.push("/auth/signup");
        }}
        extraCss=""
      />
    </div>
  );
};

export default NavOptions;
