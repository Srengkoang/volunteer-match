"use client";

import { useState } from 'react';

// SVG Icons for social media
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.528 0-.65.234-.65.71v1.69h2l-.29 2h-1.71v6h-3v-6h-2v-2h2v-2.112c0-2.426 1.186-3.888 3.864-3.888h2.136v3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.162-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.174-1.554-3.593-1.554-3.414 0-6.182 2.766-6.182 6.182 0 .484.055.955.162 1.404-5.143-.258-9.697-2.723-12.748-6.459-.533.917-.84 1.97-.84 3.297 0 2.144 1.085 4.041 2.723 5.14-.803-.025-1.566-.246-2.229-.623v.079c0 2.986 2.127 5.467 4.938 6.033-.487.131-.998.201-1.523.201-.371 0-.735-.035-1.09-.104.789 2.443 3.064 4.213 5.753 4.262-2.09.163-4.135.253-6.174.253-.402 0-.8-.016-1.196-.071 2.701 1.737 5.918 2.748 9.38 2.748 11.252 0 17.414-9.358 17.414-17.414 0-.265-.006-.529-.015-.791.958-.694 1.793-1.56 2.457-2.549z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.228-1.667 4.747-4.919 4.919-.058.03-.113.048-.113.048-.124.057-.253.082-.387.097-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.228 1.667-4.747 4.919-4.919.058-.03.113-.048.113-.048.124-.057.253-.082.387-.097 1.267-.058 1.647-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.944.072-4.008.181-6.191 2.33-6.372 6.372-.058 1.277-.072 1.685-.072 4.944s.014 3.667.072 4.944c.181 4.008 2.33 6.191 6.372 6.372 1.277.058 1.685.072 4.944.072s3.667-.014 4.944-.072c4.008-.181 6.191-2.33 6.372-6.372.058-1.277.072-1.685.072-4.944s-.014-3.667-.072-4.944c-.181-4.008-2.33-6.191-6.372-6.372-1.277-.058-1.685-.072-4.944-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.44-.645-1.44-1.44s.644-1.44 1.44-1.44 1.44.645 1.44 1.44-.644 1.44-1.44 1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-3v-5h3v5zm-1.5-6.046c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm7.5 6.046h-3v-2.003c0-1.218-.024-2.781-1.691-2.781-1.697 0-1.958 1.322-1.958 2.693v2.091h-3v-5h2.903v1.398h.043c.395-.756 1.356-1.551 2.871-1.551 3.065 0 3.64 2.017 3.64 4.646v2.508z"/>
  </svg>
);


// The main App component that manages the application state and view transitions.
export default function App() {
  // Define state to manage which view is currently active.
  const [currentView, setCurrentView] = useState('dashboard'); // Can be 'dashboard', 'organization', 'location', 'time', 'opportunitiesList'
  const [notifications, setNotifications] = useState([]); // State for notifications
  const [showNotifications, setShowNotifications] = useState(false); // State to toggle notification dropdown

  // Function to add a new notification
  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(), // Unique ID for each notification
      message: message,
      read: false,
      timestamp: new Date().toLocaleTimeString(),
    };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
  };

  // Function to mark a notification as read
  const markNotificationAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  // Calculate unread notification count
  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  // Handles the donation button click
  const handleDonateClick = (amount) => {
    console.log(`User wants to donate $${amount}`);
    addNotification(`Someone successfully donated $${amount}! Thank you!`); // Add notification
    alert(`Thank you for your interest in donating $${amount}! (Functionality to be implemented)`);
  };

  // DashboardPage component
  const DashboardPage = ({ setCurrentView, addNotification, notifications, showNotifications, setShowNotifications, markNotificationAsRead, unreadNotificationsCount }) => (
    <div className="min-h-screen text-gray-800">
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 w-full p-8 bg-transparent text-white z-20"> {/* Changed bg-transparent-100 to bg-transparent */}
        <ul className="flex justify-end space-x-8 text-lg font-semibold relative">
          <li>
            <button onClick={() => setCurrentView('organization')} className="hover:text-green-300">Organization</button>
          </li>
          <li>
            <button 
              onClick={() => setShowNotifications(!showNotifications)} 
              className="hover:text-green-300 relative focus:outline-none"
            >
              Notifications
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-30 overflow-hidden">
                <div className="py-1">
                  {notifications.length > 0 ? (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        onClick={() => markNotificationAsRead(notif.id)}
                        className={`block px-4 py-2 text-sm ${notif.read ? 'text-gray-500' : 'text-gray-800 font-medium'} hover:bg-gray-100 cursor-pointer`}
                      >
                        {notif.message} <span className="text-xs text-gray-400">({notif.timestamp})</span>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-500">No new notifications</div>
                  )}
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Hero Section: More Volunteer-Focused Text and CTA */}
      <section className="relative h-96 flex items-center justify-start p-8" 
        style={{ backgroundImage: "url('/istockphoto-1498170916-612x612.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        
        {/* Overlay for text readability (pointer-events-none ensures clicks pass through) */}
        <div className="absolute inset-0 bg-green-700 opacity-50 pointer-events-none"></div> 
        
        {/* Text content over image */}
        <div className="relative z-10 text-white text-left ml-10">
          <h1 className="text-5xl font-bold text-green-400">Make a Difference. Volunteer.</h1>
          <h2 className="text-3xl font-bold mt-2">Find Your Purpose. Change Lives.</h2>
          {/* Call to Action Button */}
          <button onClick={() => setCurrentView('opportunitiesList')} className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
            Find Opportunities
          </button>
        </div>
      </section>

      {/* About The Volunteer Section: More Inspiring Language - Now with light green background and dark text */}
      <section className="container mx-auto py-12 px-8 flex flex-col md:flex-row items-center md:space-x-10 bg-green-200 text-gray-800"> 
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-3xl font-bold mb-6">Empower Change: Join Our Volunteer Community</h3> 
          <div className="w-full h-auto rounded-full overflow-hidden shadow-lg">
            <img 
              src="https://placehold.co/400x400/34D399/1F2937?text=Volunteers"
              alt="Volunteers working together" 
              className="w-full h-full rounded-full" 
            />
          </div>
        </div>
        <div className="md:w-2/3 text-lg leading-relaxed">
          <p> 
            Our platform is dedicated to connecting passionate individuals with meaningful volunteer opportunities. 
            Whether you want to lend a hand locally or contribute to global initiatives, we help you discover 
            causes that resonate with your heart. Explore diverse roles, develop new skills, and become part of a 
            community committed to making a tangible, positive impact.
          </p>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="container mx-auto bg-white-100 py-12 px-8">
        <h3 className="text-3xl font-bold text-green-700 mb-6 text-left">Explore Volunteers Opportunities</h3>
        <p className="text-xl font-semibold text-gray-700 mb-8 text-center">Upcoming Campaigns & Roles</p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Location Icon Block */}
          <button onClick={() => setCurrentView('location')} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">📍</div>
            <span className="text-sm font-medium text-gray-700">By Location</span>
          </button>

          {/* Time Icon Block */}
          <button onClick={() => setCurrentView('time')} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">🕒</div>
            <span className="text-sm font-medium text-gray-700">By Time</span>
          </button>

          {/* Organization Icon Block */}
          <button onClick={() => setCurrentView('organization')} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">🏢</div>
            <span className="text-sm font-medium text-gray-700">By Organization</span>
          </button>

          {/* List Icon Block */}
          <button onClick={() => setCurrentView('opportunitiesList')} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-36">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-2">📋</div>
            <span className="text-sm font-medium text-gray-700">View All</span>
          </button>
        </div>
      </section>

      {/* New Section: Feedback */}
      <section 
        className="relative py-12 px-8"
      >
        {/* Overlay for text readability (pointer-events-none ensures clicks pass through) */}
        <div className="absolute inset-0 bg-green-700 opacity-50 pointer-events-none"></div> 
        
        {/* Feedback Title */}
        <h3 className="relative z-10 text-5xl font-bold text-white text-center mb-12">Feedback</h3> 
        
        {/* Feedback Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Mr. A Feedback Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-bold mb-4 overflow-hidden"> 
              <img
                src="premium_photo-1732117940281-e1598445016c.jpg"
                alt="Mr. Charlie"
                className="rounded-full w-full h-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Mr. Charlie</h4>
            <p className="text-gray-600 italic">
              &quot;This platform gave me many opportunities to explore how one person can make a difference in our community.&quot;
            </p>
          </div>

          {/* Mr. B Feedback Card - Now in Chinese */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-bold mb-4 overflow-hidden"> 
              <img
                src="chinese-man-759759.webp"
                alt="Tom Chen"
                className="rounded-full w-full h-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Tom Chen</h4> 
            <p className="text-gray-600 italic">
              &quot;我学到了新技能，遇到了很棒的人，真正觉得自己为比自己更伟大的事情做出了贡献。&quot; 
            </p>
          </div>

          {/* Mr. C Feedback Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-bold mb-4 overflow-hidden"> 
              <img
                src="WIN_20240831_22_18_20_Pro.jpg"
                alt="Minchul"
                className="rounded-full w-full h-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Minchul</h4>
            <p className="text-gray-600 italic">
              &quot;ការងារស្ម័គ្រចិត្តនេះបានផ្តល់ឱ្យខ្ញុំនូវឱកាសជាច្រើនដើម្បីស្វែងយល់ពីរបៀបដែលបុគ្គលម្នាក់អាចបង្កើតភាពខុសប្លែកគ្នានៅក្នុងសហគមន៍របស់យើង។&quot;
            </p>
          </div>

          {/* Mr. D Feedback Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-bold mb-4 overflow-hidden"> 
              <img
                src="91514b_1_olesya_credit-natalie-godec.jpg"
                alt="Olesya"
                className="rounded-full w-full h-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Olesya</h4>
            <p className="text-gray-600 italic">
              &quot;I wanna say that this project have give me many thing to help changing me. hope to see you again.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* New Section: Donation */}
      <section className="relative py-12 px-8 bg-green-700 text-white"> 
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-green-400 mb-4">Donation</h3>
          <h4 className="text-3xl font-bold mb-12">Bring The Smile Together</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 10$ Donation Card */}
            <div className="bg-green-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-between text-center">
              <div>
                <p className="text-5xl font-extrabold mb-2">10$</p>
                <p className="text-sm mb-4">10$ Help Change the World</p>
              </div>
              <button 
                onClick={() => handleDonateClick(10)} // Calls handleDonateClick from App
                className="bg-white text-green-700 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition-colors duration-300"
              >
                Donate Here
              </button>
            </div>

            {/* 20$ Donation Card */}
            <div className="bg-green-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-between text-center">
              <div>
                <p className="text-5xl font-extrabold mb-2">20$</p>
                <p className="text-sm mb-4">20$ can save our world</p>
              </div>
              <button 
                onClick={() => handleDonateClick(20)} // Calls handleDonateClick from App
                className="bg-white text-green-700 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition-colors duration-300"
              >
                Donate Here
              </button>
            </div>

            {/* 50$ Donation Card */}
            <div className="bg-green-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-between text-center">
              <div>
                <p className="text-5xl font-extrabold mb-2">50$</p>
                <p className="text-sm mb-4">50$, a lot but meaningful</p>
              </div>
              <button 
                onClick={() => handleDonateClick(50)} // Calls handleDonateClick from App
                className="bg-white text-green-700 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition-colors duration-300"
              >
                Donate Here
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-green-800 text-white py-8 px-8 rounded-t-lg shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo/Brand */}
          <div className="col-span-full lg:col-span-1 text-center md:text-left">
            <h4 className="text-3xl font-bold text-green-400 mb-4">VolunteerMatch</h4>
            <p className="text-sm text-green-100">Connecting hearts, changing lives.</p>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Explore</h5>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentView('organization')} className="hover:text-green-300 transition-colors duration-200">Organizations</button></li>
              <li><a href="#" className="hover:text-green-300 transition-colors duration-200">Donate</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold mb-4">Connect With Us</h5>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              {/* Social Media Icons (replaced with SVG components) */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors duration-200 text-2xl" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors duration-200 text-2xl" aria-label="Twitter"><TwitterIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors duration-200 text-2xl" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors duration-200 text-2xl" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
            <p className="text-sm text-green-100">&copy; 2025 VolunteerMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  // This component represents the "By Organization" page.
  const OrganizationView = ({ setBack }) => {
    // Define the data for the organizations.
    const organizations = [
      {
        id: 1,
        name: "The Red Road Foundation",
        description: "Provides support services and resources for local families and children in need.",
        image: "/images (11).png"
      },
      {
        id: 2,
        name: "JICA Cambodia",
        description: "Dedicated to environmental conservation and sustainability projects worldwide.",
        image: "/images (35).jpg"
      },
      {
        id: 3,
        name: "Ministry of Environment Cambodia",
        description: "Focuses on animal rescue, rehabilitation, finding loving homes for pets, and environment",
        image: "/images (12).png"
      },
      {
        id: 4,
        name: "Volunteer Together Association for Cambodia",
        description: "Promotes reading and education for underserved communities and adult learners.",
        image: "/download (16).jpg"
      },
      {
        id: 5,
        name: "Cambodian Volunteers for Community Development (CVCD)",
        description: "Works to improve public health and medical access in developing regions.",
        image: "/15729241265dc0eade139d21.05470112.jpg"
      },
      {
        id: 6,
        name: "Unicef cambodia",
        description: "Mentors and supports young people to achieve their full potential.",
        image: "/images (10).png"
      },
      { 
        id: 7,
        name: "Red Cross Cambodia",
        description: "You Can Save Your Life",
        image: "/Flag_of_Cambodian_Red_Cross.svg.png"
      },
      { 
        id: 8,
        name: "Smart",
        description: "We are Cambodian, togetherlets bring the new smile.",
        image: "/Smart_Axiata.svg"
      },
      { 
        id: 9,
        name: "Prudential Cambodia",
        description: "Always Lesson, Always Understand from you",
        image: "/images (9).png" // Corrected to start with '/' for public folder access
      },
    ];

    return (
      <div className="container mx-auto bg-white py-12 px-8 rounded-2xl shadow-xl">
        <div className="container mx-auto text-center py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">Our Partner Organizations</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the incredible organizations that are making a difference in the world.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {organizations.map((org) => (
            <div key={org.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-500">
                <img
                  src={org.image}
                  alt={org.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{org.name}</h2>
              <p className="text-gray-600 text-sm italic">{org.description}</p>
            </div>
          ))}
        </div>
        {/* New Back to Main Menu Button at the bottom */}
        <div className="flex justify-center mt-8">
            <button 
              onClick={setBack} 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Main Menu
            </button>
        </div>
      </div>
    );
  };
  
  // This component represents the "By Location" page.
  const LocationView = ({ setBack }) => {
    // Dummy data for 10 locations.
    const locations = [
      { id: 1, name: "Community Garden", address: "123 Main St, Cityville", image: "https://placehold.co/100x100/A3E635/1F2937?text=Garden" },
      { id: 2, name: "Central Park Cleanup", address: "456 Oak Ave, Townsville", image: "https://placehold.co/100x100/A3E635/1F2937?text=Park" },
      { id: 3, name: "Food Bank Warehouse", address: "789 Pine Ln, Villagetown", image: "https://placehold.co/100x100/A3E635/1F2937?text=FoodBank" },
      { id: 4, name: "Animal Shelter", address: "101 Maple Rd, Hamlet", image: "https://placehold.co/100x100/A3E635/1F2937?text=Shelter" },
      { id: 5, name: "Elderly Care Center", address: "202 Elm Pl, Metropolis", image: "https://placehold.co/100x100/A3E635/1F2937?text=Care" },
      { id: 6, name: "School Library", address: "303 Birch Ct, Suburbia", image: "https://placehold.co/100x100/A3E635/1F2937?text=Library" },
      { id: 7, name: "Beach Cleanup", address: "404 Ocean Blvd, Seaside", image: "https://placehold.co/100x100/A3E635/1F2937?text=Beach" },
      { id: 8, name: "Riverbank Restoration", address: "505 River Dr, Riverside", image: "https://placehold.co/100x100/A3E635/1F2937?text=River" },
      { id: 9, name: "Urban Farming Project", address: "606 Field Rd, Countryside", image: "https://placehold.co/100x100/A3E635/1F2937?text=Farm" },
      { id: 10, name: "Youth Sports Camp", address: "707 Court Ave, Sportstown", image: "https://placehold.co/100x100/A3E635/1F2937?text=Camp" },
    ];

    return (
      <div className="container mx-auto bg-white py-12 px-8 rounded-2xl shadow-xl max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Available Places by Location</h1>
        
        {/* Container for the list of locations */}
        <div className="space-y-4">
          {locations.map((loc) => (
            <div key={loc.id} className="bg-gray-100 rounded-lg p-4 flex items-center shadow-md">
              <img src={loc.image} alt={loc.name} className="w-16 h-16 rounded-full object-cover mr-4" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{loc.name}</h3>
                <p className="text-sm text-gray-600">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
        {/* New Back to Main Menu Button at the bottom */}
        <div className="flex justify-center mt-8">
            <button 
              onClick={setBack} 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Main Menu
            </button>
        </div>
      </div>
    );
  };

  const TimeView = ({ setBack }) => (
    <div className="container mx-auto bg-white py-12 px-8 rounded-2xl shadow-xl max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Available Time & Dates</h1>
      <div className="bg-gray-100 p-6 rounded-xl text-center text-gray-500">
        <p className="mb-4">This is where your calendar component or a list of available dates will go.</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">31 August 2025</div>
            <div className="bg-white p-3 rounded-lg shadow-sm">7 September 2025</div>
            <div className="bg-white p-3 rounded-lg shadow-sm">14 September 2025</div>
        </div>
        <p>Below are the time slots for the selected date.</p>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm text-sm">9:00 AM</span>
            <span className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm text-sm">11:00 AM</span>
            <span className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm text-sm">2:00 PM</span>
            <span className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm text-sm">4:00 PM</span>
        </div>
      </div>
      {/* New Back to Main Menu Button at the bottom */}
      <div className="flex justify-center mt-8">
          <button 
            onClick={setBack} 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-full transition-colors duration-300 shadow-lg flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Main Menu
          </button>
      </div>
    </div>
  );

  // New Opportunities List Page component
  const OpportunitiesListPage = ({ setBack, addNotification }) => {
    // Dummy data for volunteer opportunities
    const opportunities = [
      {
        id: 1,
        title: "Youth Volunteer",
        organization: "Red Cross",
        image: "https://placehold.co/200x200/FF0000/FFFFFF?text=Youth",
        description: "Help with various youth programs."
      },
      {
        id: 2,
        title: "Education Volunteer",
        organization: "INC Organization",
        image: "https://placehold.co/200x200/FFA500/000000?text=Education",
        description: "Support educational initiatives."
      },
      {
        id: 3,
        title: "Charities Volunteer",
        organization: "Wings",
        image: "https://placehold.co/200x200/ADD8E6/000000?text=Charities",
        description: "Assist with charity events."
      },
      {
        id: 4,
        title: "Environmental Protection Volunteer",
        organization: "Ministry of Environment",
        image: "https://placehold.co/200x200/008000/FFFFFF?text=Environment",
        description: "Participate in environmental projects."
      },
    ];

    const handleOpportunityClick = (opportunity) => {
      console.log(`Opportunity clicked: ${opportunity.title}`);
      alert(`You clicked on: ${opportunity.title}`);
      // In a real application, you would navigate to a detailed page for this opportunity.
    };

    const handleRegisterClick = (opportunity, event) => {
      event.stopPropagation(); // Prevent the card's onClick from firing
      console.log(`Register clicked for: ${opportunity.title}`);
      addNotification(`A user registered for ${opportunity.title}!`); // Add notification for registration
      alert(`You've registered for ${opportunity.title}!`);
    };

    return (
      <div className="min-h-screen bg-white text-gray-800 p-8 w-full max-w-lg mx-auto rounded-2xl shadow-xl">
        {/* Hero Section of the Opportunities List Page - Removed background image and overlay */}
        <section 
          className="relative h-48 flex items-center justify-start p-8 rounded-lg mb-8 bg-green-200"
        >
          <div className="relative z-10 text-gray-800 text-left ml-4">
            <h1 className="text-3xl font-bold text-green-700">List</h1>
            <p className="text-xl font-bold mt-1 text-gray-700">Find Your Volunteer Destination</p>
          </div>
        </section>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-2 gap-4">
          {opportunities.map((opp) => (
            <button
              key={opp.id}
              onClick={() => handleOpportunityClick(opp)}
              className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <img src={opp.image} alt={opp.title} className="w-24 h-24 object-cover rounded-md mb-2" />
              <h3 className="text-md font-semibold text-red-600">{opp.title}</h3>
              <p className="text-sm text-orange-500 mb-2">{opp.organization}</p>
              <button 
                onClick={(e) => handleRegisterClick(opp, e)} // Pass event to stop propagation
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors duration-300 shadow-md mt-auto"
              >
                Register
              </button>
            </button>
          ))}
        </div>
        {/* New Back to Main Menu Button at the bottom */}
        <div className="flex justify-center mt-8">
            <button 
              onClick={setBack} 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Main Menu
            </button>
        </div>
      </div>
    );
  };

  // Conditional rendering based on the `currentView` state.
  const renderView = () => {
    switch (currentView) {
      case 'organization':
        return <OrganizationView setBack={() => setCurrentView('dashboard')} />;
      case 'location':
        return <LocationView setBack={() => setCurrentView('dashboard')} />;
      case 'time':
        return <TimeView setBack={() => setCurrentView('dashboard')} />;
      case 'opportunitiesList': // New case for the Opportunities List
        return <OpportunitiesListPage setBack={() => setCurrentView('dashboard')} addNotification={addNotification} />; // Pass addNotification
      case 'dashboard':
      default:
        return <DashboardPage 
          setCurrentView={setCurrentView} 
          addNotification={addNotification} 
          notifications={notifications}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
          markNotificationAsRead={markNotificationAsRead}
          unreadNotificationsCount={unreadNotificationsCount}
        />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      {renderView()}
    </div>
  );
}
