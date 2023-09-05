import { draw } from './draw';
import { decorateText } from './decorate-text';
import { setURLParameters } from './url-parameters';
import { sanitizeText } from './sanitize-text';

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
