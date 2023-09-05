import './style.scss';

import githubBadgeSource from './images/badge-github.svg';
import spongebobImageSource from './images/mocking-spongebob.jpg';
import { createImage } from './lib/create-image';
import { sanitizeText } from './lib/sanitize-text';
import { updateView } from './lib/update-view';
import { getURLParameters } from './lib/url-parameters';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" title="right click to copy or save"></canvas>
  <textarea name="textarea" id="textarea" placeholder="write something…" tabindex="0" cols="30" rows="10"></textarea>
  <footer>
    <a href="https://github.com/simbo/mocking-spongebob">
      <img src="${githubBadgeSource}" alt="simbo/mocking-spongebob" />
    </a>
  </footer>
`;

const image = await createImage(spongebobImageSource);
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
