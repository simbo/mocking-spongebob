import { setFontStyle } from './set-font-style';

const maxFontSize = 300;
const minFontSize = 50;

export function calculateFontSize(lines: string[], canvas: HTMLCanvasElement): number {
  const context = canvas.getContext('2d')!;
  const longestLine = lines.reduce((lastLine, line) => (line.length > lastLine.length ? line : lastLine), '');
  let fontSize = maxFontSize;
  setFontStyle(fontSize, canvas);
  let drawnText = context.measureText(longestLine);
  while (drawnText.width > canvas.width && fontSize > minFontSize) {
    console.log(fontSize);
    fontSize = fontSize - 10;
    setFontStyle(fontSize, canvas);
    drawnText = context.measureText(longestLine);
  }
  return fontSize;
}
