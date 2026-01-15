import { resources } from '@/i18n';

export type Language = keyof typeof resources;

export function isLanguage<T>(value: T | Language ): value is Language {
  return (value as Language) in resources;
}