export interface URLParameters {
  text: string;
}

export function setURLParameters(text: string | string[], textarea: HTMLTextAreaElement): void {
  text = (Array.isArray(text) ? text.join('\n') : text).trim();
  const parameters: { [key: string]: string } = {};
  if (text.length > 0 && text !== textarea.placeholder) {
    parameters.text = text;
  }
  const url = new URL(window.location.href);
  url.search = new URLSearchParams(parameters).toString();
  window.history.replaceState({}, document.title, url.toString());
}

export function getURLParameters(): Partial<URLParameters> {
  const urlParameters = new URLSearchParams(window.location.search);
  const text = (urlParameters.get('text') || '').trim();
  return { text: text.length > 0 ? text : undefined };
}
