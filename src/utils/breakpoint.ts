import { QuartzTheme } from '../components/theme';

type ScreenSize = 'mobileS' | 'mobileM' | 'mobileL' | 'tablet' | 'laptop' | 'laptopL' | 'desktop' | 'desktopL';

interface StyledProps {
  theme: QuartzTheme;
}

export function breakpoint(screenSize: ScreenSize) {
  return (styledProps: StyledProps) => `@media (min-width: ${styledProps.theme.screenSize[screenSize]})`;
}
