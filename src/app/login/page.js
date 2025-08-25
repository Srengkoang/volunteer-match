"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';  // <-- Import router

export default function LoginPage() {
  const router = useRouter(); // <-- Initialize router

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Redirect to dashboard after login
    router.push('/dashboard'); // <-- This line sends user to dashboard page
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-gray-100 relative">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg flex relative">
        
        {/* Left Side: Image part */}
        <div 
          className="hidden md:block md:w-1/2 relative"
          style={{ backgroundImage: "url('/path/to/your/background-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center z-10">
          <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">Log In</h2>
          
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-700">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="block w-full px-4 py-3 mt-1 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-green-700">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="block w-full px-4 py-3 mt-1 rounded-full border border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded-full w-48 transition-colors duration-300"
              >
                Okay
              </button>
            </div>
          </form>

          <div className="my-6 text-green-500">Or</div>

          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-200 pointer-events-none"></div>
              <span className="text-xs mt-1">Gmail</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-200 pointer-events-none"></div>
              <span className="text-xs mt-1">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-200 pointer-events-none"></div>
              <span className="text-xs mt-1">IG</span>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="text-green-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom green bar */}
      <div className="absolute bottom-0 w-full bg-green-500 h-10 pointer-events-none"></div>
    </div>
  );
}
