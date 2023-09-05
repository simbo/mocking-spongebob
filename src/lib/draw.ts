import { calculateFontSize } from './calculate-font-size';
import { drawTextLine } from './draw-text-line';
import { setFontStyle } from './set-font-style';

export function draw(lines: string[], image: HTMLImageElement, canvas: HTMLCanvasElement): void {
  const context = canvas.getContext('2d')!;
  const fontSize = calculateFontSize(lines, canvas);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0);
  setFontStyle(fontSize, canvas);
  lines.forEach((line, index) => drawTextLine(line, index, fontSize, canvas));
}
