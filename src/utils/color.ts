import tinycolor from 'tinycolor2';

export function setAlpha(color: string, alpha: number) {
  return tinycolor(color).setAlpha(alpha).toRgbString();
}
