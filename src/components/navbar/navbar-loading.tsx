'use client';

import React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function NavbarLoading() {
  return (
    <div className="sticky mr-14 mt-4 flex justify-end">
      <Button
        variant="outline"
        className="size-10 rounded-full bg-white p-2 text-center text-grey-900 shadow-sm drop-shadow-md"
      >
        <Icons.loadingDots className="size-6 animate-pulse text-grey-400" />
      </Button>
    </div>
  );
}