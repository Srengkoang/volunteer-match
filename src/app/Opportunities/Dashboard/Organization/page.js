"use client"; // This page needs to be a Client Component for interactivity.

import Link from 'next/link';
import Image from 'next/image'; // Import the Image component for optimized images

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 w-full p-4 bg-transparent text-white z-20">
        <ul className="flex justify-end space-x-8 text-lg font-semibold">
          <li><Link href="/dashboard" className="hover:text-green-300">Home</Link></li>
          <li><Link href="/organization" className="hover:text-green-300">Organization</Link></li>
          <li><Link href="/notifications" className="hover:text-green-300">Notifications</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-start p-8"
        // >>> IMPORTANT: REPLACE THIS WITH YOUR ACTUAL IMAGE PATH, e.g., '/images/dashboard-hero.jpg' <<<
        style={{ backgroundImage: "url('/path/to/your/dashboard-hero-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        
        {/* Overlay for text readability (pointer-events-none ensures clicks pass through) */}
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
        
        {/* Text content over image */}
        <div className="relative z-10 text-white text-left ml-10">
          <h1 className="text-5xl font-bold text-green-400">The Warm Heart Start</h1>
          <h2 className="text-5xl font-bold mt-2">From Here</h2>
        </div>
      </section>

      {/* About The Volunteer Section */}
      <section className="container mx-auto py-12 px-8 flex flex-col md:flex-row items-center md:space-x-10">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-3xl font-bold text-green-700 mb-6">About The Volunteer</h3>
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
            {/* >>> IMPORTANT: REPLACE THIS WITH YOUR ACTUAL IMAGE PATH, e.g., '/images/volunteer-group.jpg' <<< */}
            <Image 
              src="/path/to/your/volunteer-group-image.jpg" 
              alt="Volunteer group" 
              width={150} // Adjust width as needed
              height={150} // Adjust height as needed
              objectFit="cover"
              className="rounded-lg" 
            />
          </div>
        </div>
        <div className="md:w-2/3 text-lg leading-relaxed">
          <p>
            VolunteerMatch is an online platform that connects individuals and organizations with volunteer
            opportunities. It helps people find ways to use their time and skills to support causes they care about—
            either in-person or virtually. Nonprofits, schools, and community groups can post volunteer roles,
            and volunteers can browse and apply based on their interests, location, or skills.
          </p>
        </div>
      </section>

      {/* New Section: Opportunities */}
      <section className="container mx-auto py-12 px-8">
        <h3 className="text-3xl font-bold text-green-700 mb-6 text-left">Opportunities</h3>
        <p className="text-xl font-semibold text-gray-700 mb-8 text-center">Upcoming</p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Location Icon Block */}
          <Link href="/opportunities/location" passHref>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">📍</div>
              <span className="text-sm font-medium text-gray-700">Location</span>
            </div>
          </Link>

          {/* Time Icon Block */}
          <Link href="/opportunities/time" passHref>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">🕒</div>
              <span className="text-sm font-medium text-gray-700">Time</span>
            </div>
          </Link>

          {/* Organization Icon Block */}
          <Link href="/opportunities/organization" passHref>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">🏢</div>
              <span className="text-sm font-medium text-gray-700">Organization</span>
            </div>
          </Link>

          {/* List Icon Block */}
          <Link href="/opportunities/list" passHref>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">📋</div>
              <span className="text-sm font-medium text-gray-700">List</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Optional: Add a simple footer to match other pages */}
      <footer className="w-full text-center py-4 text-xs text-gray-600 bg-white shadow-inner">
        <p>&copy; 2025 Volunteer Match. All rights reserved.</p>
      </footer>
    </div>
  );
}
