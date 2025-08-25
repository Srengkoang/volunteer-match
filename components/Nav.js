import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="absolute top-0 right-0 p-4 z-20">
      <ul className="flex space-x-4 items-center">
        <li>
          <Link href="/help">
            <div className="w-8 h-8 rounded-full bg-gray-700 opacity-75 flex items-center justify-center text-sm font-bold text-white">?</div>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <div className="w-8 h-8 rounded-full bg-gray-700 opacity-75 flex items-center justify-center text-sm text-white">❤️</div>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <div className="w-8 h-8 rounded-full bg-gray-700 opacity-75 flex items-center justify-center text-sm text-white">🔍</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}