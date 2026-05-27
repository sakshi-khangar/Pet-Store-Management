import React, { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Demo UI: replace with real auth call later
      await new Promise((r) => setTimeout(r, 600));
      alert(isLogin ? "Login Successful" : "Signup Successful");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200/70 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white rounded-lg mb-4 focus:outline-none transition-colors duration-300";

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/40 backdrop-blur shadow-lg p-8 rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <h2 className="text-center text-2xl font-bold mb-6 dark:text-white">
            {isLogin ? "Login" : "Signup"}
          </h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4 text-left">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className={inputClass}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="mb-4 text-left">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className={inputClass}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="mb-6 text-left">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className={inputClass}
                onChange={handleChange}
                autoComplete={isLogin ? "current-password" : "new-password"}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition shadow-md ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Please wait..." : isLogin ? "Login" : "Signup"}
            </button>

            <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
              Demo form UI — connect your backend to enable real authentication.
            </p>
          </form>

          <p
            className="text-center mt-4 text-primary cursor-pointer hover:underline font-semibold"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create New Account" : "Already Have Account?"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;

