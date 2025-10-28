import SignHero from "@/components/auth/SignHero";
import React from "react";

const Page = () => {
  return (
    <main>
      {/* <SignNavBar /> */}
      <section className="flex flex-row gap-52 h-screen justify-center items-center">
        <SignHero />
        <SignUpForm />
      </section>
    </main>
  );
};
