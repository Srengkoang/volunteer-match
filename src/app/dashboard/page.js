"use client"; // This MUST be the very first line of the file.

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
          <li><Link href="/opportunities" className="hover:text-green-300">Opportunities</Link></li>
        </ul>
      </nav>

      {/* Hero Section: More Volunteer-Focused Text and CTA */}
      <section className="relative h-96 flex items-center justify-start p-8"
        // >>> IMPORTANT: REPLACE THIS WITH an IMAGE OF PEOPLE VOLUNTEERING or a community project <<<
        // Example: style={{ backgroundImage: "url('/images/hero-volunteers.jpg')", ... }}
        style={{ backgroundImage: "url('/path/to/your/dashboard-hero-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        
        {/* Overlay for text readability (pointer-events-none ensures clicks pass through) */}
        <div className="absolute inset-0 bg-gray-700 opacity-50 pointer-events-none"></div> 
        
        {/* Text content over image */}
        <div className="relative z-10 text-white text-left ml-10">
          <h1 className="text-5xl font-bold text-green-400">Make a Difference. Volunteer.</h1>
          <h2 className="text-3xl font-bold mt-2">Find Your Purpose. Change Lives.</h2>
          {/* Call to Action Button */}
          <Link href="/opportunities" passHref>
            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
              Find Opportunities
            </button>
          </Link>
        </div>
      </section>

      {/* About The Volunteer Section: More Inspiring Language - Now with green background and white text */}
          <section className="container mx-auto py-12 px-8 flex flex-col md:flex-row items-center md:space-x-10 bg-green-400 text-gray-800"> {/* Changed bg-green-700 to bg-green-200 and text-white to text-gray-800 */}
          <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-3xl text-green-700 font-bold mb-6">Empower Change: Join Our Volunteer Community</h3> {/* Remove text-green-700 */}
          <div className="w-full h-auto rounded-full overflow-hidden shadow-lg bg-white-300">
            {/* >>> IMPORTANT: REPLACE THIS WITH an IMAGE OF DIVERSE VOLUNTEERS WORKING TOGETHER <<< */}
            {/* Example: src="/images/volunteers-working.jpg" */}
            <Image 
              src="/path/to/your/volunteer-group-image.jpg" 
              alt="Volunteers working together" 
              width={100} 
              height={100} 
              objectFit="cover"
              className="rounded-full" 
            />
          </div>
        </div>
        <div className="md:w-2/3 text-lg leading-relaxed">
          <p> {/* Removed text-gray-800 or similar default */}
            Our platform is dedicated to connecting passionate individuals with meaningful volunteer opportunities. 
            Whether you want to lend a hand locally or contribute to global initiatives, we help you discover 
            causes that resonate with your heart. Explore diverse roles, develop new skills, and become part of a 
            community committed to making a tangible, positive impact.
          </p>
        </div>
      </section>

      {/* Opportunities Section: Retained for now */}
      <section className="container mx-auto py-12 px-8">
        <h3 className="text-3xl font-bold text-green-700 mb-6 text-left">Explore Volunteer Pathways</h3>
        <p className="text-xl font-semibold text-gray-700 mb-8 text-center">Upcoming Campaigns & Roles</p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Location Icon Block */}
          <Link href="/opportunities/location" passHref>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">📍</div>
              <span className="text-sm font-medium text-gray-700">By Location</span>
            </div>
          </Link>

          {/* Time Icon Block */}
          <Link href="/opportunities/time" passHref>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">🕒</div>
              <span className="text-sm font-medium text-gray-700">By Time Commitment</span>
            </div>
          </Link>

          {/* Organization Icon Block */}
          <Link href="/opportunities/organization" passHref>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">🏢</div>
              <span className="text-sm font-medium text-gray-700">By Organization</span>
            </div>
          </Link>

          {/* List Icon Block */}
          <Link href="/opportunities/list" passHref>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">📋</div>
              <span className="text-sm font-medium text-gray-700">View All</span>
            </div>
          </Link>
        </div>
      </section>

      {/* New Section: Feedback */}
      <section 
        className="relative py-12 px-8"
        style={{ backgroundImage: "url('/path/to/your/feedback-background-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay for text readability (pointer-events-none ensures clicks pass through) */}
        <div className="absolute inset-0 bg-green-700 opacity-50 pointer-events-none"></div> 
        
        {/* Feedback Title */}
        <h3 className="relative z-10 text-5xl font-bold text-green-400 text-center mb-12">Feedback</h3>
        
        {/* Feedback Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Mr. A Feedback Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-bold mb-4 overflow-hidden"> 
              {/* Replace with actual image for Mr. A */}
              <Image
                src="/path/to/your/mr-a-avatar.jpg"
                alt="Mr. A"
                width={80}
                height={80}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Mr. A</h4>
            <p className="text-gray-600 italic">
              "This platform gave me many opportunities to explore how one person can make a difference in our community."
            </p>
          </div>

          {/* Mr. B Feedback Card - Now in Chinese */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-bold mb-4 overflow-hidden"> 
              {/* Replace with actual image for Mr. B */}
              <Image
                src="/path/to/your/mr-b-avatar.jpg"
                alt="Mr. B"
                width={80}
                height={80}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">先生 B</h4> 
            <p className="text-gray-600 italic">
              "我学到了新技能，遇到了很棒的人，真正觉得自己为比自己更伟大的事情做出了贡献。" 
            </p>
          </div>

          {/* Mr. C Feedback Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-bold mb-4 overflow-hidden"> 
              {/* Replace with actual image for Mr. C */}
              <Image
                src="/path/to/your/mr-c-avatar.jpg"
                alt="Mr. C"
                width={80}
                height={80}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Mr. C</h4>
            <p className="text-gray-600 italic">
              "ការងារស្ម័គ្រចិត្តនេះបានផ្តល់ឱ្យខ្ញុំនូវឱកាសជាច្រើនដើម្បីស្វែងយល់ពីរបៀបដែលបុគ្គលម្នាក់អាចបង្កើតភាពខុសប្លែកគ្នានៅក្នុងសហគមន៍របស់យើង។"
            </p>
          </div>

          {/* Mr. D Feedback Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-bold mb-4 overflow-hidden"> 
              {/* Replace with actual image for Mr. D */}
              <Image
                src="/path/to/your/mr-d-avatar.jpg"
                alt="Mr. D"
                width={80}
                height={80}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Mr. D</h4>
            <p className="text-gray-600 italic">
              "I wanna say that this project have give me many thing to help changing me. hope to see you again."
            </p>
          </div>
        </div>
      </section>

      {/* Optional: Add a simple footer to match other pages */}
      <footer className="w-full text-center py-4 text-xs text-gray-600 bg-white shadow-inner">
        <p>&copy; 2025 Volunteer Match. All rights reserved.</p>
      </footer>
    </div>
  );
}
