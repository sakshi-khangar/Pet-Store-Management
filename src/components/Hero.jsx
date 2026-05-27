function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 md:py-24 transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl"></div>
        <div className="absolute -bottom-28 -right-28 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-800/60 px-4 py-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Trusted Pet Care
              </span>
            </div>

            <h5 className="text-primary text-lg font-semibold mb-2">
              Welcome To
            </h5>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 dark:text-white leading-[1.05]">
              HAPPY PAWS
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
              Your Trusted Pet Shop & Management System
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <button className="bg-primary hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Explore Pets
              </button>

              <a
                href="/"
                className="inline-flex items-center justify-center py-3 px-6 rounded-full border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:bg-white/70 dark:hover:bg-gray-900/50 transition"
              >
                See Services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { t: "Vaccinated", s: "🛡️" },
                { t: "Verified Vendors", s: "✅" },
                { t: "24/7 Support", s: "🎧" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="flex items-center gap-3 rounded-xl bg-white/60 dark:bg-gray-900/40 border border-gray-200/60 dark:border-gray-800/60 px-4 py-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center font-bold">
                    {x.s}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800 dark:text-gray-100 text-sm">
                      {x.t}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Quality-first
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                alt="Happy Dog"
                className="w-full md:w-96 rounded-2xl shadow-xl object-cover border border-white/60 dark:border-white/10"
              />
              <div className="absolute -bottom-5 -left-4 bg-white/80 dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-800/70 rounded-2xl px-5 py-4 shadow-lg">
                <p className="font-extrabold text-gray-900 dark:text-white">
                  New Pet Listings
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Adopt or manage in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

