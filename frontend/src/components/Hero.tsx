const Hero = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="bg-gradient-to-r from-gray-500 to-black text-transparent bg-clip-text relative">
        <h1 className="font-inter text-center font-semibold text-5xl">
          Secure Feature Management for
          <br />
          Modern Teams
        </h1>
      </div>
      <div className="font-semibold my-4 w-1/2 text-center text-slate-700">
        A complete feature flag and configuration system with role-based
        control, audit logs, and an intuitive frontend dashboard.
      </div>
    </div>
  );
};

export default Hero;
