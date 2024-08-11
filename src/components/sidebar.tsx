'use client'; // This is a client component 👈🏽

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';

function IconWrapper({ children, label, isActive, navigateTo, expanded }) {
  return (
    <Link
      href={navigateTo}
      className={`my-2 flex cursor-pointer space-x-2 rounded-md p-2 hover:bg-blue-300${isActive ? 'bg-blue-200' : ''}`}
    >
      {children}
      <span
        className={`${expanded ? 'inline' : 'hidden'} text-muted-foreground text-sm`}
      >
        {label}
      </span>
    </Link>
  );
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  // Functie om te bepalen of een icoon actief is
  const isActive = (path: string) => pathname === path;

  return (
    <div
      className={`transition-width fixed inset-y-0 left-0 z-30 flex flex-col bg-white drop-shadow-xl duration-300 ease-in-out${expanded ? 'w-48' : 'w-16'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={`flex h-full flex-col justify-between px-4`}>
        <div>
          <div className="mb-6 border-b">
            <div className=" my-3 flex items-center space-x-2 rounded-full bg-gray-200 hover:bg-green-100">
              <Image
                src="/favicon/favicon.ico"
                alt="Logo"
                width={32}
                height={0}
              />
            </div>
          </div>

          {/* We gebruiken de `isActive` functie om te controleren of de route overeenkomt */}
          <IconWrapper
            label="Dashboard"
            isActive={isActive('/')}
            navigateTo="/"
            expanded={expanded}
          >
            <Icons.dashboard className="text-muted-foreground size-5 shrink-0" />
          </IconWrapper>

          <IconWrapper
            label="Payouts"
            isActive={isActive('/payouts')}
            navigateTo="/payouts"
            expanded={expanded}
          >
            <Icons.payouts className="text-muted-foreground size-5 shrink-0" />
          </IconWrapper>

          <IconWrapper
            label="Mapping"
            isActive={isActive('/mapping')}
            navigateTo="/mapping"
            expanded={expanded}
          >
            <Icons.mapping className="text-muted-foreground size-5 shrink-0" />
          </IconWrapper>
        </div>

        {/* De pagina voor profiel zou bijvoorbeeld '/profile' kunnen zijn */}
        <IconWrapper
          label="Profile"
          isActive={isActive('/profile')}
          navigateTo="/profile"
          expanded={expanded}
        >
          <Icons.user className="text-muted-foreground size-4 shrink-0" />
        </IconWrapper>
      </div>
    </div>
  );
}
