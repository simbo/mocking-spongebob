import './style.scss';

import { createImage } from './lib/create-image';
import { sanitizeText } from './lib/sanitize-text';
import { updateView } from './lib/update-view';
import { getURLParameters } from './lib/url-parameters';

const image = await createImage('./mocking-spongebob.jpg');
const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
const textarea = document.querySelector<HTMLTextAreaElement>('#textarea')!;

canvas.width = image.width;
canvas.height = image.height;

textarea.addEventListener('keyup', () => updateView(textarea.value, image, canvas, textarea));

const urlParameters = getURLParameters();

if (urlParameters.text) {
  textarea.value = sanitizeText(urlParameters.text).join('\n');
}

updateView(textarea.value.length > 0 ? textarea.value : textarea.placeholder, image, canvas, textarea);
