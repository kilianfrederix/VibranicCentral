'use client';
import { useEffect, useState } from "react";
import { LucideIcon } from 'lucide-react';

import { Icons } from "../components/icons";

import { getLanguage, setLanguage, Translator } from "@/i18n";

export interface App {
  title: string;
  internal: boolean;
  description: { __html: string};
  link: string;
  icon: LucideIcon
}

export const useApps = (): App[] => {
  let locale = getLanguage();

  const [ isClient, setIsClient ] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient) {
    locale = getLanguage();
    setLanguage();
  }

  const translator = new Translator(isClient, locale, '');
  const t = translator.translate.bind(translator);
  return [
    {
      title: t('BudgetWise', 'BudgetWise'),
      link: '/apps/budgetwise',
      internal: true,
      description: { 
        __html: t('description', 'BudgetWise') 
      },
      icon: Icons.BudgetWise,
    },
    {
      title: t('FocusFlow', 'FocusFlow'),
      link: '/apps/focusflow',
      internal: true,
      description: { 
        __html: t('description', 'FocusFlow') 
      },
      icon: Icons.FocusFlow,
    },
    {
      title: t('CleanCrew', 'CleanCrew'),
      link: '/apps/cleancrew',
      internal: true,
      description: { 
        __html: t('description', 'CleanCrew') 
      },
      icon: Icons.CleanCrew,
    },
    {
      title: t('VibeLink', 'VibeLink'),
      link: '/apps/vibelink',
      internal: false,
      description: { 
        __html: t('description', 'VibeLink') 
      },
      icon: Icons.VibeLink,
    },
    {
      title: t('Eventure', 'Eventure'),
      link: '/apps/eventure',
      internal: false,
      description: { 
        __html: t('description', 'Eventure') 
      },
      icon: Icons.Eventure,
    },
    {
      title: t('RecipeRiot', 'RecipeRiot'),
      link: '/apps/reciperiot',
      internal: false,
      description: { 
        __html: t('description', 'RecipeRiot') 
      },
      icon: Icons.RecipeRiot,
    },
  ]
}
