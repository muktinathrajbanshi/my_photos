const AuthPage = () => {
  return (
    <div
      className="w-full bg-white h-screen rounded-[30px] sm:rounded-[38px] overflow-hidden
    grid grid-cols-1 lg:grid-cols-12 min-h-160 lg:min-h-180"
    >
      {/* Hero  */}
      <div className="relative lg:col-span-6 p-2 sm:p-3 flex flex-col">
        <div
          className="relative size-full rounded-[26px] sm:rounded-4xl overflow-hidden
        flex flex-col justify-between p-8 sm:p-12 text-white bg-black"
        >
          <img
            src="/login_ribbon.png"
            alt="Fluid Neon Art"
            className="absolute inset-0 size-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black" />
          <div className="relative z-10 mt-auto pt-24 sm:pt-32">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-medium">
              MY Photos
            </h2>
            <p
              className="text-xs sm:text-sm text-white/80 leading-relaxed
            max-w-sm mt-4 sm:mt-5"
            >
              Safely store and organize your HD photos and videos
            </p>
          </div>
        </div>
      </div>

      {/* Form  */}
      <div
        className="lg:col-span-6 bg-white px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16
      flex flex-col justify-between"
      >
        <img
          src="/logo.png"
          alt="App Logo"
          className="h-16 xl:h-20 xl:mt-10 w-auto object-contain"
        />

        <div className="max-w-md w-full mx-auto my-auto py-2">
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
