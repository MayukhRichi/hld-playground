import { SystemModelManager } from './sytemModel/SystemModelManager';
import { ThemeProvider } from '@/components/layout/themeController/ThemeProvider';

export const HomePage = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <SystemModelManager />
    </ThemeProvider>
  );
};
