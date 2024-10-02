'use client';

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ClerkProvider } from "@clerk/nextjs";

const Providers: React.FC<React.PropsWithChildren<unknown>> = ({ 
children,
}) => {
  const [client] = React.useState(new QueryClient());

  return (
    <ClerkProvider>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ClerkProvider>
  )
};

export default Providers;