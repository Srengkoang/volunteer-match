import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-black relative">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex z-10">
        
        {/* Left Side: Image part (hidden on small screens) */}
        <div className="w-1/2 hidden md:block" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          {/* A semi-transparent overlay is already handled by the layout, but you can add another for local contrast */}
        </div>

        {/* Right Side: Sign-Up Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
          <form className="w-full space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input 
                id="firstName" 
                name="firstName" 
                type="text" 
                required 
                className="block w-full px-4 py-3 mt-1 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input 
                id="lastName" 
                name="lastName" 
                type="text" 
                required 
                className="block w-full px-4 py-3 mt-1 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="block w-full px-4 py-3 mt-1 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="block w-full px-4 py-3 mt-1 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            {/* Add a Sign Up button here */}
            <button
              type="submit"
              className="w-full px-4 py-3 text-white font-semibold bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign Up
            </button>
          </form>

          <div className="my-6 text-gray-500">Or</div>

          {/* Social Media Icons */}
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <span className="text-xs mt-1">Gmail</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <span className="text-xs mt-1">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <span className="text-xs mt-1">IG</span>
            </div>
          </div>
          
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
    </div>
  );
}