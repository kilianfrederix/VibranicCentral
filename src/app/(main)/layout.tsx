import "@/styles/globals.css";

import { PropsWithChildren, Suspense } from "react";
import type { Metadata } from "next";


import { Navbar } from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { SiteConfig } from "@/lib/constant";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: SiteConfig.title,
    template: `%s | ${SiteConfig.title}`,
  },
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: SiteConfig.title,
    description: SiteConfig.description,
    siteName: SiteConfig.title,
    images: '/opengraph-image.png',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteConfig.title,
    description: SiteConfig.description,
    images: '/opengraph-image.png',
  }
};

import { Footer } from "@/components/footer";
import NavbarLoading from "@/components/navbar/navbar-loading";
import { getLanguage } from "@/i18n";
import Providers from "@/lib/providers";

const RootLayout = ({children}: PropsWithChildren) => {
  const locale = getLanguage();
  return (
      <html lang={locale} suppressHydrationWarning>
        <body 
          className={cn(
            'main-theme-gradient flex min-h-screen flex-col font-sans',
            fonts
          )}
        >
          <Providers>
            <Suspense fallback={<NavbarLoading />}>
              <Navbar />
            </Suspense>
            <div className="flex grow flex-col">
              <main className="grow">
              {children}
              <Analytics />
              </main>
              <SideBar />
              <div className="relative bottom-0 mt-auto">
                <Footer />
              </div>
            </div>
            <Toaster />
          </Providers>
        </body>
      </html>
  );
}

export default RootLayout;
