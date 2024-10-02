'ues client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground mt-auto w-full py-2 text-center text-sm">
      © {new Date().getFullYear()} by {' '}
      <Button variant="link" className="p-0" asChild>
        <Link
          href={''}
          target='_blank'
          className='decoration hover:underline hover: decoration-blue-500'
        >
          vibranic central
        </Link>
      </Button>
    </footer>
  )
}