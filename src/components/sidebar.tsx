'use client';

import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from '../../public/white-small-logo.jpg';
import logoFull from '../../public/white-large-logo.jpg';

import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconWrapperProps {
  children: ReactNode;
  label: string;
  isActive: boolean;
  navigateTo: string;
  expanded: boolean;
}

function IconWrapper({
  children,
  label,
  isActive,
  navigateTo,
  expanded,
}: IconWrapperProps) {
  console.log('expanded', expanded);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={navigateTo}
            className={`my-2 flex cursor-pointer space-x-2 whitespace-nowrap rounded-md p-2 text-blue-50 hover:bg-blue-100 hover:text-blue-500 ${isActive ? 'shadow-c-50 text-blue-950' : ''} `}
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent className={`bg-blue-500 ${expanded ? 'w-[180px] text-md font-semibold p-0 -ml-48 text-center' : 'ml-5'}`} side="right">{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}


export default function SideBar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  // Functie om te bepalen of een icoon actief is
  const isActive = (path: string) => pathname === path;

  return (
    <div 
      className={`${expanded ? 'w-64' : 'w-18'} sidebar`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={`flex h-full flex-col justify-between px-4`}>
        <div>
          <div className="my-4 border-b-2 border-b-blue-300">
            <div className="mb-4 flex items-center rounded-lg bg-white p-1">
              {/* als expanded, gebruik logofull, anders logo */}
              <Image 
                src={expanded ? logoFull : logo}
                className={expanded ? 'ml-2' : ''} 
                alt="Home"
                width={expanded ? 200 : 27} 
                height={expanded ? 200 : 27} 
              />
            </div>
          </div>
          <IconWrapper
            label="HOME"
            isActive={isActive('/')}
            navigateTo="/"
            expanded={expanded}
          >
            <Icons.home className="size-5 shrink-0" />
          </IconWrapper>

          {/* add separator line */}
          <div className="my-2 border-b"></div>
          <IconWrapper 
            label="DASHBOARD" 
            isActive={isActive('/dashboard')} 
            navigateTo="/dashboard"
            expanded={expanded}
          >
            <Icons.companyinfo className="size-5 shrink-0" />
          </IconWrapper>

          {/* add separator line */}
          <div className="my-2 border-b"></div>
          <IconWrapper
            label="FEEDBACK"
            isActive={isActive('/feedback')}
            navigateTo="/feedback"
            expanded={expanded}
          >
            <Icons.companyinfo className="size-5 shrink-0" />
          </IconWrapper>
          
          {/* add separator line */}
          <div className="my-2 border-b"></div>

          <IconWrapper
            label="SETTINGS"
            isActive={isActive('/settings')}
            navigateTo="/settings"
            expanded={expanded}
          >
            <Icons.archive className="size-5 shrink-0" />
          </IconWrapper>

          {/* add separator line */}
          <div className="my-2 border-b"></div>

          <IconWrapper
            label="NOTIFICATIONS"
            isActive={isActive('/notifications')}
            navigateTo="/notifications"
            expanded={expanded}
          >
            <Icons.collaboration className="size-5 shrink-0" />
          </IconWrapper>
        </div>
      </div>
    </div>
  );
};