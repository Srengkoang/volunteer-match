import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-white text-center p-4 relative z-10">
      
      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-2">VOLUNTEER MATCH</h1>
      
      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl mb-10">Find The Best Opportunities For You</p>
      
     {/* Buttons */}
      <div className="flex flex-col space-y-4 w-full items-center">
        <Link href="/login" passHref>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded-full w-64 transition-colors duration-300">
            Log In
          </button>
        </Link>
        <Link href="/signup" passHref>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded-full w-64 transition-colors duration-300">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Small Acts Text */}
      <p className="mt-20 text-xs tracking-wide">SMALL ACTS CAN MAKE THE WORLD BETTER</p>
      
    </div>
  );
}