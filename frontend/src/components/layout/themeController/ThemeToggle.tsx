'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// Components
import { Switch, SwitchSize } from '@/components/ui/switch';

export const ThemeToggle = ({ size = 'md' }: { size: SwitchSize }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const handleToggle = (checked: boolean) => {
    setIsDark(checked);
    setTheme(checked ? 'dark' : 'light');
  };

  return <Switch checked={isDark} onCheckedChange={handleToggle} size={size} />;
};
