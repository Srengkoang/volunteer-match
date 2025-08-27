"use client"; // This MUST be the very first line of the file.

import Image from 'next/image';
import Link from 'next/link';

export default function OrganizationPage() {
  // Define a dummy array of organization data for demonstration purposes.
  // In a real application, this data would be fetched from a database or API.
  const organizations = [
    {
      id: 1,
      name: "Green Earth Foundation",
      description: "Dedicated to environmental conservation and sustainability projects worldwide.",
      image: "https://placehold.co/400x400/22c55e/ffffff?text=Green+Earth"
    },
    {
      id: 2,
      name: "Community Care Hub",
      description: "Provides support services and resources for local families and children in need.",
      image: "https://placehold.co/400x400/ef4444/ffffff?text=Community+Hub"
    },
    {
      id: 3,
      name: "Helping Paws Society",
      description: "Focuses on animal rescue, rehabilitation, and finding loving homes for pets.",
      image: "https://placehold.co/400x400/8b5cf6/ffffff?text=Helping+Paws"
    },
    {
      id: 4,
      name: "Literacy for All",
      description: "Promotes reading and education for underserved communities and adult learners.",
      image: "https://placehold.co/400x400/f59e0b/ffffff?text=Literacy"
    },
    {
      id: 5,
      name: "Global Health Alliance",
      description: "Works to improve public health and medical access in developing regions.",
      image: "https://placehold.co/400x400/10b981/ffffff?text=Health+Alliance"
    },
    {
      id: 6,
      name: "Youth Empowerment Initiative",
      description: "Mentors and supports young people to achieve their full potential.",
      image: "https://placehold.co/400x400/6366f1/ffffff?text=Youth+Empowerment"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      {/* Page Header Section */}
      <div className="container mx-auto text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">Our Partner Organizations</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the incredible organizations that are making a difference in the world. Click on a card to learn more about their mission and how you can get involved.
        </p>
      </div>

      {/* Organizations Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {organizations.map((org) => (
          // Card for each organization. Using a Link to make the card clickable.
          // Note: In a real app, href would be dynamic, e.g., `/organization/${org.id}`
          <Link key={org.id} href="/organization-details" passHref>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col items-center text-center p-6">
              {/* Organization Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-500">
                <Image
                  src={org.image}
                  alt={org.name}
                  width={128}
                  height={128}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              
              {/* Organization Name */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{org.name}</h2>
              
              {/* Organization Description */}
              <p className="text-gray-600 text-sm italic">{org.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}