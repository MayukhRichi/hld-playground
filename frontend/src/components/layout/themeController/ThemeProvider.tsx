'use client';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

export function ThemeProvider({
  children,
  defaultTheme,
  enableSystem,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme ?? 'light'}
      enableSystem={!!enableSystem}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
