export default function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen w-full text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-img.png')" }}
    >
      <div className="text-center px-4 sm:px-8">
        {/* Logo Section */}
        <div className="mb-6">
          <img
            src="/logo.png"
            alt="RevScheduler Logo"
            className="h-16 sm:h-20 mx-auto"
          />
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-10 sm:mb-16">
          Effortless Scheduling at Your Fingertips
        </p>

        {/* Confirmation Box */}
        <div className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] bg-gray-700 bg-opacity-60 rounded-3xl p-6 md:p-8 shadow-2xl max-w-full min-h-[250px] flex flex-col justify-center items-center">
          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 sm:gap-8">
            <button className="w-full max-w-xs px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-[0px_10px_15px_rgba(0,0,0,0.5)] border border-white">
              Confirm
            </button>

            <button className="text-gray-300 hover:underline text-sm sm:text-base">
              Book a Different Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
