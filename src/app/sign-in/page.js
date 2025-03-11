"use client";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-gray-800 p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-white">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
