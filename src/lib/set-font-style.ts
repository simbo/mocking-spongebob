export function setFontStyle(fontSize: number, canvas: HTMLCanvasElement): void {
  const context = canvas.getContext('2d')!;
  context.font = `bold ${fontSize}px Dejavu Sans, Arial, sans-serif`;
  context.strokeStyle = 'black';
  context.fillStyle = 'white';
  context.lineWidth = fontSize * 0.075;
}
