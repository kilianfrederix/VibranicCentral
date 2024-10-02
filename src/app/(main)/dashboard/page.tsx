'use client';

import { useEffect, useState } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getLanguage, setLanguage, Translator, } from '@/i18n';
import { useApps } from "@/lib/apps";


export default function Dashboard() {
  let locale = getLanguage();

  const [ isClient, setIsClient ] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient) {
    locale = getLanguage();
    setLanguage();
  }
  const apps = useApps();
  const translator = new Translator(isClient, locale, 'home');
  const t = translator.translate.bind(translator);
  return (
    <section className="container top-20 mt-6 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:mt-4 md:-translate-x-1/2 lg:pl-20 xl:pl-0">
      <h1 className="hidden text-3xl font-bold tracking-tighter md:block">
        <span className="underline-bg-blue">Hi, Welcome back!</span>
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-4">
        {apps.map((app, index) => (
          <Card 
            className="flex flex-col justify-between border shadow-sm shadow-blue-400/50 w-[350px] h-[180px]"
            key={index}
          >
          <CardHeader>
            <CardTitle>{app.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription></CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={app.link} className="flex items-center gap-1 text-blue-500 hover:text-blue-700">
              {t('open')}
              <ExternalLinkIcon />
            </Link>
          </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
