"use client"; // This line is crucial for enabling client-side interactivity like form handling.

import Link from 'next/link';

export default function SignUpPage() {
  // This function will be called when the form is submitted.
  // For now, it prevents the default form submission and logs a message.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Form submitted!");
    // In a real application, you would send this data to your backend for user registration.
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-gray-100 relative">
      <div className="w-full max-w-6xl bg-white rounded-x2 shadow-lg flex relative">
        
        {/* Left Side: Image part. This section is hidden on smaller screens. */}
        <div 
          className="hidden md:block md:w-1/2 relative"
          // Replace '/path/to/your/background-image.jpg' with the actual path to your image
          style={{ backgroundImage: "url('/path/to/your/background-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Overlay for the image, styled to be semi-transparent and non-interactive */}
          <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
        </div>

        {/* Right Side: Sign Up Form. This section contains all the interactive elements. */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center z-10">
          <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">Sign Up</h2>
          
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            {/* First Name Input */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-green-700">First Name</label>
              <input 
                id="firstName" 
                name="firstName" 
                type="text" 
                required 
                className="block w-full px-4 py-3 mt-1 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            {/* Last Name Input */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-green-700">Last Name</label>
              <input 
                id="lastName" 
                name="lastName" 
                type="text" 
                required 
                className="block w-full px-4 py-3 mt-1 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            {/* Email Input */}
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
            {/* Password Input */}
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

            {/* Sign Up Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded-full w-48 transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* "Or" separator */}
          <div className="my-6 text-green-500">Or</div>

          {/* Social Media Icons for registration */}
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
          
          {/* Link to Log In page */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-green-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom green bar - styled to not block interactions */}
      <div className="absolute bottom-0 w-full bg-green-500 h-10 pointer-events-none"></div>
    </div>
  );
}

