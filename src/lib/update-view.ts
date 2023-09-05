import { decorateText } from './decorate-text';
import { draw } from './draw';
import { sanitizeText } from './sanitize-text';
import { setURLParameters } from './url-parameters';

export function updateView(
  text: string,
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  textarea: HTMLTextAreaElement
): void {
  const lines = sanitizeText(text);
  draw(decorateText(lines), image, canvas);
  setURLParameters(lines, textarea);
}
