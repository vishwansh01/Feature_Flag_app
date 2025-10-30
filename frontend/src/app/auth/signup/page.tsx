import SignHero from "@/components/auth/SignHero";
import SingUpComp from "@/components/auth/SingUpComp";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="">
      {/* <SignNavBar /> */}
      <section className="flex h-[75vh] flex-row gap-52 justify-center items-center">
        <SignHero />
        <SingUpComp />
      </section>
    </main>
  );
};
export default SignUpPage;
