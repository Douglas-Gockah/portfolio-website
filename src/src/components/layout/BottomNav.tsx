'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-bg/80 backdrop-blur-md border border-border rounded-pill px-2 py-2 flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-5 py-2 rounded-pill text-sm transition-colors ${
              isActive
                ? 'bg-accent text-bg font-medium'
                : 'text-t2 hover:text-t1'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
