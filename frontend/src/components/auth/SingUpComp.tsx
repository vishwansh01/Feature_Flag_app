import React from "react";

const SingUpComp = () => {
  return (
    <div className="border-slate-300 border-2 rounded-xl hover:bg-blue-100 h-2/3 flex flex-col w-1/2 items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">How do you want to Sign Up ?</h1>
      <div className="flex w-full items-center justify-center gap-4">
        <div
          className="py-2 px-1 border bg-gray-100 text-slate-800 font-semibold tracking-wider hover:bg-gray-200 cursor-pointer rounded-xl text-center border-border-dark w-1/3"
          onClick={() => {}}
        >
          ADMIN
        </div>
        <div className="py-2 px-1 border bg-gray-100 text-slate-800 font-semibold tracking-wider hover:bg-gray-200 cursor-pointer rounded-xl text-center border-border-dark w-1/3">
          DEVELOPER
        </div>
      </div>
    </div>
  );
};

export default SingUpComp;
