export function drawTextLine(line: string, lineIndex: number, fontSize: number, canvas: HTMLCanvasElement): void {
  const context = canvas.getContext('2d')!;
  const drawnText = context.measureText(line);
  const positionX = canvas.width / 2 - drawnText.width / 2;
  const positionY = fontSize * (lineIndex + 1);
  context.strokeText(line, positionX, positionY);
  context.fillText(line, positionX, positionY);
}
